import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import teemoAvatar from "../assets/teemo.jpg";

export default function SiteHeader() {
  const location = useLocation();
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const [isCompressed, setIsCompressed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isAvatarOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsAvatarOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isAvatarOpen]);

  useEffect(() => {
    if (!isAvatarOpen && !isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isAvatarOpen, isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompressed(window.scrollY > 54);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-300 md:px-7 xl:px-10 ${isCompressed ? "pt-1.5 md:pt-2" : "pt-3 md:pt-5"}`}>
        <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[var(--tm-outline-variant)]/75 bg-[#0a0a0a]/88 backdrop-blur-xl transition-all duration-300 ${isCompressed ? "px-3 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.45)] md:px-4 md:py-2" : "px-4 py-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.42)] md:px-6 md:py-3"}`}>
          <Link to="/" className={`font-newsreader uppercase tracking-tight text-white transition-all duration-300 ${isCompressed ? "text-sm md:text-[1.08rem]" : "text-[0.92rem] md:text-[1.35rem]"}`}>
            Yigit Serezli
          </Link>

          <div className={`hidden items-center rounded-full border border-[var(--tm-outline-variant)]/60 bg-black/45 transition-all duration-300 md:flex ${isCompressed ? "gap-0.5 p-0.5" : "gap-1 p-1"}`}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.to}
                  className={`relative isolate rounded-full font-manrope uppercase transition-all duration-300 ${
                    isCompressed ? "px-3 py-1.5 text-[10px] tracking-[0.18em]" : "px-4 py-2 text-[11px] tracking-[0.22em]"
                  } ${isActive ? "text-black" : "text-[#C6C6C6] hover:text-white"}`}
                  to={item.to}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 430, damping: 34, mass: 0.7 }}
                    />
                  ) : null}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2 md:gap-2.5">
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--tm-outline-variant)]/65 bg-black/50 text-[11px] font-technical uppercase tracking-[0.12em] text-[var(--tm-primary)] transition-colors duration-150 hover:border-[var(--tm-primary)] md:hidden"
            >
              {isMobileMenuOpen ? "X" : "Menu"}
            </button>

            <button
              type="button"
              aria-label="Open avatar preview"
              onClick={() => setIsAvatarOpen(true)}
              className={`group relative overflow-hidden rounded-full border border-white/25 bg-white/95 p-[2px] text-black transition-all duration-300 hover:scale-[1.02] ${isCompressed ? "h-8 w-8 md:h-9 md:w-9" : "h-9 w-9 md:h-11 md:w-11"}`}
            >
              <motion.img
                layoutId="teemo-header-avatar"
                src={teemoAvatar}
                alt="Teemo avatar"
                className="h-full w-full rounded-full object-cover"
              />
              <span className="absolute inset-0 rounded-full bg-black/12 transition-colors duration-150 group-hover:bg-black/0" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            className="fixed inset-x-3 top-[4.35rem] z-40 rounded-2xl border border-[var(--tm-outline-variant)]/70 bg-[#0a0a0a]/95 p-2 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block rounded-xl px-4 py-3 text-sm font-manrope uppercase tracking-[0.14em] transition-colors duration-150 ${
                    isActive
                      ? "bg-white text-black"
                      : "text-[var(--tm-on-surface-variant)] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isAvatarOpen ? (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-6 backdrop-blur-md md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setIsAvatarOpen(false)}
          >
            <motion.img
              layoutId="teemo-header-avatar"
              src={teemoAvatar}
              alt="Teemo avatar expanded"
              className="max-h-[88vh] w-auto max-w-[92vw] border border-[var(--tm-outline-variant)] object-contain"
              transition={{ type: "spring", stiffness: 240, damping: 30 }}
              onClick={(event) => event.stopPropagation()}
            />

            <motion.button
              type="button"
              className="absolute right-6 top-6 border border-[var(--tm-outline-variant)] bg-[var(--tm-surface-container-lowest)] px-4 py-2 font-technical text-xs uppercase tracking-[0.14em] text-[var(--tm-primary)] transition-colors duration-150 hover:border-[var(--tm-primary)]"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setIsAvatarOpen(false)}
            >
              Close
            </motion.button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
