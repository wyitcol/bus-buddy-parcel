import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, ArrowRight, Bus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allRoutes = [
  // Original popular routes
  { from: "Nairobi", to: "Mombasa", duration: "8 hours", price: "KES 700", operator: "Tahmeed", departures: "Every 2 hours", popular: true },
  { from: "Nairobi", to: "Kisumu", duration: "6 hours", price: "KES 700", operator: "Buscar", departures: "Every 3 hours", popular: true },
  { from: "Nairobi", to: "Eldoret", duration: "5 hours", price: "KES 700", operator: "Mashpoa", departures: "4x daily", popular: false },
  { from: "Mombasa", to: "Malindi", duration: "2 hours", price: "KES 500", operator: "Tahmeed", departures: "Every hour", popular: false },
  { from: "Nairobi", to: "Nakuru", duration: "2.5 hours", price: "KES 600", operator: "Buscar", departures: "Every 2 hours", popular: true },
  { from: "Kisumu", to: "Kakamega", duration: "1.5 hours", price: "KES 400", operator: "Mashpoa", departures: "5x daily", popular: false },
  // New county routes
  { from: "Nairobi", to: "Kisii", duration: "7 hours", price: "KES 700", operator: "Buscar", departures: "3x daily", popular: true },
  { from: "Nairobi", to: "Kericho", duration: "5 hours", price: "KES 700", operator: "Mashpoa", departures: "4x daily", popular: false },
  { from: "Nairobi", to: "Meru", duration: "5 hours", price: "KES 700", operator: "Tahmeed", departures: "Every 3 hours", popular: true },
  { from: "Nairobi", to: "Nyeri", duration: "3 hours", price: "KES 700", operator: "Mashpoa", departures: "Every 2 hours", popular: false },
  { from: "Nairobi", to: "Embu", duration: "3 hours", price: "KES 650", operator: "Tahmeed", departures: "5x daily", popular: false },
  { from: "Nairobi", to: "Garissa", duration: "7 hours", price: "KES 700", operator: "Buscar", departures: "2x daily", popular: false },
  { from: "Nairobi", to: "Machakos", duration: "1.5 hours", price: "KES 350", operator: "Mashpoa", departures: "Every hour", popular: true },
  { from: "Nairobi", to: "Thika", duration: "1 hour", price: "KES 250", operator: "Tahmeed", departures: "Every 30 min", popular: true },
  { from: "Eldoret", to: "Kapenguria (Pokot)", duration: "3 hours", price: "KES 700", operator: "Mashpoa", departures: "3x daily", popular: false },
  { from: "Eldoret", to: "Kitale", duration: "2 hours", price: "KES 500", operator: "Buscar", departures: "Every 2 hours", popular: false },
  { from: "Kisumu", to: "Kisii", duration: "2.5 hours", price: "KES 600", operator: "Buscar", departures: "4x daily", popular: false },
  { from: "Mombasa", to: "Voi", duration: "3 hours", price: "KES 700", operator: "Tahmeed", departures: "Every 2 hours", popular: false },
  { from: "Mombasa", to: "Lamu", duration: "6 hours", price: "KES 700", operator: "Tahmeed", departures: "2x daily", popular: false },
  { from: "Nakuru", to: "Kericho", duration: "2.5 hours", price: "KES 550", operator: "Mashpoa", departures: "5x daily", popular: false },
  { from: "Nairobi", to: "Narok", duration: "3 hours", price: "KES 700", operator: "Buscar", departures: "Every 2 hours", popular: false },
];

const operatorColors: Record<string, string> = {
  Tahmeed: "bg-red-500",
  Buscar: "bg-blue-600",
  Mashpoa: "bg-green-600",
};

const AllRoutes = () => {
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
            {["Tahmeed", "Buscar", "Mashpoa"].map((operator) => (
              <div key={operator} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                <div className={`w-3 h-3 rounded-full ${operatorColors[operator]}`} />
                <span className="font-semibold text-foreground">{operator}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRoutes.map((route, index) => (
              <div
                key={index}
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
                    <span className="font-semibold text-foreground">{route.from}</span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <span className="font-semibold text-foreground">{route.to}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full ${operatorColors[route.operator]}`} />
                  <span className="text-sm font-medium text-muted-foreground">via {route.operator}</span>
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
                    <p className="font-semibold text-foreground text-sm">{route.price}</p>
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
                    to={`/send/${route.operator.toLowerCase()}?from=${encodeURIComponent(route.from)}&to=${encodeURIComponent(route.to)}`}
                  >
                    Send via {route.operator}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllRoutes;
