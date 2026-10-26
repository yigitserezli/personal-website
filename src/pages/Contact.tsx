import { useState } from "react";
import { Blank, Line } from "../components/Code";
import { EMAIL, links } from "../content";

const Comment = ({ children }: { children: string }) => (
  <span className="text-muted">
    <span aria-hidden="true"># </span>
    {children}
  </span>
);

export default function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
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
        Tell me about the product you want to build or the problem you are stuck on. Email is the best way to reach me,
        and I reply within two days.
      </Line>
      <Blank />

      <Line className="font-mono text-sm text-muted" aria-hidden="true">
        <span className="text-ok">$ </span>mail
      </Line>
      <Line className="mt-1">
        <a
          href={`mailto:${EMAIL}`}
          className="font-mono text-2xl font-bold tracking-tight break-all text-fg underline decoration-kw decoration-2 underline-offset-[6px] hover:text-kw sm:text-4xl"
        >
          {EMAIL}
        </a>
      </Line>
      <Blank />
      <Line className="flex flex-wrap gap-3 font-mono text-sm">
        <a href={`mailto:${EMAIL}`} className="bg-kw px-5 py-2.5 font-semibold text-bg hover:opacity-90">
          Write an email
        </a>
        <button type="button" onClick={copyEmail} className="border border-line px-5 py-2.5 text-fg hover:border-kw">
          Copy address
        </button>
      </Line>
      <Line as="p" className="mt-3 min-h-[1.65em] font-mono text-sm" role="status">
        {copyState === "copied" ? <span className="text-ok">✓ Copied {EMAIL}</span> : null}
        {copyState === "failed" ? <span className="text-err">✗ Your browser blocked copying. Select the address above instead.</span> : null}
      </Line>
      <Blank />

      <section aria-labelledby="elsewhere" className="font-mono text-sm">
        <Line as="h2" id="elsewhere" className="font-normal tracking-normal">
          <Comment>Elsewhere</Comment>
        </Line>
        <dl>
          {links
            .filter((link) => link.label !== "email")
            .map((link) => (
              <Line key={link.label} className="flex gap-3">
                <dt className="w-[14ch] shrink-0 text-kw">{link.label}</dt>
                <dd className="min-w-0 truncate">
                  <a
                    href={link.href}
                    target="_blank"
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
