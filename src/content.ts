export type ProjectStatus = "live" | "in-progress";

export type Project = {
  name: string;
  summary: string;
  stack: string[];
  status: ProjectStatus;
  href?: string;
  featured?: boolean;
};

export type PlatformService = {
  name: string;
  summary: string;
  stack: string[];
};

export type StackGroup = {
  key: string;
  note: string;
  items: string[];
};

export type Role = {
  role: string;
  company: string;
  from: string;
  to?: string;
  text: string;
};

export type FileEntry = {
  path: string;
  file: string;
  language: string;
  badge: string;
  badgeClass: string;
};

export const EMAIL = "yigit@otters.studio";

export const links = [
  { label: "otters.studio", href: "https://otters.studio", display: "otters.studio" },
  { label: "github", href: "https://github.com/yigitserezli", display: "github.com/yigitserezli" },
  { label: "linkedin", href: "https://www.linkedin.com/in/yigit-serezli/", display: "linkedin.com/in/yigit-serezli" },
  { label: "email", href: `mailto:${EMAIL}`, display: EMAIL },
];

// Every page is presented as a file in the editor; the tab order is the route order.
export const files: FileEntry[] = [
  { path: "/", file: "index.tsx", language: "TypeScript JSX", badge: "TS", badgeClass: "text-kw" },
  { path: "/projects", file: "projects.json", language: "JSON", badge: "{}", badgeClass: "text-fn" },
  { path: "/about", file: "about.md", language: "Markdown", badge: "M", badgeClass: "text-num" },
  { path: "/contact", file: "contact.sh", language: "Shell Script", badge: "$", badgeClass: "text-ok" },
];

export const projects: Project[] = [
  {
    name: "Otters Serve",
    summary:
      "Order and check management for restaurants and cafés: QR menus, table orders, kitchen and staff screens that update live across branches.",
    stack: ["Cloudflare Workers", "D1", "Durable Objects", "Next.js", "Expo"],
    href: "https://ottersserve.com",
    status: "live",
    featured: true,
  },
  {
    name: "E-Kulüp",
    summary:
      "An operating system for youth sports clubs: coach and manager workflows, parent communication, training plans, dues, finance and branded club pages.",
    stack: ["React", "React Native", "Node.js", "PostgreSQL"],
    href: "https://e-kulup.com",
    status: "live",
    featured: true,
  },
  {
    name: "Hous",
    summary:
      "A calm control centre for a shared home: shopping lists, a pantry stocked by barcode scan, bills and reports, chores, documents and maintenance.",
    stack: ["Expo", "Next.js", "Express", "Prisma"],
    href: "https://joinhous.shop",
    status: "live",
    featured: true,
  },
  {
    name: "Derimosa.com",
    summary: "An online store for genuine leather jackets, coats and accessories, with secure payment and easy returns.",
    stack: ["E-commerce", "Payments"],
    href: "https://derimosa.com",
    status: "live",
    featured: true,
  },
  {
    name: "E-Tico",
    summary: "An e-commerce platform.",
    stack: ["E-commerce"],
    status: "live",
  },
  {
    name: "Yapigon.com",
    summary:
      "A construction materials marketplace on web and mobile. Buyers post what they need in minutes; suppliers answer with offers or list surplus stock.",
    stack: ["Google Cloud", "Spring Boot", "Next.js", "Flutter"],
    href: "https://yapigon.com",
    status: "live",
  },
  {
    name: "skreentech.com",
    summary:
      "A photobooth platform for events, with AI style transfer and face-swap templates and instant delivery over microsites, email and WhatsApp.",
    stack: ["AI", "Microsites", "WhatsApp"],
    status: "live",
  },
  {
    name: "Kulce CRM",
    summary: "Stock visibility, supplier access and sales workflows for jewellery shops.",
    stack: ["CRM", "B2B"],
    status: "in-progress",
  },
  {
    name: "detoxmarin.com",
    summary: "Boat rentals that match travellers with curated charter experiences.",
    stack: ["Marketplace", "Booking"],
    href: "https://detoxmarin.com",
    status: "live",
  },
  {
    name: "Beauty Connect",
    summary: "Helps European clients find the right aesthetic and health clinic in Istanbul.",
    stack: ["Health", "Matching"],
    status: "live",
  },
  {
    name: "Experr Emlak Değerleme",
    summary:
      "A valuation engine that reads listing platforms and estimates a property's fair price from its location and condition.",
    stack: ["Scraping", "Real estate"],
    status: "live",
  },
  {
    name: "furkantattoo.com",
    summary: "Portfolio and booking site for a tattoo artist, with an admin panel for every piece of content.",
    stack: ["Booking", "Admin panel"],
    href: "https://furkantattoo.com",
    status: "live",
  },
  {
    name: "gossip-ai.site",
    summary: "Generates trend-aware social copy, campaign ideas and creative direction with AI.",
    stack: ["AI", "Content"],
    href: "https://gossip-ai.site",
    status: "live",
  },
];

