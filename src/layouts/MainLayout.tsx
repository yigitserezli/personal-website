import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const getRouteIndex = (pathname: string) => {
  switch (pathname) {
    case "/":
      return 0;
    case "/projects":
      return 1;
    case "/about":
      return 2;
    case "/contact":
      return 3;
    default:
      return 0;
  }
};

export default function MainLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const previousPathRef = useRef(location.pathname);
  const [isMobile, setIsMobile] = useState(false);

  const direction = useMemo(() => {
    const previousPath = previousPathRef.current;
    const nextDirection = getRouteIndex(location.pathname) >= getRouteIndex(previousPath) ? 1 : -1;

    previousPathRef.current = location.pathname;
    return nextDirection;
  }, [location.pathname]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateViewportMode = (event?: MediaQueryListEvent) => {
      setIsMobile(event ? event.matches : mediaQuery.matches);
    };

    updateViewportMode();
    mediaQuery.addEventListener("change", updateViewportMode);
    return () => {
      mediaQuery.removeEventListener("change", updateViewportMode);
    };
  }, []);

  const xOffset = isMobile ? 30 : 96;
  const skewAmount = isMobile ? 0.6 : 1.8;
  const transitionDuration = isMobile ? 0.24 : 0.48;

  return (
    <>
      <SiteHeader />
      <AnimatePresence mode="sync" initial={false} custom={direction}>
        <motion.main
          key={location.pathname}
          custom={direction}
          initial={(customDirection: number) => ({
            opacity: 0,
            x: customDirection > 0 ? xOffset : -xOffset,
            skewX: customDirection > 0 ? -skewAmount : skewAmount,
            scale: 0.996,
          })}
          animate={{
            opacity: 1,
            x: 0,
            skewX: 0,
            scale: 1,
          }}
          exit={(customDirection: number) => ({
            opacity: 0,
            x: customDirection > 0 ? -xOffset : xOffset,
            skewX: customDirection > 0 ? skewAmount : -skewAmount,
            scale: 0.996,
          })}
          transition={{
            duration: transitionDuration,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          className="origin-center will-change-transform"
          style={{ willChange: "transform, opacity" }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
    </>
  );
}
