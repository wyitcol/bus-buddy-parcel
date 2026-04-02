import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req) => {
  try {
    const body = await req.json();
    console.log("M-Pesa callback received:", JSON.stringify(body));

    const callback = body.Body?.stkCallback;
    if (!callback) {
      return new Response(JSON.stringify({ ResultCode: 0, ResultDesc: "Accepted" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    const resultCode = callback.ResultCode;
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    if (resultCode === 0) {
      // Payment successful
      const metadata = callback.CallbackMetadata?.Item || [];
      const receipt = metadata.find((i: any) => i.Name === "MpesaReceiptNumber")?.Value;
      const amount = metadata.find((i: any) => i.Name === "Amount")?.Value;
      const phone = metadata.find((i: any) => i.Name === "PhoneNumber")?.Value;

      if (phone) {
        const phoneStr = String(phone);
        const { error } = await supabase
          .from("parcels")
          .update({
            payment_status: "paid",
            mpesa_receipt: receipt,
            payment_amount: amount,
          })
          .eq("mpesa_phone", phoneStr)
          .eq("payment_status", "pending");

        if (error) {
          console.error("Error updating parcel payment:", error);
        }
      }
    } else {
      console.log("Payment failed or cancelled. ResultCode:", resultCode);
    }

    return new Response(JSON.stringify({ ResultCode: 0, ResultDesc: "Accepted" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Callback processing error:", error);
    return new Response(JSON.stringify({ ResultCode: 0, ResultDesc: "Accepted" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
});
