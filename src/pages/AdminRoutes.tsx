import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Bus, Plus, RefreshCw, Pencil, Trash2, ArrowLeft } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Database } from "@/integrations/supabase/types";

type Route = Database["public"]["Tables"]["routes"]["Row"];
type BusOperator = Database["public"]["Enums"]["bus_operator"];

const emptyForm = {
  origin_city: "",
  destination_city: "",
  duration: "",
  price: 700,
  bus_operator: "tahmeed" as BusOperator,
  departures: "",
  popular: false,
  active: true,
};

const AdminRoutes = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [routes, setRoutes] = useState<Route[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Route | null>(null);
  const [form, setForm] = useState({ ...emptyForm });

  useEffect(() => {
    if (!loading) {
      if (!user) navigate("/auth");
      else if (!isAdmin) navigate("/client");
    }
  }, [user, isAdmin, loading, navigate]);

  const fetchRoutes = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("routes")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Error loading routes", description: error.message, variant: "destructive" });
    } else {
      setRoutes(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) fetchRoutes();
  }, [user]);

  const openCreate = () => {
    setEditing(null);
    setForm({ ...emptyForm });
    setDialogOpen(true);
  };

  const openEdit = (r: Route) => {
    setEditing(r);
    setForm({
      origin_city: r.origin_city,
      destination_city: r.destination_city,
      duration: r.duration,
      price: Number(r.price),
      bus_operator: r.bus_operator,
      departures: r.departures,
      popular: r.popular,
      active: r.active,
    });
    setDialogOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...form, price: Number(form.price) };
    const { error } = editing
      ? await supabase.from("routes").update(payload).eq("id", editing.id)
      : await supabase.from("routes").insert(payload);
    if (error) {
      toast({ title: "Error saving route", description: error.message, variant: "destructive" });
    } else {
      toast({ title: editing ? "Route updated" : "Route added" });
      setDialogOpen(false);
      fetchRoutes();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this route?")) return;
    const { error } = await supabase.from("routes").delete().eq("id", id);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Route deleted" });
      fetchRoutes();
    }
  };

  const toggleActive = async (r: Route) => {
    const { error } = await supabase.from("routes").update({ active: !r.active }).eq("id", r.id);
    if (error) toast({ title: "Error", description: error.message, variant: "destructive" });
    else fetchRoutes();
  };

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
              <h1 className="font-display font-bold text-xl text-foreground">Manage Routes</h1>
              <p className="text-sm text-muted-foreground">Add, edit, or remove bus routes</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => navigate("/admin")}>
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Admin
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold">{routes.length} Routes</h2>
            <p className="text-muted-foreground text-sm">Updates here reflect immediately on the public site.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={fetchRoutes}>
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button onClick={openCreate}>
              <Plus className="w-4 h-4 mr-1" /> Add Route
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Route</TableHead>
                  <TableHead>Operator</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Departures</TableHead>
                  <TableHead>Popular</TableHead>
                  <TableHead>Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow><TableCell colSpan={8} className="text-center py-8"><RefreshCw className="w-6 h-6 animate-spin mx-auto" /></TableCell></TableRow>
                ) : routes.length === 0 ? (
                  <TableRow><TableCell colSpan={8} className="text-center py-8 text-muted-foreground">No routes yet</TableCell></TableRow>
                ) : routes.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">{r.origin_city} → {r.destination_city}</TableCell>
                    <TableCell className="capitalize">{r.bus_operator}</TableCell>
                    <TableCell>{r.duration}</TableCell>
                    <TableCell>KES {Number(r.price)}</TableCell>
                    <TableCell>{r.departures}</TableCell>
                    <TableCell>{r.popular && <Badge variant="secondary">Popular</Badge>}</TableCell>
                    <TableCell><Switch checked={r.active} onCheckedChange={() => toggleActive(r)} /></TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button size="icon" variant="ghost" onClick={() => openEdit(r)}><Pencil className="w-4 h-4" /></Button>
                        <Button size="icon" variant="ghost" onClick={() => handleDelete(r.id)}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{editing ? "Edit Route" : "Add Route"}</DialogTitle>
              <DialogDescription>Routes shown on the public site come from this list.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Origin</Label>
                  <Input value={form.origin_city} onChange={(e) => setForm({ ...form, origin_city: e.target.value })} required />
                </div>
                <div className="space-y-2">
                  <Label>Destination</Label>
                  <Input value={form.destination_city} onChange={(e) => setForm({ ...form, destination_city: e.target.value })} required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Duration</Label>
                  <Input value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} placeholder="e.g., 5 hours" required />
                </div>
                <div className="space-y-2">
                  <Label>Price (KES, max 700)</Label>
                  <Input type="number" min={0} max={700} value={form.price} onChange={(e) => setForm({ ...form, price: Math.min(700, Number(e.target.value)) })} required />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Operator</Label>
                  <Select value={form.bus_operator} onValueChange={(v) => setForm({ ...form, bus_operator: v as BusOperator })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tahmeed">Tahmeed</SelectItem>
                      <SelectItem value="buscar">Buscar</SelectItem>
                      <SelectItem value="mashpoa">Mashpoa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Departures</Label>
                  <Input value={form.departures} onChange={(e) => setForm({ ...form, departures: e.target.value })} placeholder="e.g., Every 2 hours" required />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <Switch checked={form.popular} onCheckedChange={(v) => setForm({ ...form, popular: v })} />
                  <span className="text-sm">Mark as Popular</span>
                </label>
                <label className="flex items-center gap-2">
                  <Switch checked={form.active} onCheckedChange={(v) => setForm({ ...form, active: v })} />
                  <span className="text-sm">Active</span>
                </label>
              </div>
              <DialogFooter>
                <Button type="button" variant="ghost" onClick={() => setDialogOpen(false)}>Cancel</Button>
                <Button type="submit">{editing ? "Save Changes" : "Add Route"}</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default AdminRoutes;