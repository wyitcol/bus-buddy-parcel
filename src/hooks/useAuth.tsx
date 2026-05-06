import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { createLovableAuth } from "@lovable.dev/cloud-auth-js";
import { User, Session } from "@supabase/supabase-js";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  isAdmin: boolean;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: Error | null }>;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signInWithGoogle: () => Promise<{ error: Error | null; redirected?: boolean }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const OAUTH_REDIRECT_KEY = "busparcel.oauth.redirect";
const SELF_HOSTED_OAUTH_BROKER_URL =
  "https://id-preview--e8292c41-4378-4352-a3e0-90efe570b6b4.lovable.app/~oauth/initiate";
const selfHostedLovableAuth = createLovableAuth({
  oauthBrokerUrl: SELF_HOSTED_OAUTH_BROKER_URL,
});

const isLovableHosted = () => {
  const hostname = window.location.hostname;
  return hostname.endsWith(".lovable.app") || hostname.endsWith(".lovableproject.com");
};

const completePendingOAuthRedirect = () => {
  const redirectPath = sessionStorage.getItem(OAUTH_REDIRECT_KEY);
  if (redirectPath) {
    sessionStorage.removeItem(OAUTH_REDIRECT_KEY);
    window.location.hash = redirectPath;
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdminRole = async (userId: string) => {
    const { data, error } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();

    if (!error && data) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          completePendingOAuthRedirect();
          // Use setTimeout to avoid potential deadlocks
          setTimeout(() => checkAdminRole(session.user.id), 0);
        } else {
          setIsAdmin(false);
        }
        
        setLoading(false);
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        completePendingOAuthRedirect();
        checkAdminRole(session.user.id);
      }
      
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
        data: {
          full_name: fullName,
        },
      },
    });
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { error };
  };

  const signInWithGoogle = async () => {
    sessionStorage.setItem(OAUTH_REDIRECT_KEY, "/admin");

    if (!isLovableHosted()) {
      const result = await selfHostedLovableAuth.signInWithOAuth("google", {
        redirect_uri: window.location.origin,
        extraParams: {
          prompt: "select_account",
        },
      });

      if (result.error) {
        sessionStorage.removeItem(OAUTH_REDIRECT_KEY);
        return { error: result.error, redirected: false };
      }

      if (result.redirected) {
        return { error: null, redirected: true };
      }

      try {
        await supabase.auth.setSession(result.tokens);
        return { error: null, redirected: false };
      } catch (e) {
        sessionStorage.removeItem(OAUTH_REDIRECT_KEY);
        return { error: e instanceof Error ? e : new Error(String(e)), redirected: false };
      }
    }

    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
      extraParams: {
        prompt: "select_account",
      },
    });

    if (result.redirected) {
      return { error: null, redirected: true };
    }

    if (result.error) {
      sessionStorage.removeItem(OAUTH_REDIRECT_KEY);
    }

    return { error: result.error ?? null, redirected: false };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, isAdmin, signUp, signIn, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
