import { useEffect, useState } from "react";

export function useIsMobile(maxWidth = 425) {
  const mediaQuery = `(max-width: ${maxWidth}px)`;

  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.matchMedia(mediaQuery).matches : false));

  useEffect(() => {
    const media = window.matchMedia(mediaQuery);
    const listener = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    setIsMobile(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [mediaQuery]);

  return isMobile;
}
