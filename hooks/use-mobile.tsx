import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(() =>
      typeof window === "undefined" ? false : window.innerWidth < MOBILE_BREAKPOINT
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Listen to both resize and orientation change for reliability
    window.addEventListener("resize", checkMobile);
    window.addEventListener("orientationchange", checkMobile);

    // Also, listen to matchMedia for even more reliability
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener("change", checkMobile);

    // Set initial value
    checkMobile();

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("orientationchange", checkMobile);
      mql.removeEventListener("change", checkMobile);
    };
  }, []);

  return isMobile;
}
