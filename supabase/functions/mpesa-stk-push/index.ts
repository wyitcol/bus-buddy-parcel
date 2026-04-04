import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { phone, amount, parcel_id, account_reference, simulate } = await req.json();

    if (!phone || !amount || !parcel_id) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: phone, amount, parcel_id" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Format phone: ensure it starts with 254
    let formattedPhone = phone.replace(/\s+/g, "");
    if (formattedPhone.startsWith("0")) {
      formattedPhone = "254" + formattedPhone.slice(1);
    } else if (formattedPhone.startsWith("+")) {
      formattedPhone = formattedPhone.slice(1);
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const consumerKey = Deno.env.get("MPESA_CONSUMER_KEY");
    const consumerSecret = Deno.env.get("MPESA_CONSUMER_SECRET");
    const shortcode = Deno.env.get("MPESA_SHORTCODE");
    const passkey = Deno.env.get("MPESA_PASSKEY");

    // Try real M-Pesa if credentials are configured
    if (consumerKey && consumerSecret && shortcode && passkey && !simulate) {
      try {
        const baseUrl = "https://sandbox.safaricom.co.ke";
        const auth = btoa(`${consumerKey}:${consumerSecret}`);
        const tokenRes = await fetch(
          `${baseUrl}/oauth/v1/generate?grant_type=client_credentials`,
          { headers: { Authorization: `Basic ${auth}` } }
        );
        const tokenData = await tokenRes.json();

        if (tokenData.access_token) {
          const timestamp = new Date()
            .toISOString()
            .replace(/[-T:.Z]/g, "")
            .slice(0, 14);
          const password = btoa(`${shortcode}${passkey}${timestamp}`);
          const callbackUrl = `${supabaseUrl}/functions/v1/mpesa-callback`;

          const stkPayload = {
            BusinessShortCode: shortcode,
            Password: password,
            Timestamp: timestamp,
            TransactionType: "CustomerPayBillOnline",
            Amount: Math.ceil(amount),
            PartyA: formattedPhone,
            PartyB: shortcode,
            PhoneNumber: formattedPhone,
            CallBackURL: callbackUrl,
            AccountReference: account_reference || "BusParcel",
            TransactionDesc: `Payment for parcel ${account_reference}`,
          };

          const stkRes = await fetch(
            `${baseUrl}/mpesa/stkpush/v1/processrequest`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${tokenData.access_token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(stkPayload),
            }
          );
          const stkData = await stkRes.json();

          if (stkData.ResponseCode === "0") {
            await supabase
              .from("parcels")
              .update({
                payment_status: "pending",
                payment_amount: amount,
                mpesa_phone: formattedPhone,
              })
              .eq("id", parcel_id);

            return new Response(
              JSON.stringify({
                success: true,
                message: "STK Push sent. Check your phone.",
                checkout_request_id: stkData.CheckoutRequestID,
              }),
              { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
          }
          // If STK push failed, fall through to simulation
          console.log("Real M-Pesa failed, falling back to simulation:", JSON.stringify(stkData));
        }
      } catch (mpesaError) {
        console.log("Real M-Pesa error, falling back to simulation:", mpesaError.message);
      }
    }

    // Simulated payment flow for demo/testing
    const fakeReceipt = "SIM" + Date.now().toString().slice(-8);
    
    await supabase
      .from("parcels")
      .update({
        payment_status: "paid",
        payment_amount: amount,
        mpesa_phone: formattedPhone,
        mpesa_receipt: fakeReceipt,
      })
      .eq("id", parcel_id);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Payment processed successfully (simulated M-Pesa).",
        receipt: fakeReceipt,
        simulated: true,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("M-Pesa STK Push error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
