import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bus, Menu, X, Package } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Bus className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">BusParcel</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#routes" className="text-muted-foreground hover:text-foreground transition-colors">
              Routes
            </a>
            <a href="#track" className="text-muted-foreground hover:text-foreground transition-colors">
              Track Parcel
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="/auth">
              <Button variant="ghost">Sign In</Button>
            </a>
            <a href="/admin">
              <Button>
                <Package className="w-4 h-4" />
                Send Parcel
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                How it Works
              </a>
              <a href="#routes" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Routes
              </a>
              <a href="#track" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Track Parcel
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors py-2">
                Pricing
              </a>
              <div className="flex flex-col gap-2 pt-4">
                <a href="/auth">
                  <Button variant="ghost" className="w-full">Sign In</Button>
                </a>
                <a href="/admin">
                  <Button className="w-full">
                    <Package className="w-4 h-4" />
                    Send Parcel
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
