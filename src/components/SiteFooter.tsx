export default function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-[var(--tm-outline-variant)] bg-[var(--tm-surface-container-lowest)] px-6 py-14 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-newsreader text-xl uppercase tracking-tight text-[var(--tm-primary)]">Yigit Serezli</p>
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--tm-on-surface-variant)]" style={{ fontFamily: "Manrope, sans-serif" }}>
            © 2026 Yigit Serezli. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8">
          <a
            className="text-xs uppercase tracking-[0.2em] text-[var(--tm-on-surface-variant)] underline decoration-1 underline-offset-4 transition-opacity hover:opacity-100"
            style={{ fontFamily: "Manrope, sans-serif" }}
            href="https://github.com/yigitserezli"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          <a
            className="text-xs uppercase tracking-[0.2em] text-[var(--tm-on-surface-variant)] underline decoration-1 underline-offset-4 transition-opacity hover:opacity-100"
            style={{ fontFamily: "Manrope, sans-serif" }}
            href="mailto:devserezli@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            email
          </a>
          <a
            className="text-xs uppercase tracking-[0.2em] text-[var(--tm-on-surface-variant)] underline decoration-1 underline-offset-4 transition-opacity hover:opacity-100"
            style={{ fontFamily: "Manrope, sans-serif" }}
            href="https://www.linkedin.com/in/yigit-serezli/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
