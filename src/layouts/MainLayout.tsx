import { useCallback, useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import CommandPalette from "../components/CommandPalette";
import { files, links } from "../content";
import { useTheme } from "../lib/theme";

function ThemeIcon({ theme }: { theme: "light" | "dark" }) {
  return theme === "dark" ? (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1" />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7Z" />
    </svg>
  );
}

export default function MainLayout() {
  const location = useLocation();
  const { theme, toggle } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);

  const current = files.find((entry) => entry.path === location.pathname);
  const fileName = current?.file ?? location.pathname.slice(1);

  useEffect(() => {
    document.title = current ? `${current.file} — Yiğit Serezli` : "Not found — Yiğit Serezli";

    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [current, location.pathname]);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const closePalette = useCallback(() => setPaletteOpen(false), []);

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#content"
        className="sr-only z-50 bg-status-bg px-3 py-2 font-mono text-sm text-status-fg focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-30 border-b border-line bg-chrome">
        <div className="flex h-10 items-center gap-3 px-3 sm:px-4">
          <div className="hidden w-24 items-center gap-2 sm:flex" aria-hidden="true">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>

          <Link to="/" className="font-mono text-[0.8125rem] text-fg sm:hidden">
            yigitserezli.tr
          </Link>
          <p className="hidden min-w-0 flex-1 truncate text-center font-mono text-[0.8125rem] text-muted sm:block">
            <span className="text-fg">{fileName}</span> — yigitserezli.tr
          </p>

          <div className="ml-auto flex items-center justify-end gap-1 sm:ml-0 sm:w-24 md:w-auto">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-keyshortcuts="Meta+K Control+K"
              className="flex h-7 items-center gap-2 border border-line bg-bg px-2.5 font-mono text-xs text-muted hover:text-fg"
            >
              <span className="hidden md:inline">Go to file</span>
              <span className="md:hidden">Search</span>
              <kbd className="hidden font-mono text-[0.6875rem] text-faint md:inline">⌘K</kbd>
            </button>
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              className="flex size-7 items-center justify-center text-muted hover:text-fg"
            >
              <ThemeIcon theme={theme} />
            </button>
          </div>
        </div>

        <nav aria-label="Pages" className="no-scrollbar overflow-x-auto">
          <ul className="flex min-w-max">
            {files.map((entry) => (
              <li key={entry.path}>
                <NavLink
                  to={entry.path}
                  end
                  className={({ isActive }) =>
                    `flex h-10 items-center gap-2 border-t-2 border-r border-r-line px-4 font-mono text-[0.8125rem] ${
                      isActive ? "border-t-kw bg-bg text-fg" : "border-t-transparent text-muted hover:text-fg"
                    }`
                  }
                >
                  <span className={`text-[0.6875rem] font-bold ${entry.badgeClass}`} aria-hidden="true">
                    {entry.badge}
                  </span>
                  {entry.file}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="flex flex-1">
        <aside
          aria-label="Explorer"
          className="sticky top-[5.0625rem] hidden h-[calc(100dvh-5.0625rem-1.75rem)] w-60 shrink-0 self-start overflow-y-auto border-r border-line bg-chrome py-4 font-mono text-[0.8125rem] lg:block"
        >
          <p className="px-4 pb-1 text-muted">
            <span aria-hidden="true">▾ </span>yigitserezli.tr
          </p>
          <ul>
            {files.map((entry) => (
              <li key={entry.path}>
                <NavLink
                  to={entry.path}
                  end
                  tabIndex={-1}
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-1 pr-4 pl-8 ${isActive ? "bg-panel text-fg" : "text-muted hover:text-fg"}`
                  }
                >
                  <span className={`w-4 text-[0.6875rem] font-bold ${entry.badgeClass}`} aria-hidden="true">
                    {entry.badge}
                  </span>
                  {entry.file}
                </NavLink>
              </li>
            ))}
          </ul>

          <p className="mt-5 px-4 pb-1 text-muted">
            <span aria-hidden="true">▾ </span>links
          </p>
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.label === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-2 py-1 pr-4 pl-8 text-muted hover:text-fg"
                >
                  <span className="w-4 text-[0.6875rem] text-faint" aria-hidden="true">
                    ↗
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <main id="content" ref={mainRef} tabIndex={-1} className="min-w-0 flex-1 bg-bg focus:outline-none">
          <p className="px-4 pt-3 font-mono text-xs text-muted sm:px-6">
            yigitserezli.tr <span aria-hidden="true">›</span> {fileName}
          </p>
          <div className="px-4 pt-8 pb-20 sm:px-6 sm:pt-10 lg:pr-12">
            <Outlet />
          </div>
        </main>
      </div>

      <footer className="z-20 flex h-7 items-center justify-between gap-4 bg-status-bg px-3 font-mono text-xs text-status-fg md:sticky md:bottom-0">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">
            <span aria-hidden="true">⎇ </span>main
          </span>
          <Link to="/contact" className="hover:underline">
            <span aria-hidden="true">● </span>Available for work
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span>İzmir, GMT+3</span>
          <span className="hidden md:inline">{current?.language ?? "Plain Text"}</span>
          <span className="hidden md:inline">UTF-8</span>
        </div>
      </footer>

      <CommandPalette open={paletteOpen} onClose={closePalette} onToggleTheme={toggle} theme={theme} />
    </div>
  );
}
