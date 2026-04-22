import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type StatusEmailPayload = {
  toEmail: string;
  trackingId: string;
  status: string;
  originCity: string;
  destinationCity: string;
  receiverName: string;
};

const toStatusLabel = (status: string) => status.replaceAll("_", " ").replace(/\b\w/g, (char) => char.toUpperCase());

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const senderEmail = Deno.env.get("STATUS_EMAIL_FROM") || "BusParcel <notifications@example.com>";

    if (!resendApiKey) {
      return new Response(JSON.stringify({ error: "Missing RESEND_API_KEY secret" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const payload = (await req.json()) as StatusEmailPayload;

    if (
      !payload?.toEmail ||
      !payload?.trackingId ||
      !payload?.status ||
      !payload?.originCity ||
      !payload?.destinationCity ||
      !payload?.receiverName
    ) {
      return new Response(JSON.stringify({ error: "Missing required fields for status email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const statusLabel = toStatusLabel(payload.status);
    const subject = `Parcel ${payload.trackingId} status: ${statusLabel}`;
    const text = [
      `Your parcel ${payload.trackingId} is now ${statusLabel}.`,
      `Route: ${payload.originCity} → ${payload.destinationCity}`,
      `Receiver: ${payload.receiverName}`,
      "",
      "Thank you for using BusParcel.",
    ].join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.5; color:#111827;">
        <h2 style="margin:0 0 12px;">Parcel Status Update</h2>
        <p style="margin:0 0 8px;">Your parcel <strong>${payload.trackingId}</strong> is now <strong>${statusLabel}</strong>.</p>
        <p style="margin:0 0 8px;"><strong>Route:</strong> ${payload.originCity} → ${payload.destinationCity}</p>
        <p style="margin:0 0 16px;"><strong>Receiver:</strong> ${payload.receiverName}</p>
        <p style="margin:0;">Thank you for using BusParcel.</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: senderEmail,
        to: [payload.toEmail],
        subject,
        text,
        html,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);
      return new Response(JSON.stringify({ error: "Failed to send status email", details: resendData }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, id: resendData?.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("send-status-email error:", message);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
