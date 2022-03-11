import { useEffect, useState } from "react";

export default function useMediaMatch(mediaQuery: string) {
  // with true as default state we make sure that the pages will be pre-rendered in desktop mode on the server
  const [isMatch, setIsMatch] = useState(true);

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
