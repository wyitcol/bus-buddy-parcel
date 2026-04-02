import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, ArrowRight, Bus } from "lucide-react";

const routes = [
  {
    from: "Nairobi",
    to: "Mombasa",
    duration: "8 hours",
    price: "KES 1,500",
    operator: "Tahmeed",
    departures: "Every 2 hours",
    popular: true,
  },
  {
    from: "Nairobi",
    to: "Kisumu",
    duration: "6 hours",
    price: "KES 1,200",
    operator: "Buscar",
    departures: "Every 3 hours",
    popular: true,
  },
  {
    from: "Nairobi",
    to: "Eldoret",
    duration: "5 hours",
    price: "KES 1,000",
    operator: "Mashpoa",
    departures: "4x daily",
    popular: false,
  },
  {
    from: "Mombasa",
    to: "Malindi",
    duration: "2 hours",
    price: "KES 500",
    operator: "Tahmeed",
    departures: "Every hour",
    popular: false,
  },
  {
    from: "Nairobi",
    to: "Nakuru",
    duration: "2.5 hours",
    price: "KES 600",
    operator: "Buscar",
    departures: "Every 2 hours",
    popular: true,
  },
  {
    from: "Kisumu",
    to: "Kakamega",
    duration: "1.5 hours",
    price: "KES 400",
    operator: "Mashpoa",
    departures: "5x daily",
    popular: false,
  },
];

const operatorColors: Record<string, string> = {
  Tahmeed: "bg-red-500",
  Buscar: "bg-blue-600",
  Mashpoa: "bg-green-600",
};

const Routes = () => {
  return (
    <section id="routes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nationwide Coverage</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Popular Routes in Kenya
          </h2>
          <p className="text-muted-foreground">
            Partner with leading Kenyan bus operators - Tahmeed, Buscar, and Mashpoa - for reliable parcel delivery across the country.
          </p>
        </div>

        {/* Operator Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Tahmeed", "Buscar", "Mashpoa"].map((operator) => (
            <div key={operator} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
              <div className={`w-3 h-3 rounded-full ${operatorColors[operator]}`} />
              <span className="font-semibold text-foreground">{operator}</span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {routes.map((route, index) => (
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

              {/* Operator Badge */}
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

              <a href="/admin">
                <Button variant="outline" className="w-full">
                  Send via this Route
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/admin">
            <Button variant="ghost" size="lg">
              View All Routes
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Routes;
