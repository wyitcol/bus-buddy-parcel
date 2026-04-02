import { Button } from "@/components/ui/button";
import { ArrowRight, Package, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Bus transportation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            Tahmeed • Buscar • Mashpoa
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Send Parcels Across
            <span className="block text-secondary">Kenya</span>
            Via Bus Services
          </h1>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Affordable, fast, and reliable parcel transportation using Kenya's top bus operators. 
            From Nairobi to Mombasa, Kisumu to Eldoret - your package arrives safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="/admin">
              <Button variant="hero" size="xl">
                Send a Parcel
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#track">
              <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Track Your Parcel
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 mb-1">
                <Package className="w-5 h-5 text-secondary" />
                <span className="text-2xl font-bold text-primary-foreground">50K+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Parcels Delivered</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-5 h-5 text-secondary" />
                <span className="text-2xl font-bold text-primary-foreground">200+</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Destinations</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="text-2xl font-bold text-primary-foreground">24hr</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">Delivery Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
