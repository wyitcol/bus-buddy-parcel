import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TrackParcel from "@/components/TrackParcel";
import Routes from "@/components/Routes";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <TrackParcel />
      <Routes />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
