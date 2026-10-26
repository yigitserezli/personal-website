import { FormEvent, useState } from "react";
import { Blank, Line } from "../components/Code";
import { EMAIL, links } from "../content";

const Comment = ({ children }: { children: string }) => (
  <span className="text-muted">
    <span aria-hidden="true"># </span>
    {children}
  </span>
);

const fieldClass =
  "w-full border border-line bg-panel/40 px-3 py-2.5 font-sans text-base text-fg placeholder:text-faint focus:border-kw";

export default function Contact() {
  const [senderName, setSenderName] = useState("");
  const [returnEmail, setReturnEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendState, setSendState] = useState<"idle" | "ok" | "error">("idle");
  const [sendMessage, setSendMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSending(true);
    setSendState("idle");
    setSendMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: senderName,
          email: returnEmail,
          message,
        }),
      });

      const raw = await response.text();
      let parsed: { error?: string } = {};
      try {
        parsed = raw ? (JSON.parse(raw) as { error?: string }) : {};
      } catch {
        parsed = {};
      }

      if (!response.ok) {
        throw new Error(parsed.error || "The message could not be sent");
      }

      setSendState("ok");
      setSendMessage("Message sent. A confirmation is on its way to your inbox.");
      setSenderName("");
      setReturnEmail("");
      setMessage("");
    } catch (error) {
      setSendState("error");
      const reason = error instanceof Error ? error.message : "The message could not be sent";
      setSendMessage(`${reason}. Try again, or email ${EMAIL} directly.`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="doc max-w-[52rem]">
      <Line className="font-mono text-sm text-faint" aria-hidden="true">
        #!/usr/bin/env bash
      </Line>
      <Line as="h1" className="mt-2 text-3xl text-fg sm:text-5xl">
        Contact
      </Line>
      <Line as="p" className="mt-4 max-w-[34em] text-lg text-muted">
        Tell me about the product you want to build or the problem you are stuck on. I reply within two days.
      </Line>
      <Blank />

      <form onSubmit={handleSubmit} className="max-w-[36rem] font-mono text-sm">
        <Line className="mb-5">
          <label htmlFor="name" className="mb-1.5 block text-fg">
            <span className="text-ok" aria-hidden="true">
              ${" "}
            </span>
            name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={senderName}
            onChange={(event) => setSenderName(event.target.value)}
            className={fieldClass}
          />
        </Line>

        <Line className="mb-5">
          <label htmlFor="email" className="mb-1.5 block text-fg">
            <span className="text-ok" aria-hidden="true">
              ${" "}
            </span>
            email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={returnEmail}
            onChange={(event) => setReturnEmail(event.target.value)}
            className={fieldClass}
          />
        </Line>

        <Line className="mb-6">
          <label htmlFor="message" className="mb-1.5 block text-fg">
            <span className="text-ok" aria-hidden="true">
              ${" "}
            </span>
            message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className={`${fieldClass} resize-y`}
          />
        </Line>

        <Line>
          <button
            type="submit"
            disabled={isSending}
            className="bg-kw px-5 py-2.5 font-semibold text-bg hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
          >
            {isSending ? "Sending…" : "Send message"}
          </button>
        </Line>
        <Line as="p" className="mt-3 min-h-[1.65em]" role="status">
          {sendState === "ok" ? <span className="text-ok">✓ {sendMessage}</span> : null}
          {sendState === "error" ? <span className="text-err">✗ {sendMessage}</span> : null}
        </Line>
      </form>
      <Blank />

      <section aria-labelledby="direct" className="font-mono text-sm">
        <Line as="h2" id="direct" className="font-normal tracking-normal">
          <Comment>Or reach me directly</Comment>
        </Line>
        <dl>
          {links.map((link) => (
            <Line key={link.label} className="flex gap-3">
              <dt className="w-[9ch] shrink-0 text-kw">{link.label}</dt>
              <dd className="min-w-0 truncate">
                <a
                  href={link.href}
                  target={link.label === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="text-fg underline decoration-line decoration-1 underline-offset-4 hover:decoration-kw"
                >
                  {link.display}
                </a>
              </dd>
            </Line>
          ))}
        </dl>
        <Blank />
        <Line as="p">
          <Comment>Based in İzmir, Türkiye (GMT+3).</Comment>
        </Line>
      </section>
    </div>
  );
}
