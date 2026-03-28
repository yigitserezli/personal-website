import { Link } from "react-router-dom";
import myPic from "../assets/my-pic.jpeg";
import { PixelImage } from "../registry/magicui/pixel-image";

const engineCards = [
  {
    code: "01.WEB_CORE",
    title: "React",
    description:
      "Component-driven architecture for complex single-page applications with state-heavy interaction layers.",
    tags: ["Hooks", "Redux", "Next.js"],
  },
  {
    code: "02.MOBILE_UNIT",
    title: "React Native",
    description:
      "Cross-platform mobile engineering with native module integration and production-grade release pipelines.",
    tags: ["Expo", "Bridge", "Performance"],
  },
  {
    code: "03.SYSTEM_LEVEL",
    title: "NodeJS",
    description:
      "High-concurrency backend services, real-time communication flows, and API-first platform design.",
    tags: ["Express", "Socket.io", "PostgreSQL"],
  },
];

const timeline = [
  {
    role: "Full Stack Developer",
    period: "APRIL 2025 - FEBRUARY 2026",
    company: "WeStudio",
    text:
      "Developed end-to-end web and mobile applications, contributed to successful client delivery, and supported project planning and execution workflows.",
  },
  {
    role: "Project-Based Freelance",
    period: "NOVEMBER 2023 - JANUARY 2025",
    company: "Ukraine - Moldova - Thailand",
    text:
      "Delivered mobile application design and development services across multiple markets with project-based remote collaborations.",
  },
  {
    role: "Frontend Developer",
    period: "MAY 2023 - NOVEMBER 2023",
    company: "Graviti Software",
    text:
      "Worked on mobile application interface development and continued part-time support for an additional 5-6 months after the initial contract period.",
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--tm-background)] text-[var(--tm-on-surface)]">
      <div className="tm-dot-grid absolute inset-0 pointer-events-none opacity-20" />
      <div className="tm-radial-monolith absolute inset-0 pointer-events-none" />
      <div className="tm-cinematic-vignette absolute inset-0 pointer-events-none opacity-60" />

      <main className="relative z-10 mx-auto w-full max-w-7xl px-7 pt-36 pb-24 md:px-14 md:pt-40 xl:px-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <aside className="hidden md:col-span-3 md:block">
            <div className="sticky top-32 space-y-8">
              <a href="#persona" className="group block">
                <p className="font-technical mb-1 text-xs tracking-[0.18em] text-[var(--tm-outline)]">01 / SECTION</p>
                <h3 className="text-xl font-extrabold tracking-tight text-[var(--tm-primary)] transition-all duration-150 group-hover:pl-1" style={{ fontFamily: "Manrope, sans-serif" }}>
                  The Persona
                </h3>
              </a>
              <a href="#engine" className="group block">
                <p className="font-technical mb-1 text-xs tracking-[0.18em] text-[var(--tm-outline)]">02 / CORE</p>
                <h3 className="text-xl font-extrabold tracking-tight text-[var(--tm-primary)]/70 transition-all duration-150 group-hover:pl-1 group-hover:text-[var(--tm-primary)]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  The Engine
                </h3>
              </a>
              <a href="#chronicle" className="group block">
                <p className="font-technical mb-1 text-xs tracking-[0.18em] text-[var(--tm-outline)]">03 / HISTORY</p>
                <h3 className="text-xl font-extrabold tracking-tight text-[var(--tm-primary)]/70 transition-all duration-150 group-hover:pl-1 group-hover:text-[var(--tm-primary)]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  The Chronicle
                </h3>
              </a>

              <div className="border-t border-[var(--tm-outline-variant)] pt-10">
                <div className="border border-[var(--tm-outline-variant)] bg-[var(--tm-surface-container-lowest)] p-4">
                  <p className="font-technical mb-2 text-[10px] uppercase tracking-[0.14em] text-[var(--tm-outline)]">Build Status</p>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse bg-[var(--tm-primary)]" />
                    <span className="font-technical text-xs uppercase tracking-[0.08em] text-[var(--tm-on-surface)]">System Stable.v2.4</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-28 md:col-span-9">
            <section id="persona" className="space-y-8">
              <header>
                <h1 className="text-6xl font-extrabold leading-none tracking-tight text-[var(--tm-primary)] md:text-8xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Yigit
                  <br />
                  Serezli.
                </h1>
                <p className="font-technical mt-6 text-sm uppercase tracking-[0.2em] text-[var(--tm-secondary)]">Full Stack Developer</p>
              </header>

              <div className="grid items-start gap-10 md:grid-cols-5">
                <div className="space-y-6 md:col-span-3">
                  <p className="text-xl leading-relaxed text-[var(--tm-on-surface-variant)]">
                    I am a full stack developer with an architecture background, now building software with the same structural discipline and a touch more warmth.
                  </p>
                  <p className="leading-relaxed text-[var(--tm-on-surface-variant)]/90">
                    Usually powered by coffee and life with my husky, I moved into software by choice and curiosity; even in another profession, I would still write code for pure joy.
                  </p>

                </div>

                <div className="relative aspect-[4/5] overflow-hidden border border-[var(--tm-outline-variant)] bg-[var(--tm-surface-container-lowest)] md:col-span-2">
                  <PixelImage src={myPic} alt="Yigit Serezli portrait" customGrid={{ rows: 3, cols: 4 }} grayscaleAnimation />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.12),transparent_55%)]" />
                  <div className="absolute inset-x-0 bottom-0 border-t border-[var(--tm-outline-variant)] bg-[var(--tm-surface-container-lowest)]/85 px-4 py-3 backdrop-blur">
                    <p className="font-technical text-[10px] uppercase tracking-[0.12em] text-[var(--tm-outline)]">LOCATION: IZMIR, TR / 38.4056 N, 27.1246 E</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="engine" className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--tm-primary)]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  02 / The Engine
                </h2>
                <div className="h-px flex-1 bg-[var(--tm-outline-variant)]" />
              </div>

              <div className="grid gap-1 md:grid-cols-3">
                {engineCards.map((card) => (
                  <article key={card.title} className="border border-[var(--tm-outline-variant)] bg-[var(--tm-surface-container-lowest)] p-8 transition-colors duration-150 hover:border-[var(--tm-primary)]">
                    <div className="mb-8 flex items-start justify-between">
                      <span className="text-3xl text-[var(--tm-primary)]">[]</span>
                      <span className="font-technical text-[10px] tracking-[0.08em] text-[var(--tm-outline)]">{card.code}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[var(--tm-primary)]" style={{ fontFamily: "Manrope, sans-serif" }}>
                      {card.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-[var(--tm-on-surface-variant)]">{card.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span key={tag} className="bg-[var(--tm-surface-container-high)] px-2 py-1 font-technical text-[10px] uppercase tracking-[0.1em] text-[var(--tm-on-surface)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="chronicle" className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="text-3xl font-extrabold uppercase tracking-tight text-[var(--tm-primary)]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  03 / The Chronicle
                </h2>
                <div className="h-px flex-1 bg-[var(--tm-outline-variant)]" />
              </div>

              <div className="space-y-16 border-l border-[var(--tm-outline-variant)] pl-7">
                {timeline.map((item, index) => (
                  <article key={item.role} className="relative space-y-4">
                    <span className={`absolute -left-[35px] top-1 block h-4 w-4 border-2 ${index === 0 ? "border-[var(--tm-primary)]" : "border-[var(--tm-outline)]"} bg-[var(--tm-surface)]`} />
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="text-2xl font-bold text-[var(--tm-primary)]" style={{ fontFamily: "Manrope, sans-serif" }}>
                        {item.role}
                      </h3>
                      <span className="font-technical text-sm tracking-[0.16em] text-[var(--tm-secondary)]">{item.period}</span>
                    </div>
                    <p className="font-technical text-sm text-[var(--tm-outline)]">{item.company}</p>
                    <p className="max-w-2xl leading-relaxed text-[var(--tm-on-surface-variant)]">{item.text}</p>
                  </article>
                ))}
              </div>
            </section>

          </div>
        </div>

        <section className="mx-auto mt-24 max-w-5xl border border-[var(--tm-outline-variant)] bg-[var(--tm-surface-container-lowest)]/60 md:mt-28">
          <div className="grid gap-0 md:grid-cols-[1.35fr_0.65fr]">
            <div className="border-b border-[var(--tm-outline-variant)] px-8 py-10 md:border-b-0 md:border-r md:px-10 md:py-12">
              <p className="font-technical mb-6 text-xs uppercase tracking-[0.3em] text-[var(--tm-outline)]">Ready for Production</p>
              <h2 className="max-w-3xl text-4xl leading-[1.04] font-extrabold tracking-tight text-[var(--tm-primary)] md:text-5xl" style={{ fontFamily: "Manrope, sans-serif" }}>
                Incorporate structural excellence into your next engineering project.
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--tm-on-surface-variant)] md:text-base">
                If you need a product-minded full stack developer who can think in systems, shape the architecture, and execute cleanly from idea to release, start the conversation.
              </p>
            </div>

            <div className="flex flex-col justify-between px-8 py-10 md:px-10 md:py-12">
              <div>
                <p className="font-technical text-[10px] uppercase tracking-[0.18em] text-[var(--tm-outline)]">Communication Node</p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--tm-on-surface-variant)]">
                  Available for selected freelance, consulting, and long-term product work.
                </p>
              </div>

              <div className="mt-10 flex justify-start md:mt-16">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center border border-[var(--tm-outline-variant)] px-10 py-5 text-center font-manrope text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--tm-primary)] transition-colors duration-150 hover:border-[var(--tm-primary)] hover:bg-[var(--tm-surface)]"
                >
                  Initiate Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
