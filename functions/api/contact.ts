type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

type ResendSendResponse = {
  id?: string;
  error?: {
    message?: string;
  };
};

type Env = {
  RESEND_API_KEY?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_TO_EMAIL?: string;
};

const RESEND_API_URL = "https://api.resend.com/emails";
const FALLBACK_FROM = "Portfolio Contact <onboarding@resend.dev>";

function jsonResponse(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function sendViaResend(input: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${input.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: input.from,
      to: [input.to],
      subject: input.subject,
      html: input.html,
      reply_to: input.replyTo,
    }),
  });

  const data = (await response.json()) as ResendSendResponse;

  if (!response.ok || data.error) {
    throw new Error(data.error?.message ?? "Resend send failed");
  }

  return data.id;
}

function ownerTemplate(payload: { name: string; email: string; message: string }) {
  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeMessage = escapeHtml(payload.message).replaceAll("\n", "<br/>");

  return `
  <div style="background:#131313;color:#e5e2e1;font-family:Inter,Arial,sans-serif;padding:28px;line-height:1.6;">
    <div style="max-width:680px;margin:0 auto;border:1px solid #474747;background:#0e0e0e;">
      <div style="padding:24px 24px 14px 24px;border-bottom:1px solid #353534;">
        <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#c6c6c6;">System.Communication</p>
        <h1 style="margin:0;font-family:Manrope,Inter,Arial,sans-serif;font-size:38px;line-height:1;color:#ffffff;">Incoming Contact Signal</h1>
      </div>
      <div style="padding:24px;">
        <div style="margin-bottom:18px;">
          <p style="margin:0 0 6px 0;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#919191;">Sender Identity</p>
          <p style="margin:0;font-size:18px;color:#ffffff;">${safeName}</p>
        </div>
        <div style="margin-bottom:18px;">
          <p style="margin:0 0 6px 0;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#919191;">Return Path</p>
          <p style="margin:0;font-size:16px;color:#ffffff;">${safeEmail}</p>
        </div>
        <div>
          <p style="margin:0 0 8px 0;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:#919191;">Data Payload</p>
          <div style="padding:14px;border:1px solid #474747;background:#131313;color:#e5e2e1;font-size:15px;">${safeMessage}</div>
        </div>
      </div>
      <div style="padding:16px 24px;border-top:1px solid #353534;color:#919191;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;">
        Routed via Resend • Technical Monolith Contact Pipeline
      </div>
    </div>
  </div>`;
}

function thankYouTemplate(payload: { name: string }) {
  const safeName = escapeHtml(payload.name);

  return `
  <div style="background:#131313;color:#e5e2e1;font-family:Inter,Arial,sans-serif;padding:28px;line-height:1.65;">
    <div style="max-width:680px;margin:0 auto;border:1px solid #474747;background:#0e0e0e;">
      <div style="padding:24px 24px 14px 24px;border-bottom:1px solid #353534;">
        <p style="margin:0 0 8px 0;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;color:#c6c6c6;">Transmission Ack</p>
        <h1 style="margin:0;font-family:Manrope,Inter,Arial,sans-serif;font-size:36px;line-height:1;color:#ffffff;">Signal Received</h1>
      </div>
      <div style="padding:24px;">
        <p style="margin:0 0 12px 0;font-size:17px;color:#ffffff;">Hi ${safeName},</p>
        <p style="margin:0 0 12px 0;color:#c8c6c5;">Thanks for reaching out. Your message is now in the active communication queue.</p>
        <p style="margin:0 0 12px 0;color:#c8c6c5;">A response will be shared within 24-48 standard operation cycles, depending on signal density.</p>
        <div style="margin-top:18px;padding:14px;border:1px solid #474747;background:#131313;">
          <p style="margin:0;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#adabaa;">Status</p>
          <p style="margin:6px 0 0 0;color:#ffffff;font-size:14px;">Packet accepted • Queue initialized • Monitoring enabled</p>
        </div>
      </div>
      <div style="padding:16px 24px;border-top:1px solid #353534;color:#919191;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;">
        Yigit Serezli • Technical Monolith
      </div>
    </div>
  </div>`;
}

export const onRequestPost = async (context: { request: Request; env: Env }) => {
  const apiKey = context.env.RESEND_API_KEY;
  if (!apiKey) {
    return jsonResponse(500, { error: "Server is missing RESEND_API_KEY" });
  }

  let payload: ContactPayload;
  try {
    payload = (await context.request.json()) as ContactPayload;
  } catch {
    return jsonResponse(400, { error: "Invalid JSON payload" });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return jsonResponse(400, { error: "Name, email and message are required" });
  }

  const from = context.env.CONTACT_FROM_EMAIL || FALLBACK_FROM;
  const ownerEmail = context.env.CONTACT_TO_EMAIL || "devserezli@gmail.com";

  try {
    await sendViaResend({
      apiKey,
      from,
      to: ownerEmail,
      subject: `Contact Flow | ${name}`,
      html: ownerTemplate({ name, email, message }),
      replyTo: email,
    });

    await sendViaResend({
      apiKey,
      from,
      to: email,
      subject: "Signal received | Thank you for reaching out",
      html: thankYouTemplate({ name }),
    });

    return jsonResponse(200, { ok: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Email send failed";
    return jsonResponse(500, { error: errorMessage });
  }
};
