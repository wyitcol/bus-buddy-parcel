import { useState } from "react";
import { Link } from "react-router-dom";
import { Bus, CheckCircle2, Loader2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { Database } from "@/integrations/supabase/types";

type BusOperator = Database["public"]["Enums"]["bus_operator"];

const parcelTypes = [
  "Documents",
  "Electronics",
  "Clothing & Textiles",
  "Food & Perishables",
  "Hardware & Tools",
  "Other",
];

const referralSources = [
  "Social Media (Facebook / Instagram / Twitter)",
  "Friend or Family",
  "Google Search",
  "Bus Terminal Advertisement",
  "Other",
];

const operatorOptions: { value: BusOperator; label: string }[] = [
  { value: "tahmeed", label: "Tahmeed Bus" },
  { value: "buscar", label: "Buscar" },
  { value: "mashpoa", label: "Mashpoa" },
];

const REQUIRED = <span className="text-red-500 ml-0.5">*</span>;

type FormState = {
  senderName: string;
  senderPhone: string;
  senderEmail: string;
  parcelType: string;
  weight: string;
  itemCount: string;
  parcelDescription: string;
  busOperator: BusOperator | "";
  originCity: string;
  destinationCity: string;
  preferredDate: string;
  receiverName: string;
  receiverPhone: string;
  receiverAddress: string;
  specialInstructions: string;
  referralSource: string;
  agreeToTerms: boolean;
};

const initialForm: FormState = {
  senderName: "",
  senderPhone: "",
  senderEmail: "",
  parcelType: "",
  weight: "",
  itemCount: "",
  parcelDescription: "",
  busOperator: "",
  originCity: "",
  destinationCity: "",
  preferredDate: "",
  receiverName: "",
  receiverPhone: "",
  receiverAddress: "",
  specialInstructions: "",
  referralSource: "",
  agreeToTerms: false,
};

const calculatePrice = (weight: number) => 200 + weight * 50;

const BookingForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const weightNum = parseFloat(form.weight) || 0;
  const price = weightNum > 0 ? calculatePrice(weightNum) : 0;

  const isValid =
    form.senderName.trim() &&
    form.senderPhone.trim() &&
    form.parcelType &&
    weightNum > 0 &&
    form.itemCount.trim() &&
    form.parcelDescription.trim() &&
    form.busOperator &&
    form.originCity.trim() &&
    form.destinationCity.trim() &&
    form.receiverName.trim() &&
    form.receiverPhone.trim() &&
    form.receiverAddress.trim() &&
    form.agreeToTerms;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSubmitting(true);
    const paymentAmount = calculatePrice(weightNum);

    const { data, error } = await supabase
      .from("parcels")
      .insert({
        tracking_id: "",
        sender_name: form.senderName,
        sender_phone: form.senderPhone,
        sender_address: form.originCity,
        receiver_name: form.receiverName,
        receiver_phone: form.receiverPhone,
        receiver_address: form.receiverAddress,
        origin_city: form.originCity,
        destination_city: form.destinationCity,
        weight: weightNum,
        bus_operator: form.busOperator as BusOperator,
        notes: [
          form.parcelType && `Type: ${form.parcelType}`,
          form.itemCount && `Items: ${form.itemCount}`,
          form.parcelDescription && `Description: ${form.parcelDescription}`,
          form.preferredDate && `Preferred date: ${form.preferredDate}`,
          form.senderEmail && `Sender email: ${form.senderEmail}`,
          form.specialInstructions && `Instructions: ${form.specialInstructions}`,
        ]
          .filter(Boolean)
          .join(" | ") || null,
        payment_amount: paymentAmount,
      })
      .select()
      .single();

    setIsSubmitting(false);

    if (error || !data) {
      toast({
        title: "Submission failed",
        description: error?.message || "Please try again.",
        variant: "destructive",
      });
      return;
    }

    setTrackingId(data.tracking_id);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f0ebf8] flex flex-col items-center py-12 px-4">
        {/* Form header accent */}
        <div className="w-full max-w-2xl rounded-t-2xl overflow-hidden">
          <div className="bg-primary h-3 rounded-t-2xl" />
          <div className="bg-white px-8 py-6 border-b-4 border-primary/20 rounded-b-none shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Bus className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">Bus Buddy Parcel</span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-2xl bg-white rounded-none rounded-b-2xl shadow-sm px-8 py-10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-9 h-9 text-primary" />
          </div>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">
            Your booking request has been received!
          </h2>
          <p className="text-muted-foreground mb-2">
            Thank you for choosing Bus Buddy Parcel. Our team will confirm your booking shortly via SMS or phone call.
          </p>
          {trackingId && (
            <p className="text-sm font-medium text-foreground bg-muted rounded-lg px-4 py-2 mt-2">
              Tracking ID: <span className="font-mono text-primary">{trackingId}</span>
            </p>
          )}
          <p className="text-xs text-muted-foreground mt-4">
            You will receive an M-Pesa payment prompt once your booking is confirmed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button variant="outline" onClick={() => { setForm(initialForm); setSubmitted(false); }}>
              Submit another response
            </Button>
            <Button asChild>
              <Link to="/">Return to home</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0ebf8] flex flex-col items-center py-12 px-4">
      {/* ── Header card ── */}
      <div className="w-full max-w-2xl rounded-t-2xl overflow-hidden shadow-sm">
        <div className="bg-primary h-3" />
        <div className="bg-white px-8 py-6 border-b border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Bus className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">Bus Buddy Parcel</span>
          </div>
          <h1 className="font-display font-bold text-2xl text-foreground mb-2">
            Parcel Booking Request
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Fill in the details below to book a parcel delivery with Bus Buddy Parcel. We partner with
            Tahmeed, Buscar, and Mashpoa bus services to deliver your packages across Kenya safely and
            affordably.
          </p>
          <p className="text-xs text-muted-foreground mt-3">
            Fields marked with {REQUIRED} are required.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-4">
        {/* ── Section 1: Sender details ── */}
        <Section title="Your Details (Sender)">
          <Field label="Full name" required>
            <Input
              placeholder="e.g. John Kamau"
              value={form.senderName}
              onChange={(e) => update("senderName", e.target.value)}
            />
          </Field>
          <Field label="Phone number" required hint="Include country code, e.g. +254712345678">
            <Input
              type="tel"
              placeholder="+254 7XX XXX XXX"
              value={form.senderPhone}
              onChange={(e) => update("senderPhone", e.target.value)}
            />
          </Field>
          <Field label="Email address (optional)">
            <Input
              type="email"
              placeholder="you@example.com"
              value={form.senderEmail}
              onChange={(e) => update("senderEmail", e.target.value)}
            />
          </Field>
        </Section>

        {/* ── Section 2: Parcel information ── */}
        <Section title="Parcel Information">
          <Field label="Type of parcel" required>
            <RadioGroup
              value={form.parcelType}
              onValueChange={(v) => update("parcelType", v)}
              className="flex flex-col gap-2 mt-1"
            >
              {parcelTypes.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 cursor-pointer rounded-lg border border-transparent hover:border-border hover:bg-muted/40 px-3 py-2 transition-colors"
                >
                  <RadioGroupItem value={type} id={`type-${type}`} />
                  <span className="text-sm text-foreground">{type}</span>
                </label>
              ))}
            </RadioGroup>
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Weight (kg)" required>
              <Input
                type="number"
                step="0.1"
                min="0.1"
                placeholder="e.g. 3.5"
                value={form.weight}
                onChange={(e) => update("weight", e.target.value)}
              />
              {weightNum > 0 && (
                <p className="text-xs text-muted-foreground mt-1">
                  Estimated cost: <span className="font-semibold text-foreground">KES {price.toLocaleString()}</span>
                </p>
              )}
            </Field>
            <Field label="Number of items" required>
              <Input
                type="number"
                min="1"
                step="1"
                placeholder="e.g. 2"
                value={form.itemCount}
                onChange={(e) => update("itemCount", e.target.value)}
              />
            </Field>
          </div>
          <Field label="Brief description of contents" required hint="Help our staff handle your parcel correctly.">
            <Textarea
              placeholder="e.g. Three pairs of shoes in a cardboard box"
              value={form.parcelDescription}
              onChange={(e) => update("parcelDescription", e.target.value)}
            />
          </Field>
        </Section>

        {/* ── Section 3: Route details ── */}
        <Section title="Route & Bus Operator">
          <Field label="Preferred bus operator" required>
            <RadioGroup
              value={form.busOperator}
              onValueChange={(v) => update("busOperator", v as BusOperator)}
              className="flex flex-col gap-2 mt-1"
            >
              {operatorOptions.map((op) => (
                <label
                  key={op.value}
                  className="flex items-center gap-3 cursor-pointer rounded-lg border border-transparent hover:border-border hover:bg-muted/40 px-3 py-2 transition-colors"
                >
                  <RadioGroupItem value={op.value} id={`op-${op.value}`} />
                  <span className="text-sm text-foreground">{op.label}</span>
                </label>
              ))}
            </RadioGroup>
          </Field>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Origin city" required>
              <Input
                placeholder="e.g. Nairobi"
                value={form.originCity}
                onChange={(e) => update("originCity", e.target.value)}
              />
            </Field>
            <Field label="Destination city" required>
              <Input
                placeholder="e.g. Mombasa"
                value={form.destinationCity}
                onChange={(e) => update("destinationCity", e.target.value)}
              />
            </Field>
          </div>
          <Field label="Preferred pickup date (optional)">
            <Input
              type="date"
              value={form.preferredDate}
              min={new Date().toISOString().split("T")[0]}
              onFocus={(e) => { e.target.min = new Date().toISOString().split("T")[0]; }}
              onChange={(e) => update("preferredDate", e.target.value)}
            />
          </Field>
        </Section>

        {/* ── Section 4: Receiver details ── */}
        <Section title="Receiver Details">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Receiver's full name" required>
              <Input
                placeholder="e.g. Jane Wanjiru"
                value={form.receiverName}
                onChange={(e) => update("receiverName", e.target.value)}
              />
            </Field>
            <Field label="Receiver's phone number" required>
              <Input
                type="tel"
                placeholder="+254 7XX XXX XXX"
                value={form.receiverPhone}
                onChange={(e) => update("receiverPhone", e.target.value)}
              />
            </Field>
          </div>
          <Field label="Receiver's address / pickup location" required hint="Bus terminal, stage, or home address.">
            <Textarea
              placeholder="e.g. Mombasa Bus Terminus, near Coast Bus Stand"
              value={form.receiverAddress}
              onChange={(e) => update("receiverAddress", e.target.value)}
            />
          </Field>
        </Section>

        {/* ── Section 5: Additional info ── */}
        <Section title="Additional Information">
          <Field label="Special handling instructions (optional)">
            <Textarea
              placeholder="e.g. Fragile – handle with care. Do not stack heavy items on top."
              value={form.specialInstructions}
              onChange={(e) => update("specialInstructions", e.target.value)}
            />
          </Field>
          <Field label="How did you hear about us?">
            <RadioGroup
              value={form.referralSource}
              onValueChange={(v) => update("referralSource", v)}
              className="flex flex-col gap-2 mt-1"
            >
              {referralSources.map((src) => (
                <label
                  key={src}
                  className="flex items-center gap-3 cursor-pointer rounded-lg border border-transparent hover:border-border hover:bg-muted/40 px-3 py-2 transition-colors"
                >
                  <RadioGroupItem value={src} id={`ref-${src}`} />
                  <span className="text-sm text-foreground">{src}</span>
                </label>
              ))}
            </RadioGroup>
          </Field>
        </Section>

        {/* ── Terms + Submit ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-border px-8 py-6 flex flex-col gap-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <Checkbox
              id="terms"
              checked={form.agreeToTerms}
              onCheckedChange={(checked) => update("agreeToTerms", !!checked)}
              className="mt-0.5"
            />
            <span className="text-sm text-muted-foreground leading-relaxed">
              I confirm that the information provided is accurate and I agree to Bus Buddy Parcel's{" "}
              Terms of Service and Privacy Policy. I understand
              that payment will be collected via M-Pesa upon booking confirmation. {REQUIRED}
            </span>
          </label>

          <Button
            type="submit"
            className="w-full sm:w-auto sm:self-end"
            size="lg"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Package className="w-4 h-4" />
                Submit booking request
              </>
            )}
          </Button>
        </div>
      </form>

      <p className="text-xs text-muted-foreground mt-8 text-center max-w-md">
        This form is powered by Bus Buddy Parcel. For enquiries call{" "}
        <a href="tel:+254700000000" className="text-primary underline">+254 700 000 000</a>.
      </p>
    </div>
  );
};

/* ── Helpers ── */

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-border px-8 py-6 flex flex-col gap-5">
    <h2 className="font-display font-semibold text-base text-foreground border-b border-border pb-3">
      {title}
    </h2>
    {children}
  </div>
);

const Field = ({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5">
    <Label className="text-sm font-medium text-foreground">
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </Label>
    {hint && <p className="text-xs text-muted-foreground -mt-1">{hint}</p>}
    {children}
  </div>
);

export default BookingForm;
