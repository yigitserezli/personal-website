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
  CONTACT_FROM_NAME?: string;
  CONTACT_TO_EMAIL?: string;
};

const RESEND_API_URL = "https://api.resend.com/emails";
const FALLBACK_FROM = "Portfolio Contact <onboarding@resend.dev>";
const DEFAULT_FROM_NAME = "Yigit Serezli";

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

function formatFromHeader(fromEmailOrHeader: string, fromName?: string) {
  const safeValue = fromEmailOrHeader.trim();
  if (!safeValue) {
    return FALLBACK_FROM;
  }

  // If user already provided a full RFC-5322 style header, keep it as-is.
  if (safeValue.includes("<") && safeValue.includes(">")) {
    return safeValue;
  }

  const displayName = (fromName?.trim() || DEFAULT_FROM_NAME).replaceAll('"', "");
  return `${displayName} <${safeValue}>`;
}

async function sendViaResend(input: {
  apiKey: string;
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
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
      text: input.text,
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
        <p style="margin:0 0 3px 0;font-size:16px;line-height:1.45;color:#ffffff;font-weight:700;">Portfolyo iletisim formundan yeni bir mesaj alindi.</p>
        <p style="margin:0 0 20px 0;font-size:12px;line-height:1.55;color:#7f7f7f;">A new message has been received from the portfolio contact form.</p>
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

function ownerTextTemplate(payload: { name: string; email: string; message: string }) {
  return [
    "TR",
    "Portfolyo iletisim formundan yeni bir mesaj alindi.",
    "",
    `Gonderen: ${payload.name}`,
    `E-posta: ${payload.email}`,
    "Mesaj:",
    payload.message,
    "",
    "EN",
    "A new message has been received from the portfolio contact form.",
    "",
    `Sender: ${payload.name}`,
    `Email: ${payload.email}`,
    "Message:",
    payload.message,
  ].join("\n");
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
        <p style="margin:0 0 12px 0;font-size:17px;color:#ffffff;">Merhaba ${safeName},</p>
        <p style="margin:0 0 3px 0;font-size:16px;line-height:1.45;color:#ffffff;font-weight:700;">Mesajin alindi ve aktif iletisim kuyruguna eklendi.</p>
        <p style="margin:0 0 15px 0;font-size:12px;line-height:1.55;color:#7f7f7f;">Your message has been received and added to the active communication queue.</p>

        <p style="margin:0 0 3px 0;font-size:16px;line-height:1.45;color:#ffffff;font-weight:700;">Sinyal yogunluguna bagli olarak 24-48 saat icinde yanit verecegim.</p>
        <p style="margin:0 0 12px 0;font-size:12px;line-height:1.55;color:#7f7f7f;">I will get back to you within 24-48 hours depending on current signal density.</p>
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

function thankYouTextTemplate(payload: { name: string }) {
  return [
    `Merhaba ${payload.name},`,
    "",
    "Mesajin alindi ve aktif iletisim kuyruguna eklendi.",
    "24-48 saat icinde donus yapacagim.",
    "",
    `Hi ${payload.name},`,
    "",
    "Your message has been received and added to the active communication queue.",
    "I will get back to you within 24-48 hours.",
  ].join("\n");
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

  const from = formatFromHeader(context.env.CONTACT_FROM_EMAIL || FALLBACK_FROM, context.env.CONTACT_FROM_NAME);
  const ownerEmail = context.env.CONTACT_TO_EMAIL || "devserezli@gmail.com";

  try {
    await sendViaResend({
      apiKey,
      from,
      to: ownerEmail,
      subject: `New contact form message | ${name}`,
      html: ownerTemplate({ name, email, message }),
      text: ownerTextTemplate({ name, email, message }),
      replyTo: email,
    });

    await sendViaResend({
      apiKey,
      from,
      to: email,
      subject: "Thanks for your message | Mesajiniz alindi",
      html: thankYouTemplate({ name }),
      text: thankYouTextTemplate({ name }),
    });

    return jsonResponse(200, { ok: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Email send failed";
    return jsonResponse(500, { error: errorMessage });
  }
};
