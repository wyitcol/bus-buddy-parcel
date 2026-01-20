import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Package, MapPin, Clock, CheckCircle2 } from "lucide-react";

const TrackParcel = () => {
  const [trackingId, setTrackingId] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setShowResult(true);
    }
  };

  return (
    <section id="track" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Real-Time Updates</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Track Your Parcel
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Enter your tracking ID to see the current status and location of your parcel.
            </p>
          </div>

          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Enter tracking ID (e.g., BP-123456)"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="pl-12 h-14 text-base bg-card border-border"
              />
            </div>
            <Button type="submit" size="lg" className="h-14">
              Track Parcel
            </Button>
          </form>

          {/* Sample Tracking Result */}
          {showResult && (
            <div className="bg-card rounded-2xl shadow-card p-6 md:p-8 animate-scale-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tracking ID</p>
                  <p className="font-display font-bold text-xl text-foreground">{trackingId || "BP-123456"}</p>
                </div>
                <div className="flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium text-sm">In Transit</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                {[
                  { status: "Delivered", location: "Nairobi CBD Terminal", time: "Expected: Today, 4:00 PM", active: false, completed: false },
                  { status: "In Transit", location: "En route via Tahmeed Bus", time: "Today, 10:30 AM", active: true, completed: false },
                  { status: "Departed", location: "Mombasa Bus Terminal", time: "Today, 6:00 AM", active: false, completed: true },
                  { status: "Received", location: "Mombasa Bus Terminal", time: "Yesterday, 5:45 PM", active: false, completed: true },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.active 
                          ? "bg-accent text-accent-foreground" 
                          : item.completed 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted text-muted-foreground"
                      }`}>
                        {item.completed || item.active ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <Package className="w-5 h-5" />
                        )}
                      </div>
                      {index < 3 && (
                        <div className={`w-0.5 h-12 ${item.completed ? "bg-primary" : "bg-border"}`} />
                      )}
                    </div>
                    <div className="flex-1 pb-2">
                      <p className={`font-semibold ${item.active ? "text-accent" : "text-foreground"}`}>
                        {item.status}
                      </p>
                      <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackParcel;
