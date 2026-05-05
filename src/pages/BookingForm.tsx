import { useState } from "react";
import { Link } from "react-router-dom";
import { Bus, CheckCircle2, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

/* ── Static option lists ── */

const ageGroups = ["Under 18", "18–24", "25–34", "35–44", "45–54", "55 and above"];
const genders = ["Male", "Female", "Prefer not to say"];
const occupations = ["Student", "Employed (private sector)", "Employed (public sector)", "Self-employed / Business owner", "Unemployed", "Other"];
const counties = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret / Uasin Gishu", "Kilifi", "Kwale", "Taita-Taveta", "Other"];

const sendFrequencies = [
  "Never",
  "Once a year or less",
  "A few times a year",
  "Once a month",
  "Several times a month",
  "Weekly or more",
];
const parcelTypes = ["Documents / letters", "Electronics / gadgets", "Clothing & textiles", "Food & perishables", "Hardware & tools", "Agricultural produce", "Other"];
const commonRoutes = ["Nairobi – Mombasa", "Nairobi – Kisumu", "Nairobi – Eldoret", "Mombasa – Malindi", "Mombasa – Kilifi", "Other"];

const busOperators = ["Tahmeed", "Buscar", "Mashpoa", "Other", "I have not used bus parcel services"];
const problemsExperienced = [
  "Lost parcel",
  "Damaged parcel",
  "Late delivery",
  "No tracking / status updates",
  "Dishonest conductor / driver",
  "Difficulty locating the parcel on arrival",
  "No formal receipt or documentation",
  "I have not experienced any problems",
];

const satisfactionLevels = ["Very satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very dissatisfied", "N/A – I have not used bus parcel services"];
const likelihoodOptions = ["Very likely", "Likely", "Neutral", "Unlikely", "Very unlikely"];
const importanceOptions = ["Very important", "Important", "Neutral", "Not important", "Not important at all"];
const paymentMethods = ["M-Pesa (before sending)", "M-Pesa (on delivery)", "Cash at the bus terminal", "Bank transfer", "Other"];
const pricingWillingness = ["KES 50–100 extra", "KES 101–200 extra", "KES 201–300 extra", "More than KES 300 extra", "I would not pay extra"];

const desiredFeatures = [
  "Real-time parcel tracking",
  "SMS / email notifications",
  "Online booking & receipt",
  "M-Pesa payment integration",
  "Parcel status history",
  "Multiple bus operator options",
  "Door-to-door delivery option",
  "Insurance / compensation for lost parcels",
  "Mobile-friendly website",
];

/* ── Form state ── */

type FormState = {
  // A: Background
  ageGroup: string;
  gender: string;
  occupation: string;
  county: string;
  // B: Parcel habits
  sendFrequency: string;
  receiveFrequency: string;
  parcelType: string;
  commonRoute: string;
  // C: Bus parcel experience
  usedBusParcel: string;
  busOperator: string;
  problemsExperienced: string[];
  satisfaction: string;
  // D: Digital system preferences
  likeliness: string;
  importanceTracking: string;
  importancePayment: string;
  preferredPayment: string;
  pricingWillingness: string;
  desiredFeatures: string[];
  // E: Open feedback
  currentChallenges: string;
  suggestions: string;
  consent: boolean;
};

const initial: FormState = {
  ageGroup: "",
  gender: "",
  occupation: "",
  county: "",
  sendFrequency: "",
  receiveFrequency: "",
  parcelType: "",
  commonRoute: "",
  usedBusParcel: "",
  busOperator: "",
  problemsExperienced: [],
  satisfaction: "",
  likeliness: "",
  importanceTracking: "",
  importancePayment: "",
  preferredPayment: "",
  pricingWillingness: "",
  desiredFeatures: [],
  currentChallenges: "",
  suggestions: "",
  consent: false,
};

const REQUIRED = <span className="text-red-500 ml-0.5">*</span>;

/* ── Component ── */

const BookingForm = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleMulti = (key: "problemsExperienced" | "desiredFeatures", value: string) => {
    setForm((prev) => {
      const arr = prev[key] as string[];
      return {
        ...prev,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const isValid =
    form.ageGroup &&
    form.gender &&
    form.occupation &&
    form.county &&
    form.sendFrequency &&
    form.receiveFrequency &&
    form.usedBusParcel &&
    form.likeliness &&
    form.consent;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ── Thank-you screen ── */
  if (submitted) {
    return (
      <div className="min-h-screen bg-[#f0ebf8] flex flex-col items-center py-12 px-4">
        <FormHeader />
        <div className="w-full max-w-2xl bg-white rounded-b-2xl shadow-sm border border-t-0 border-border px-8 py-12 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5">
            <CheckCircle2 className="w-9 h-9 text-primary" />
          </div>
          <h2 className="font-display font-bold text-2xl text-foreground mb-3">
            Thank you for your response!
          </h2>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Your input is greatly appreciated and will contribute to the research on improving bus-based
            parcel services in Kenya. Results will be used solely for academic purposes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button variant="outline" onClick={() => { setForm(initial); setSubmitted(false); }}>
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

  /* ── Form ── */
  return (
    <div className="min-h-screen bg-[#f0ebf8] flex flex-col items-center py-12 px-4">
      <FormHeader />

      <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col gap-4">

        {/* ── Section A: Respondent Background ── */}
        <Section letter="A" title="Respondent Background">
          <p className="text-xs text-muted-foreground -mt-2 mb-2">
            This section collects general demographic information for research classification purposes.
          </p>

          <Field label="1. Age group" required>
            <RadioGroup value={form.ageGroup} onValueChange={(v) => set("ageGroup", v)} className="flex flex-col gap-1 mt-1">
              {ageGroups.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="2. Gender" required>
            <RadioGroup value={form.gender} onValueChange={(v) => set("gender", v)} className="flex flex-col gap-1 mt-1">
              {genders.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="3. Occupation" required>
            <RadioGroup value={form.occupation} onValueChange={(v) => set("occupation", v)} className="flex flex-col gap-1 mt-1">
              {occupations.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="4. County / region you are based in" required>
            <RadioGroup value={form.county} onValueChange={(v) => set("county", v)} className="flex flex-col gap-1 mt-1">
              {counties.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>
        </Section>

        {/* ── Section B: Parcel Habits ── */}
        <Section letter="B" title="Parcel Sending & Receiving Habits">
          <p className="text-xs text-muted-foreground -mt-2 mb-2">
            This section explores how often you send or receive parcels across Kenya.
          </p>

          <Field label="5. How often do you send parcels across Kenya?" required>
            <RadioGroup value={form.sendFrequency} onValueChange={(v) => set("sendFrequency", v)} className="flex flex-col gap-1 mt-1">
              {sendFrequencies.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="6. How often do you receive parcels from other towns/cities?" required>
            <RadioGroup value={form.receiveFrequency} onValueChange={(v) => set("receiveFrequency", v)} className="flex flex-col gap-1 mt-1">
              {sendFrequencies.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="7. What type of goods do you most commonly send or receive?">
            <RadioGroup value={form.parcelType} onValueChange={(v) => set("parcelType", v)} className="flex flex-col gap-1 mt-1">
              {parcelTypes.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="8. What is your most common route for sending or receiving parcels?">
            <RadioGroup value={form.commonRoute} onValueChange={(v) => set("commonRoute", v)} className="flex flex-col gap-1 mt-1">
              {commonRoutes.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>
        </Section>

        {/* ── Section C: Current Bus Parcel Experience ── */}
        <Section letter="C" title="Experience with Bus-Based Parcel Services">
          <p className="text-xs text-muted-foreground -mt-2 mb-2">
            This section focuses on your experience using intercity buses (such as Tahmeed, Buscar, or Mashpoa) to send or receive parcels.
          </p>

          <Field label="9. Have you ever sent or received a parcel using an intercity bus service?" required>
            <RadioGroup value={form.usedBusParcel} onValueChange={(v) => set("usedBusParcel", v)} className="flex flex-col gap-1 mt-1">
              {["Yes", "No", "I have heard of it but never tried"].map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="10. Which bus operator did you use most recently for parcel delivery?">
            <RadioGroup value={form.busOperator} onValueChange={(v) => set("busOperator", v)} className="flex flex-col gap-1 mt-1">
              {busOperators.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="11. What problems have you experienced with bus-based parcel delivery? (Select all that apply)">
            <div className="flex flex-col gap-1 mt-1">
              {problemsExperienced.map((o) => (
                <label key={o} className="flex items-center gap-3 cursor-pointer rounded-lg border border-transparent hover:border-border hover:bg-muted/40 px-3 py-2 transition-colors">
                  <Checkbox
                    checked={form.problemsExperienced.includes(o)}
                    onCheckedChange={() => toggleMulti("problemsExperienced", o)}
                  />
                  <span className="text-sm text-foreground">{o}</span>
                </label>
              ))}
            </div>
          </Field>

          <Field label="12. Overall, how satisfied are you with the current bus parcel service experience?">
            <RadioGroup value={form.satisfaction} onValueChange={(v) => set("satisfaction", v)} className="flex flex-col gap-1 mt-1">
              {satisfactionLevels.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>
        </Section>

        {/* ── Section D: Digital System Preferences ── */}
        <Section letter="D" title="Digital System Preferences">
          <p className="text-xs text-muted-foreground -mt-2 mb-2">
            This section gauges your interest in a web-based platform (BusParcel) that digitalises the process of booking, paying for, and tracking parcels via bus.
          </p>

          <Field label="13. How likely would you be to use a web-based platform to book and track bus parcel deliveries?" required>
            <RadioGroup value={form.likeliness} onValueChange={(v) => set("likeliness", v)} className="flex flex-col gap-1 mt-1">
              {likelihoodOptions.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="14. How important is real-time tracking (knowing exactly where your parcel is) to you?">
            <RadioGroup value={form.importanceTracking} onValueChange={(v) => set("importanceTracking", v)} className="flex flex-col gap-1 mt-1">
              {importanceOptions.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="15. How important is it to be able to pay for parcel delivery online / via M-Pesa?">
            <RadioGroup value={form.importancePayment} onValueChange={(v) => set("importancePayment", v)} className="flex flex-col gap-1 mt-1">
              {importanceOptions.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="16. Which payment method would you prefer on a digital parcel platform?">
            <RadioGroup value={form.preferredPayment} onValueChange={(v) => set("preferredPayment", v)} className="flex flex-col gap-1 mt-1">
              {paymentMethods.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="17. How much extra would you be willing to pay for a formal, trackable, and insured bus parcel service compared to the current informal system?">
            <RadioGroup value={form.pricingWillingness} onValueChange={(v) => set("pricingWillingness", v)} className="flex flex-col gap-1 mt-1">
              {pricingWillingness.map((o) => <RadioOption key={o} value={o} />)}
            </RadioGroup>
          </Field>

          <Field label="18. Which features would you most like to see in a bus parcel management system? (Select all that apply)">
            <div className="flex flex-col gap-1 mt-1">
              {desiredFeatures.map((o) => (
                <label key={o} className="flex items-center gap-3 cursor-pointer rounded-lg border border-transparent hover:border-border hover:bg-muted/40 px-3 py-2 transition-colors">
                  <Checkbox
                    checked={form.desiredFeatures.includes(o)}
                    onCheckedChange={() => toggleMulti("desiredFeatures", o)}
                  />
                  <span className="text-sm text-foreground">{o}</span>
                </label>
              ))}
            </div>
          </Field>
        </Section>

        {/* ── Section E: Open Feedback ── */}
        <Section letter="E" title="General Feedback">
          <Field label="19. In your opinion, what is the biggest challenge with the current (informal) bus parcel system in Kenya?">
            <Textarea
              placeholder="Share your thoughts here…"
              rows={3}
              value={form.currentChallenges}
              onChange={(e) => set("currentChallenges", e.target.value)}
            />
          </Field>

          <Field label="20. What suggestions do you have for improving parcel services using intercity buses?">
            <Textarea
              placeholder="Your suggestions…"
              rows={3}
              value={form.suggestions}
              onChange={(e) => set("suggestions", e.target.value)}
            />
          </Field>
        </Section>

        {/* ── Consent + Submit ── */}
        <div className="bg-white rounded-2xl shadow-sm border border-border px-8 py-6 flex flex-col gap-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <Checkbox
              id="consent"
              checked={form.consent}
              onCheckedChange={(checked) => set("consent", !!checked)}
              className="mt-0.5"
            />
            <span className="text-sm text-muted-foreground leading-relaxed">
              I confirm that I am participating in this research voluntarily. My responses will be used
              solely for academic research purposes as part of a final-year Computer Science project at
              Pwani University and will be treated confidentially. {REQUIRED}
            </span>
          </label>

          <Button
            type="submit"
            className="w-full sm:w-auto sm:self-end"
            size="lg"
            disabled={!isValid}
          >
            <ClipboardList className="w-4 h-4" />
            Submit response
          </Button>
        </div>
      </form>

      <p className="text-xs text-muted-foreground mt-8 text-center max-w-md">
        BusParcel Research Survey — Pwani University, Fourth Year CS Project (2026).
        Responses are anonymous and used for academic purposes only.
      </p>
    </div>
  );
};

/* ── Shared helpers ── */

const FormHeader = () => (
  <div className="w-full max-w-2xl rounded-t-2xl overflow-hidden shadow-sm">
    <div className="bg-primary h-3" />
    <div className="bg-white px-8 py-6 border border-t-0 border-border">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <Bus className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-display font-bold text-xl text-foreground">Bus Buddy Parcel</span>
      </div>
      <h1 className="font-display font-bold text-2xl text-foreground mb-2">
        Research Data Collection Survey
      </h1>
      <p className="text-muted-foreground text-sm leading-relaxed">
        This survey is part of a final-year Computer Science research project at <strong>Pwani University</strong> titled{" "}
        <em>"BusParcel: A Smart Web-Based Parcel Transportation System Using Intercity Bus Services in Kenya"</em>.
        Your responses will help us understand the current state of bus-based parcel services and guide the
        design of a better digital solution.
      </p>
      <p className="text-xs text-muted-foreground mt-3">
        This should take approximately <strong>5–7 minutes</strong> to complete. Fields marked{" "}
        <span className="text-red-500">*</span> are required.
      </p>
    </div>
  </div>
);

const Section = ({ letter, title, children }: { letter: string; title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-border px-8 py-6 flex flex-col gap-5">
    <h2 className="font-display font-semibold text-base text-foreground border-b border-border pb-3">
      <span className="text-primary font-bold mr-1">Section {letter}:</span> {title}
    </h2>
    {children}
  </div>
);

const Field = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5">
    <Label className="text-sm font-medium text-foreground leading-relaxed">
      {label}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </Label>
    {children}
  </div>
);

const RadioOption = ({ value }: { value: string }) => (
  <label className="flex items-center gap-3 cursor-pointer rounded-lg border border-transparent hover:border-border hover:bg-muted/40 px-3 py-2 transition-colors">
    <RadioGroupItem value={value} id={`radio-${value}`} />
    <span className="text-sm text-foreground">{value}</span>
  </label>
);

export default BookingForm;
