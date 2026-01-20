import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign, ArrowRight, Bus } from "lucide-react";

const routes = [
  {
    from: "Kampala",
    to: "Mbarara",
    duration: "4 hours",
    price: "UGX 15,000",
    departures: "Every 2 hours",
    popular: true,
  },
  {
    from: "Kampala",
    to: "Jinja",
    duration: "2 hours",
    price: "UGX 8,000",
    departures: "Every hour",
    popular: false,
  },
  {
    from: "Kampala",
    to: "Gulu",
    duration: "6 hours",
    price: "UGX 25,000",
    departures: "3x daily",
    popular: true,
  },
  {
    from: "Mbarara",
    to: "Kabale",
    duration: "3 hours",
    price: "UGX 12,000",
    departures: "Every 3 hours",
    popular: false,
  },
  {
    from: "Kampala",
    to: "Mbale",
    duration: "5 hours",
    price: "UGX 20,000",
    departures: "4x daily",
    popular: false,
  },
  {
    from: "Kampala",
    to: "Fort Portal",
    duration: "5.5 hours",
    price: "UGX 22,000",
    departures: "3x daily",
    popular: true,
  },
];

const Routes = () => {
  return (
    <section id="routes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nationwide Coverage</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Popular Routes
          </h2>
          <p className="text-muted-foreground">
            We cover all major cities and towns. Find the best route for your parcel delivery.
          </p>
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
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bus className="w-5 h-5 text-primary" />
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <span className="font-semibold text-foreground">{route.from}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  <span className="font-semibold text-foreground">{route.to}</span>
                </div>
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

              <Button variant="outline" className="w-full">
                Send via this Route
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="ghost" size="lg">
            View All Routes
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Routes;
