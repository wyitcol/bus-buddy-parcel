import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import ConceptPaper from "./pages/ConceptPaper";
import Proposal from "./pages/Proposal";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import SendParcel from "./pages/SendParcel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/concept-paper" element={<ConceptPaper />} />
            <Route path="/proposal" element={<Proposal />} />
            <Route path="/chapter-1" element={<Chapter1 />} />
            <Route path="/chapter-2" element={<Chapter2 />} />
            <Route path="/chapter-3" element={<Chapter3 />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/send/:operator" element={<SendParcel />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
