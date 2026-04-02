import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Phone, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface MpesaPaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  parcelId: string;
  trackingId: string;
  amount: number;
  onPaymentInitiated: () => void;
}

const MpesaPaymentDialog = ({
  open,
  onOpenChange,
  parcelId,
  trackingId,
  amount,
  onPaymentInitiated,
}: MpesaPaymentDialogProps) => {
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const calculatePrice = (weight: number) => {
    // Base price KES 200 + KES 50 per kg
    return 200 + weight * 50;
  };

  const handlePayment = async () => {
    if (!phone) {
      toast({ title: "Enter phone number", variant: "destructive" });
      return;
    }

    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke("mpesa-stk-push", {
        body: {
          phone,
          amount: Math.ceil(amount),
          parcel_id: parcelId,
          account_reference: trackingId,
        },
      });

      if (error) throw error;

      if (data?.success) {
        setIsSent(true);
        toast({
          title: "STK Push sent!",
          description: "Check your phone and enter your M-Pesa PIN to complete payment.",
        });
        onPaymentInitiated();
      } else {
        toast({
          title: "Payment failed",
          description: data?.error || "Could not initiate payment",
          variant: "destructive",
        });
      }
    } catch (err: any) {
      toast({
        title: "Payment error",
        description: err.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    setPhone("");
    setIsSent(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            M-Pesa Payment
          </DialogTitle>
          <DialogDescription>
            Pay KES {Math.ceil(amount).toLocaleString()} for parcel {trackingId}
          </DialogDescription>
        </DialogHeader>

        {isSent ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
            <p className="font-medium text-foreground">STK Push Sent!</p>
            <p className="text-sm text-muted-foreground">
              Check your phone and enter your M-Pesa PIN to complete the payment.
              The parcel status will update automatically once payment is confirmed.
            </p>
            <Button onClick={handleClose} className="mt-4">Done</Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-lg bg-muted p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tracking ID</span>
                <span className="font-mono font-medium">{trackingId}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount</span>
                <span className="font-bold text-foreground">KES {Math.ceil(amount).toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mpesaPhone">M-Pesa Phone Number</Label>
              <Input
                id="mpesaPhone"
                placeholder="e.g., 0712345678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Enter the Safaricom number to receive the STK push prompt
              </p>
            </div>

            <Button
              onClick={handlePayment}
              disabled={isProcessing || !phone}
              className="w-full"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending STK Push...
                </>
              ) : (
                `Pay KES ${Math.ceil(amount).toLocaleString()}`
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { MpesaPaymentDialog, type MpesaPaymentDialogProps };
export default MpesaPaymentDialog;
