import { Package, MapPin, Bus, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Pack Your Parcel",
    description: "Securely pack your items and bring them to any of our partner bus terminals.",
  },
  {
    icon: MapPin,
    title: "Choose Destination",
    description: "Select your destination from our extensive network of routes across the country.",
  },
  {
    icon: Bus,
    title: "Ship via Bus",
    description: "Your parcel travels safely on the next available bus to your chosen destination.",
  },
  {
    icon: CheckCircle2,
    title: "Collect at Terminal",
    description: "Recipient picks up the parcel at the destination bus terminal with a tracking ID.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Simple Process</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground">
            Sending parcels has never been easier. Follow these simple steps to get your package delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
              )}
              
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 group-hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-foreground">{step.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
