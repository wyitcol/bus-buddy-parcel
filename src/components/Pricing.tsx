import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Standard",
    description: "For occasional senders",
    price: "KES 50",
    unit: "/kg",
    features: [
      "Up to 20kg per parcel",
      "Standard delivery (24-48hrs)",
      "Basic tracking",
      "Terminal pickup",
      "SMS notifications",
    ],
    popular: false,
  },
  {
    name: "Express",
    description: "For urgent deliveries",
    price: "KES 80",
    unit: "/kg",
    features: [
      "Up to 50kg per parcel",
      "Express delivery (12-24hrs)",
      "Real-time tracking",
      "Priority loading",
      "SMS & Email notifications",
      "Insurance included",
    ],
    popular: true,
  },
  {
    name: "Business",
    description: "For regular shippers",
    price: "Contact us",
    unit: "",
    features: [
      "Unlimited weight",
      "Same-day options available",
      "Dedicated account manager",
      "Volume discounts",
      "API access for integration",
      "Full insurance coverage",
      "Door-to-door service",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Transparent Pricing</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Simple, Affordable Rates
          </h2>
          <p className="text-muted-foreground">
            Choose the plan that fits your shipping needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-primary text-primary-foreground shadow-elevated scale-105"
                  : "bg-card border border-border hover:shadow-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-sm font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display font-bold text-xl mb-1 ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`font-display font-bold text-4xl ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>
                  {plan.unit}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-secondary" : "text-accent"}`} />
                    <span className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
