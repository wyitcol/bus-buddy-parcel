import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, ArrowRight, Bus, ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type RouteRow = Database["public"]["Tables"]["routes"]["Row"];

const operatorColors: Record<string, string> = {
  tahmeed: "bg-red-500",
  buscar: "bg-blue-600",
  mashpoa: "bg-green-600",
};

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const AllRoutes = () => {
  const [allRoutes, setAllRoutes] = useState<RouteRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from("routes")
        .select("*")
        .eq("active", true)
        .order("popular", { ascending: false })
        .order("origin_city");
      setAllRoutes(data || []);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">All Bus Routes</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Complete Route Network Across Kenya
            </h1>
            <p className="text-muted-foreground">
              Browse all available routes connecting major cities and counties — Kisii, Kericho, Meru, Pokot, Garissa, and many more.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["tahmeed", "buscar", "mashpoa"].map((operator) => (
              <div key={operator} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                <div className={`w-3 h-3 rounded-full ${operatorColors[operator]}`} />
                <span className="font-semibold text-foreground">{cap(operator)}</span>
              </div>
            ))}
          </div>

          {loading ? (
            <div className="flex justify-center py-12"><Loader2 className="w-6 h-6 animate-spin text-muted-foreground" /></div>
          ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRoutes.map((route) => (
              <div
                key={route.id}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-card hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                {route.popular && (
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bus className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="font-semibold text-foreground">{route.origin_city}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-foreground">{route.destination_city}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${operatorColors[route.bus_operator]}`} />
                  <span className="text-sm font-medium text-muted-foreground">via {cap(route.bus_operator)}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
                      <Clock className="w-3 h-3" />
                      Duration
                    </div>
                    <p className="font-semibold text-foreground text-sm">{route.duration}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
                      <DollarSign className="w-3 h-3" />
                      Price
                    </div>
                    <p className="font-semibold text-foreground text-sm">KES {Number(route.price)}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs mb-1">
                      <MapPin className="w-3 h-3" />
                      Departures
                    </div>
                    <p className="font-semibold text-foreground text-sm">{route.departures}</p>
                  </div>
                </div>

                <Button asChild variant="outline" className="w-full">
                  <Link
                    to={`/send/${route.bus_operator}?from=${encodeURIComponent(route.origin_city)}&to=${encodeURIComponent(route.destination_city)}`}
                  >
                    Send via {cap(route.bus_operator)}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllRoutes;
