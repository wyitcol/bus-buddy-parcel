import { Bus, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Bus className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">BusParcel</span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Connecting communities through reliable parcel transportation via our nationwide bus network.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button type="button" onClick={() => scrollToSection("how-it-works")} className="text-background/70 hover:text-background transition-colors">
                  How it Works
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("routes")} className="text-background/70 hover:text-background transition-colors">
                  Routes
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("track")} className="text-background/70 hover:text-background transition-colors">
                  Track Parcel
                </button>
              </li>
              <li>
                <button type="button" onClick={() => scrollToSection("pricing")} className="text-background/70 hover:text-background transition-colors">
                  Pricing
                </button>
              </li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Standard Delivery</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Express Delivery</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Business Solutions</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Partner with Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">Machakos Country Bus Station, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+254759831643" className="text-background/70 text-sm hover:text-background transition-colors">+254759831643</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:davymango23@gmail.com" className="text-background/70 text-sm hover:text-background transition-colors">davymango23@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 BusParcel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/50 hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/50 hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
