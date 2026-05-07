import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Bus, LogOut, RefreshCw, Package } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Database } from "@/integrations/supabase/types";

type Parcel = Database["public"]["Tables"]["parcels"]["Row"];
type ParcelStatus = Database["public"]["Enums"]["parcel_status"];

const statusColors: Record<ParcelStatus, string> = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  received: "bg-blue-100 text-blue-800 border-blue-200",
  in_transit: "bg-purple-100 text-purple-800 border-purple-200",
  delivered: "bg-green-100 text-green-800 border-green-200",
  cancelled: "bg-red-100 text-red-800 border-red-200",
};

const Client = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [parcels, setParcels] = useState<Parcel[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  const fetchParcels = async () => {
    if (!user) return;
    setIsLoading(true);
    const { data, error } = await supabase
      .from("parcels")
      .select("*")
      .eq("sender_user_id", user.id)
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Error loading parcels", description: error.message, variant: "destructive" });
    } else {
      setParcels(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) fetchParcels();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <RefreshCw className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Bus className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-foreground">My Parcels</h1>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" onClick={() => navigate("/")}>
              <Package className="w-4 h-4 mr-2" /> Send a Parcel
            </Button>
            <Button variant="ghost" size="icon" onClick={signOut}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardHeader>
            <CardDescription>Total Parcels</CardDescription>
            <CardTitle className="text-3xl">{parcels.length}</CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tracking ID</TableHead>
                  <TableHead>Receiver</TableHead>
                  <TableHead>Route</TableHead>
                  <TableHead>Operator</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Payment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      <RefreshCw className="w-6 h-6 animate-spin mx-auto text-muted-foreground" />
                    </TableCell>
                  </TableRow>
                ) : parcels.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      You have no parcels yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  parcels.map((parcel) => (
                    <TableRow key={parcel.id}>
                      <TableCell className="font-mono font-medium">{parcel.tracking_id}</TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium">{parcel.receiver_name}</p>
                          <p className="text-sm text-muted-foreground">{parcel.receiver_phone}</p>
                        </div>
                      </TableCell>
                      <TableCell>{parcel.origin_city} → {parcel.destination_city}</TableCell>
                      <TableCell className="capitalize">{parcel.bus_operator}</TableCell>
                      <TableCell>
                        <Badge className={statusColors[parcel.status]} variant="outline">
                          {parcel.status.replace("_", " ")}
                        </Badge>
                      </TableCell>
                      <TableCell className="capitalize">{(parcel as any).payment_status}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Client;