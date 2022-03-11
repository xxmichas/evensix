import { useEffect, useState } from "react";

export default function useMediaMatch(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(false);

  const matchTest = (event: MediaQueryListEvent) => {
    setIsMatch(event.matches);
  };

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    setIsMatch(mediaQueryList.matches);

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", matchTest);
    } else {
      // outdated browser
      mediaQueryList.addListener(matchTest);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", matchTest);
      } else {
        // outdated browser
        mediaQueryList.removeListener(matchTest);
      }
    };
  }, [mediaQuery]);

  return isMatch;
}