// Shared services every Otters Studio product runs on.
export const platform: PlatformService[] = [
  {
    name: "otters-auth",
    summary: "Accounts and sign-in for every app: email and social login, tenant workspaces, and web and mobile integration guides.",
    stack: ["Express", "Prisma", "PostgreSQL", "OAuth"],
  },
  {
    name: "otters-dispatch",
    summary: "One API for in-app notifications, web push, mobile push over FCM, transactional email and SMS.",
    stack: ["Express", "Prisma", "Web Push", "FCM"],
  },
  {
    name: "otters-console",
    summary: "The admin hub where the team manages auth, notifications, mail and customer relationships for each product.",
    stack: ["Next.js", "Express", "React Query"],
  },
  {
    name: "depot",
    summary: "The infrastructure view inside Console: R2 file storage, Workers and their errors, D1 databases and domains.",
    stack: ["Cloudflare R2", "Workers", "D1"],
  },
];

// Grouped by where each tool sits in a product; every item is used in a current project.
export const stackGroups: StackGroup[] = [
  {
    key: "frontend",
    note: "Web apps and dashboards with a lot of state",
    items: ["React", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Zustand", "Redux Toolkit"],
  },
  {
    key: "mobile",
    note: "Cross-platform apps through to the stores, with push, subscriptions and crash reports",
    items: ["React Native", "Expo", "Firebase Cloud Messaging", "RevenueCat", "Sentry"],
  },
  {
    key: "backend",
    note: "API-first services, realtime and validation at the edges",
    items: ["Node.js", "Express", "Hono", "Fastify", "Socket.io", "Zod"],
  },
  {
    key: "data",
    note: "Relational first, with a cache where it pays off",
    items: ["PostgreSQL", "SQLite", "Prisma", "Drizzle", "Redis"],
  },
  {
    key: "cloudflare",
    note: "APIs on Workers, SQLite on D1, files on R2, live state in Durable Objects, Next.js through OpenNext",
    items: ["Workers", "D1", "R2", "Durable Objects", "Cron Triggers", "Static Assets", "OpenNext", "DNS"],
  },
  {
    key: "ai",
    note: "LLM features inside products: agents, structured generation, live voice and text to speech",
    items: ["OpenAI", "OpenAI Agents SDK", "Anthropic Claude", "Google Gemini", "Gemini Live"],
  },
  {
    key: "infra",
    note: "Self-hosted services on a VPS behind WireGuard, shipped from CI",
    items: ["Docker", "GitHub Actions", "Ubuntu", "WireGuard", "S3-compatible storage"],
  },
  {
    key: "integrations",
    note: "Email, notifications and payments",
    items: ["Resend", "Web Push", "iyzico", "Open Food Facts"],
  },
  {
    key: "testing",
    note: "Unit, integration and end-to-end",
    items: ["Vitest", "Jest", "Playwright"],
  },
];

export const experience: Role[] = [
  {
    role: "Co-founder",
    company: "Otters Studio",
    from: "2026-06",
    text: "Co-founded Otters Studio in June 2026. We build products such as Otters Serve, E-Kulüp and Hous, and the shared platform behind them: auth, notifications and infrastructure.",
  },
  {
    role: "Full Stack Developer",
    company: "WeStudio",
    from: "2025-04",
    to: "2026-05",
    text: "Built web and mobile applications end to end and helped plan and run client projects.",
  },
  {
    role: "Freelance developer",
    company: "Remote clients in Ukraine, Moldova and Thailand",
    from: "2023-11",
    to: "2025-01",
    text: "Designed and built mobile applications for remote clients, project by project.",
  },
  {
    role: "Frontend Developer",
    company: "Graviti Software",
    from: "2023-05",
    to: "2023-11",
    text: "Built mobile app interfaces, then stayed on part-time for another five months of support.",
  },
];

export const education = [
  { school: "Siliconmade Academy", field: "Full stack development", years: "2022–2024" },
  { school: "Odessa State Academy", field: "Faculty of Architecture", years: "2018–2022" },
];
