import React, { useEffect, useState } from "react";

function useScreensize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return {
    screenXs: windowSize.width < 576,
    screenSm: windowSize.width >= 576,
    screenMd: windowSize.width >= 768,
    screenLg: windowSize.width >= 992,
    screenXl: windowSize.width >= 1200,
    screenXxl: windowSize.width >= 1400,

    screenXsNone: windowSize.width > 576,
    screenSmNone: windowSize.width <= 576,
    screenMdNone: windowSize.width <= 768,
    screenLgNone: windowSize.width <= 992,
    screenXlNone: windowSize.width <= 1200,
    screenXxlNone: windowSize.width <= 1400,
  };
}

export default useScreensize;
