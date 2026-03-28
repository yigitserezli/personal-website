import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import teemoAvatar from "../assets/teemo.jpg";

export default function SiteHeader() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isProjectsPage = location.pathname === "/projects";
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";
  const [isAvatarOpen, setIsAvatarOpen] = useState(false);
  const [isCompressed, setIsCompressed] = useState(false);

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
    if (!isAvatarOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isAvatarOpen]);

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
      <header className={`fixed inset-x-0 top-0 z-50 px-4 transition-all duration-300 md:px-7 xl:px-10 ${isCompressed ? "pt-1.5 md:pt-2" : "pt-4 md:pt-5"}`}>
        <nav className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[var(--tm-outline-variant)]/75 bg-[#0a0a0a]/88 backdrop-blur-xl transition-all duration-300 ${isCompressed ? "px-3 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.45)] md:px-4 md:py-2" : "px-4 py-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.42)] md:px-6 md:py-3"}`}>
          <Link to="/" className={`font-newsreader uppercase tracking-tight text-white transition-all duration-300 ${isCompressed ? "text-sm md:text-[1.08rem]" : "text-base md:text-[1.35rem]"}`}>
            Yigit Serezli
          </Link>

          <div className={`hidden items-center rounded-full border border-[var(--tm-outline-variant)]/60 bg-black/45 transition-all duration-300 md:flex ${isCompressed ? "gap-0.5 p-0.5" : "gap-1 p-1"}`}>
            <Link
              className={`rounded-full font-manrope uppercase transition-all duration-300 ${isCompressed ? "px-3 py-1.5 text-[10px] tracking-[0.18em]" : "px-4 py-2 text-[11px] tracking-[0.22em]"} ${
                isHomePage ? "bg-white text-black" : "text-[#C6C6C6] hover:bg-white/10 hover:text-white"
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`rounded-full font-manrope uppercase transition-all duration-300 ${isCompressed ? "px-3 py-1.5 text-[10px] tracking-[0.18em]" : "px-4 py-2 text-[11px] tracking-[0.22em]"} ${
                isProjectsPage ? "bg-white text-black" : "text-[#C6C6C6] hover:bg-white/10 hover:text-white"
              }`}
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className={`rounded-full font-manrope uppercase transition-all duration-300 ${isCompressed ? "px-3 py-1.5 text-[10px] tracking-[0.18em]" : "px-4 py-2 text-[11px] tracking-[0.22em]"} ${
                isAboutPage ? "bg-white text-black" : "text-[#C6C6C6] hover:bg-white/10 hover:text-white"
              }`}
              to="/about"
            >
              About
            </Link>
            <Link
              className={`rounded-full font-manrope uppercase transition-all duration-300 ${isCompressed ? "px-3 py-1.5 text-[10px] tracking-[0.18em]" : "px-4 py-2 text-[11px] tracking-[0.22em]"} ${
                isContactPage ? "bg-white text-black" : "text-[#C6C6C6] hover:bg-white/10 hover:text-white"
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open avatar preview"
            onClick={() => setIsAvatarOpen(true)}
            className={`group relative overflow-hidden rounded-full border border-white/25 bg-white/95 p-[2px] text-black transition-all duration-300 hover:scale-[1.02] ${isCompressed ? "h-8 w-8 md:h-9 md:w-9" : "h-10 w-10 md:h-11 md:w-11"}`}
          >
            <motion.img
              layoutId="teemo-header-avatar"
              src={teemoAvatar}
              alt="Teemo avatar"
              className="h-full w-full rounded-full object-cover"
            />
            <span className="absolute inset-0 rounded-full bg-black/12 transition-colors duration-150 group-hover:bg-black/0" />
          </button>
        </nav>
      </header>

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
