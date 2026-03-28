import yapigonLogo from "../assets/yapigonlogo.webp";
import furkanTattooLogo from "../assets/furkantattoo.jpeg";
import detoxMarinLogo from "../assets/detoxmarin-logo.jpeg";
import gossipAiLogo from "../assets/gossip-ai.png";
import homeOsLogo from "../assets/home-os.png";

type Project = {
  name: string;
  summary: string;
  stack: string[];
  href?: string;
  logo?: string;
  logoAlt?: string;
  status?: "live" | "in-development";
};

const projects: Project[] = [
  {
    name: "Yapigon.com",
    summary:
      "Construction materials marketplace where buyers open demand and suppliers respond with offers or opportunity products.",
    stack: ["Google Cloud Platform", "Spring Boot", "Next.js", "Flutter"],
    href: "https://yapigon.com",
    logo: yapigonLogo,
    logoAlt: "Yapigon logo",
    status: "live",
  },
  {
    name: "Club App",
    summary:
      "Sports club infrastructure management system: coach-manager workflows, student-parent communication, planning and finance modules.",
    stack: ["Web", "Mobile", "Finance", "CMS"],
    href: "http://club-app.com.tr/",
    status: "live",
  },
  {
    name: "skreentech.com",
    summary:
      "Photobooth platform for web and mobile with AI-powered creative templates and instant media delivery channels.",
    stack: ["Photobooth", "AI", "Microsite", "WhatsApp"],
    status: "live",
  },
  {
    name: "home-os.info",
    summary:
      "Unified family operations platform for finance tracking, task planning, reminders, medicine routines and household workflows.",
    stack: ["Productivity", "Family OS", "In Progress"],
    href: "https://home-os.info",
    logo: homeOsLogo,
    logoAlt: "HomeOS logo",
    status: "in-development",
  },
  {
    name: "Helpora",
    summary:
      "Neighborhood task economy connecting seniors with students and enabling municipalities to launch social responsibility programs.",
    stack: ["Civic Tech", "Task Marketplace", "In Progress"],
    status: "in-development",
  },
  {
    name: "Kulce CRM",
    summary:
      "Digital operating solution for jewelry commerce with stock visibility, supplier access and neighborhood-scale sales workflows.",
    stack: ["CRM", "B2B", "In Progress"],
    status: "in-development",
  },
  {
    name: "detoxmarin.com",
    summary: "Boat rental platform focused on matching travelers with curated charter experiences.",
    stack: ["Marketplace", "Travel", "Booking"],
    href: "https://detoxmarin.com",
    logo: detoxMarinLogo,
    logoAlt: "DetoxMarin logo",
    status: "live",
  },
  {
    name: "Beauty Connect",
    summary:
      "A clinic matching platform helping European clients discover the best-fit aesthetic and health providers in Istanbul.",
    stack: ["Health", "Matching", "International"],
    status: "live",
  },
  {
    name: "Experr Emlak Degerleme",
    summary:
      "Automated valuation engine that scrapes listing platforms and estimates fair property value by location and condition signals.",
    stack: ["Scraping", "Valuation", "Real Estate"],
    status: "live",
  },
  {
    name: "furkantattoo.com",
    summary:
      "Tattoo artist portfolio and booking platform with an admin panel that manages the full website content lifecycle.",
    stack: ["Booking", "Admin Panel", "Portfolio"],
    href: "https://furkantattoo.com",
    logo: furkanTattooLogo,
    logoAlt: "Furkan Tattoo logo",
    status: "live",
  },
  {
    name: "gossip-ai.site",
    summary:
      "An AI-powered social content platform for generating trend-aware copy, campaign ideas, and fast creative direction.",
    stack: ["AI", "Content", "Automation"],
    href: "https://gossip-ai.site",
    logo: gossipAiLogo,
    logoAlt: "Gossip AI logo",
    status: "live",
  },
];

export default function ProjectsShowcase() {
  return (
    <div className="min-h-screen bg-[var(--tm-background)] text-[var(--tm-on-surface)]">
      <main className="relative overflow-hidden px-7 pt-36 pb-24 md:px-14 md:pt-40 xl:px-16">
        <div className="tm-dot-grid absolute inset-0 pointer-events-none opacity-20" />
        <div className="tm-radial-monolith absolute inset-0 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <header className="mb-16 border-l-2 border-[var(--tm-primary)] pl-6 md:pl-8">
            <p className="font-technical text-xs uppercase tracking-[0.28em] text-[var(--tm-outline)]">Current Directory: /projects</p>
            <h1 className="mt-4 text-5xl font-extrabold uppercase tracking-[-0.02em] text-[var(--tm-primary)] md:text-7xl" style={{ fontFamily: "Manrope, sans-serif" }}>
              Engineered Products
            </h1>
            <p className="mt-6 max-w-3xl text-[var(--tm-on-surface-variant)]">
              A complete index of live products and ongoing systems built across marketplaces, operations software, AI-enabled media workflows, and sector-specific digital platforms.
            </p>
          </header>

          <section>
            <div className="mb-8 flex items-end justify-between border-b border-[var(--tm-outline-variant)] pb-6">
              <p className="font-technical text-sm uppercase tracking-[0.24em] text-[var(--tm-on-surface-variant)]">All Projects</p>
              <p className="font-technical text-xs uppercase tracking-[0.2em] text-[var(--tm-outline)]">Total: {projects.length}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => {
                const content = (
                  <article
                    key={project.name}
                    className="group flex h-full min-h-[320px] flex-col justify-between border border-[var(--tm-outline-variant)] bg-[var(--tm-surface)] p-6 transition-all duration-150 hover:border-[var(--tm-primary)] hover:bg-[var(--tm-surface-container-low)]"
                  >
                    <div>
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="flex flex-col gap-2">
                          <span className="font-technical text-[10px] uppercase tracking-[0.2em] text-[var(--tm-outline)]">
                            Build {String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`font-technical text-[10px] uppercase tracking-[0.16em] ${
                              project.status === "in-development" ? "text-[#adabaa]" : "text-[var(--tm-primary)]"
                            }`}
                          >
                            {project.status === "in-development" ? "In Development" : "Live"}
                          </span>
                        </div>

                        {project.logo ? (
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden border border-[var(--tm-outline-variant)] bg-[var(--tm-surface-container-low)] p-1.5">
                            <img src={project.logo} alt={project.logoAlt ?? `${project.name} logo`} className="h-full w-full object-contain" />
                          </div>
                        ) : null}
                      </div>

                      <h2 className="mb-4 text-2xl font-bold tracking-tight text-[var(--tm-primary)]" style={{ fontFamily: "Manrope, sans-serif" }}>
                        {project.name}
                      </h2>

                      <p className="mb-6 text-sm leading-relaxed text-[var(--tm-on-surface-variant)]">{project.summary}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={`${project.name}-${item}`}
                            className="bg-[var(--tm-surface-container-highest)] px-2 py-1 font-technical text-[10px] uppercase tracking-[0.12em] text-[var(--tm-on-surface)]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <span className="font-technical text-xs uppercase tracking-[0.2em] text-[var(--tm-primary)] transition-transform group-hover:translate-x-1">
                        {project.href ? "> View Project" : "> Internal Build"}
                      </span>
                      <div className="h-px w-14 bg-[var(--tm-outline-variant)] transition-all duration-150 group-hover:w-28 group-hover:bg-[var(--tm-primary)]" />
                    </div>
                  </article>
                );

                if (project.href) {
                  return (
                    <a key={project.name} href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                      {content}
                    </a>
                  );
                }

                return <div key={project.name}>{content}</div>;
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
