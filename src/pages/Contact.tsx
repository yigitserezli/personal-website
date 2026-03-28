import { FormEvent, useState } from "react";

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
        throw new Error(parsed.error || "Transmission failed");
      }

      setSendState("ok");
      setSendMessage("Signal transmitted. A confirmation packet has also been sent to your inbox.");
      setSenderName("");
      setReturnEmail("");
      setMessage("");
    } catch (error) {
      setSendState("error");
      setSendMessage(error instanceof Error ? error.message : "Transmission failed");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--tm-background)] text-[var(--tm-on-surface)]">
      <div className="tm-dot-grid absolute inset-0 pointer-events-none opacity-20" />
      <div className="tm-radial-monolith absolute inset-0 pointer-events-none" />
      <div className="tm-cinematic-vignette absolute inset-0 pointer-events-none opacity-70" />
      <div className="pointer-events-none absolute left-7 top-0 bottom-0 w-px bg-[var(--tm-outline-variant)]/35 md:left-14 xl:left-16" />
      <div className="pointer-events-none absolute right-7 top-0 bottom-0 w-px bg-[var(--tm-outline-variant)]/35 md:right-14 xl:right-16" />
      <div className="pointer-events-none absolute left-0 right-0 top-32 h-px bg-[var(--tm-outline-variant)]/35" />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-7 pt-36 pb-24 md:px-14 md:pt-40 xl:px-16">
        <header className="mb-14 border-l border-[var(--tm-outline-variant)] pl-6 md:mb-20 md:pl-8">
          <p className="font-technical mb-4 text-sm uppercase tracking-[0.3em] text-[var(--tm-primary)]">System.Communication</p>
          <h1 className="text-5xl font-extrabold tracking-[-0.02em] text-[var(--tm-primary)] md:text-7xl lg:text-8xl" style={{ fontFamily: "Manrope, sans-serif" }}>
            Init: Contact Flow
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--tm-on-surface-variant)]">
            Engaging technical protocols for professional collaboration, system integration inquiries, or architectural discourse.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="group">
                <label className="mb-2 block font-technical text-[10px] uppercase tracking-[0.2em] text-[var(--tm-on-surface-variant)] transition-colors group-focus-within:text-[var(--tm-primary)]" htmlFor="name">
                  01 // SENDER_IDENTITY
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  value={senderName}
                  onChange={(event) => setSenderName(event.target.value)}
                  className="w-full border-x-0 border-t-0 border-b border-[var(--tm-outline-variant)] bg-transparent py-4 text-xl text-[var(--tm-primary)] placeholder:text-[var(--tm-surface-container-highest)] focus:border-[var(--tm-primary)] focus:ring-0"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                />
              </div>

              <div className="group">
                <label className="mb-2 block font-technical text-[10px] uppercase tracking-[0.2em] text-[var(--tm-on-surface-variant)] transition-colors group-focus-within:text-[var(--tm-primary)]" htmlFor="email">
                  02 // RETURN_PATH
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={returnEmail}
                  onChange={(event) => setReturnEmail(event.target.value)}
                  className="w-full border-x-0 border-t-0 border-b border-[var(--tm-outline-variant)] bg-transparent py-4 text-xl text-[var(--tm-primary)] placeholder:text-[var(--tm-surface-container-highest)] focus:border-[var(--tm-primary)] focus:ring-0"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                />
              </div>

              <div className="group">
                <label className="mb-2 block font-technical text-[10px] uppercase tracking-[0.2em] text-[var(--tm-on-surface-variant)] transition-colors group-focus-within:text-[var(--tm-primary)]" htmlFor="message">
                  03 // DATA_PAYLOAD
                </label>
                <textarea
                  id="message"
                  placeholder="Message content..."
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full resize-none border-x-0 border-t-0 border-b border-[var(--tm-outline-variant)] bg-transparent py-4 text-lg text-[var(--tm-primary)] placeholder:text-[var(--tm-surface-container-highest)] focus:border-[var(--tm-primary)] focus:ring-0"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className="group flex items-center gap-3 bg-[var(--tm-primary)] px-10 py-5 font-technical text-sm font-bold uppercase tracking-[0.2em] text-[var(--tm-on-primary)] transition-colors duration-150 hover:bg-[var(--tm-secondary)]"
                >
                  {isSending ? "Transmitting..." : "Transmit Signal"}
                  <span className="text-base transition-transform group-hover:translate-x-1">-&gt;</span>
                </button>

                {sendState !== "idle" ? (
                  <p
                    className={`mt-4 font-technical text-[11px] uppercase tracking-[0.12em] ${
                      sendState === "ok" ? "text-[var(--tm-primary)]" : "text-[#ffb4ab]"
                    }`}
                  >
                    {sendMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </div>

          <aside className="lg:col-span-5">
            <div className="space-y-14">
              <section>
                <h3 className="mb-6 border-b border-[var(--tm-outline-variant)] pb-2 font-technical text-[10px] uppercase tracking-[0.2em] text-[var(--tm-on-surface-variant)]">
                  Network Nodes
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://github.com/yigitserezli"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-2 text-[var(--tm-primary)] transition-colors hover:text-[var(--tm-secondary)]"
                  >
                    <span className="text-3xl font-bold tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                      GitHub
                    </span>
                    <span className="text-[var(--tm-outline-variant)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--tm-primary)]">
                      ↗
                    </span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/yigit-serezli/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-2 text-[var(--tm-primary)] transition-colors hover:text-[var(--tm-secondary)]"
                  >
                    <span className="text-3xl font-bold tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                      LinkedIn
                    </span>
                    <span className="text-[var(--tm-outline-variant)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--tm-primary)]">
                      ↗
                    </span>
                  </a>

                  <a
                    href="mailto:devserezli@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-2 text-[var(--tm-primary)] transition-colors hover:text-[var(--tm-secondary)]"
                  >
                    <span className="text-3xl font-bold tracking-tight" style={{ fontFamily: "Manrope, sans-serif" }}>
                      Email
                    </span>
                    <span className="text-[var(--tm-outline-variant)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--tm-primary)]">
                      ↗
                    </span>
                  </a>
                </div>
              </section>

              <section>
                <h3 className="mb-6 border-b border-[var(--tm-outline-variant)] pb-2 font-technical text-[10px] uppercase tracking-[0.2em] text-[var(--tm-on-surface-variant)]">
                  Availability
                </h3>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-2 w-2 animate-pulse bg-[var(--tm-primary)]" />
                  <span className="font-technical text-xs uppercase tracking-[0.18em] text-[var(--tm-primary)]">Open for consultation</span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--tm-on-surface-variant)]">
                  Currently based in Izmir, Ucyol, Turkey (GMT+3) / 38.4056 N, 27.1246 E. Responding to all verified incoming signals within 24-48 standard operation cycles.
                </p>
              </section>
            </div>

            <div className="mt-12 border border-[var(--tm-outline-variant)] bg-[var(--tm-surface-container-lowest)] p-6">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="mb-1 font-technical text-[9px] uppercase tracking-[0.18em] text-[var(--tm-outline)]">Packet Status</p>
                  <p className="font-technical text-xs uppercase tracking-[0.14em] text-[var(--tm-primary)]">Ready for transmission</p>
                </div>
                <div className="text-right">
                  <p className="mb-1 font-technical text-[9px] uppercase tracking-[0.18em] text-[var(--tm-outline)]">Encryption</p>
                  <p className="font-technical text-xs uppercase tracking-[0.14em] text-[var(--tm-primary)]">AES-256 Enabled</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
