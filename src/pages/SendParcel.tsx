import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Bus, ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import type { Database } from "@/integrations/supabase/types";
import MpesaPaymentDialog from "@/components/MpesaPaymentDialog";

type BusOperator = Database["public"]["Enums"]["bus_operator"];

const operatorMeta: Record<BusOperator, { label: string; color: string }> = {
  tahmeed: { label: "Tahmeed", color: "bg-red-500" },
  buscar: { label: "Buscar", color: "bg-blue-600" },
  mashpoa: { label: "Mashpoa", color: "bg-green-600" },
};

const calculatePrice = (weight: number) => 200 + weight * 50;

const SendParcel = () => {
  const { operator } = useParams<{ operator: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { toast } = useToast();

  const initialOperator = (operator?.toLowerCase() as BusOperator) || "tahmeed";
  const [busOperator, setBusOperator] = useState<BusOperator>(
    operatorMeta[initialOperator] ? initialOperator : "tahmeed",
  );
  const meta = operatorMeta[busOperator];
  const plan = searchParams.get("plan");

  useEffect(() => {
    const next = (operator?.toLowerCase() as BusOperator) || "tahmeed";
    if (operatorMeta[next]) setBusOperator(next);
  }, [operator]);

  const [step, setStep] = useState<"form" | "summary">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentParcel, setPaymentParcel] = useState<{ id: string; trackingId: string; amount: number } | null>(null);

  const [form, setForm] = useState({
    weight: "",
    originCity: searchParams.get("from") || "",
    destinationCity: searchParams.get("to") || "",
    senderName: "",
    senderPhone: "",
    senderAddress: "",
    receiverName: "",
    receiverPhone: "",
    receiverAddress: "",
    notes: "",
  });

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (operator && !operatorMeta[operator.toLowerCase() as BusOperator]) {
      navigate("/");
    }
  }, [operator, navigate]);

  const weightNum = parseFloat(form.weight) || 0;
  const price = useMemo(() => (weightNum > 0 ? calculatePrice(weightNum) : 0), [weightNum]);

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canContinue =
    weightNum > 0 &&
    form.originCity &&
    form.destinationCity &&
    form.senderName &&
    form.senderPhone &&
    form.senderAddress &&
    form.receiverName &&
    form.receiverPhone &&
    form.receiverAddress;

  const handleConfirm = async () => {
    setIsSubmitting(true);
    const paymentAmount = calculatePrice(weightNum);

    const { data, error } = await supabase
      .from("parcels")
      .insert({
        tracking_id: "",
        sender_name: form.senderName,
        sender_phone: form.senderPhone,
        sender_address: form.senderAddress,
        receiver_name: form.receiverName,
        receiver_phone: form.receiverPhone,
        receiver_address: form.receiverAddress,
        origin_city: form.originCity,
        destination_city: form.destinationCity,
        weight: weightNum,
        bus_operator: busOperator,
        notes: form.notes || null,
        sender_user_id: user?.id ?? null,
        payment_amount: paymentAmount,
      })
      .select()
      .single();

    setIsSubmitting(false);

    if (error || !data) {
      toast({
        title: "Could not create parcel",
        description: error?.message || "Please try again.",
        variant: "destructive",
      });
      return;
    }

    toast({ title: "Parcel created", description: "Proceed to payment." });
    setPaymentParcel({ id: data.id, trackingId: data.tracking_id, amount: paymentAmount });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Bus className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg text-foreground">
                Send via {meta.label}
                {plan && <span className="ml-2 text-xs font-medium text-muted-foreground capitalize">({plan} plan)</span>}
              </h1>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${meta.color}`} />
                <span className="text-xs text-muted-foreground">Switch operator below</span>
              </div>
            </div>
          </div>
          <div className="w-16" />
        </div>
        <div className="container mx-auto px-4 pb-3 flex flex-wrap gap-2">
          {(Object.keys(operatorMeta) as BusOperator[]).map((op) => (
            <Button
              key={op}
              size="sm"
              variant={op === busOperator ? "default" : "outline"}
              onClick={() => setBusOperator(op)}
              className="gap-2"
            >
              <span className={`w-2 h-2 rounded-full ${operatorMeta[op].color}`} />
              {operatorMeta[op].label}
            </Button>
          ))}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        {step === "form" ? (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Parcel details</CardTitle>
                  <CardDescription>
                    Sending with <span className="font-semibold text-foreground">{meta.label}</span>. Enter the weight, route and contact info.
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  Step 1 of 2
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Weight + price preview */}
              <div className="rounded-xl border border-border bg-muted/40 p-4">
                <div className="grid sm:grid-cols-2 gap-4 items-end">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      min="0.1"
                      placeholder="e.g., 2.5"
                      value={form.weight}
                      onChange={(e) => update("weight", e.target.value)}
                    />
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Estimated cost</p>
                    <p className="text-3xl font-bold text-foreground">
                      KES {price.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground">Base KES 200 + KES 50/kg</p>
                  </div>
                </div>
              </div>

              {/* Route */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="originCity">Origin city</Label>
                  <Input
                    id="originCity"
                    placeholder="e.g., Nairobi"
                    value={form.originCity}
                    onChange={(e) => update("originCity", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destinationCity">Destination city</Label>
                  <Input
                    id="destinationCity"
                    placeholder="e.g., Mombasa"
                    value={form.destinationCity}
                    onChange={(e) => update("destinationCity", e.target.value)}
                  />
                </div>
              </div>

              {/* Sender */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Sender details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="senderName">Name</Label>
                    <Input id="senderName" value={form.senderName} onChange={(e) => update("senderName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="senderPhone">Phone</Label>
                    <Input id="senderPhone" value={form.senderPhone} onChange={(e) => update("senderPhone", e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senderAddress">Address</Label>
                  <Input id="senderAddress" value={form.senderAddress} onChange={(e) => update("senderAddress", e.target.value)} />
                </div>
              </div>

              {/* Receiver */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Receiver details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="receiverName">Name</Label>
                    <Input id="receiverName" value={form.receiverName} onChange={(e) => update("receiverName", e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="receiverPhone">Phone</Label>
                    <Input id="receiverPhone" value={form.receiverPhone} onChange={(e) => update("receiverPhone", e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="receiverAddress">Address</Label>
                  <Input id="receiverAddress" value={form.receiverAddress} onChange={(e) => update("receiverAddress", e.target.value)} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes (optional)</Label>
                <Textarea id="notes" value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Any special instructions..." />
              </div>

              <Button className="w-full" disabled={!canContinue} onClick={() => setStep("summary")}>
                Review & continue
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Confirm your parcel</CardTitle>
                  <CardDescription>Review the details before paying with M-Pesa.</CardDescription>
                </div>
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  Step 2 of 2
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-xl border border-border bg-muted/40 p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total to pay</p>
                  <p className="text-3xl font-bold text-foreground">KES {price.toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 justify-end">
                    <span className={`w-2 h-2 rounded-full ${meta.color}`} />
                    <span className="font-semibold text-foreground">{meta.label}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{form.originCity} → {form.destinationCity}</p>
                  <p className="text-xs text-muted-foreground">{weightNum} kg</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground mb-2">Sender</h4>
                  <p className="text-sm">{form.senderName}</p>
                  <p className="text-sm text-muted-foreground">{form.senderPhone}</p>
                  <p className="text-sm text-muted-foreground">{form.senderAddress}</p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground mb-2">Receiver</h4>
                  <p className="text-sm">{form.receiverName}</p>
                  <p className="text-sm text-muted-foreground">{form.receiverPhone}</p>
                  <p className="text-sm text-muted-foreground">{form.receiverAddress}</p>
                </div>
              </div>

              {form.notes && (
                <div className="rounded-lg border border-border p-4">
                  <h4 className="font-semibold text-foreground mb-1">Notes</h4>
                  <p className="text-sm text-muted-foreground">{form.notes}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setStep("form")} disabled={isSubmitting}>
                  <ArrowLeft className="w-4 h-4" />
                  Edit details
                </Button>
                <Button className="flex-1" onClick={handleConfirm} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Confirm & pay
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {paymentParcel && (
        <MpesaPaymentDialog
          open={!!paymentParcel}
          onOpenChange={(open) => {
            if (!open) {
              setPaymentParcel(null);
              navigate("/admin");
            }
          }}
          parcelId={paymentParcel.id}
          trackingId={paymentParcel.trackingId}
          amount={paymentParcel.amount}
          onPaymentInitiated={() => {}}
        />
      )}
    </div>
  );
};

export default SendParcel;
