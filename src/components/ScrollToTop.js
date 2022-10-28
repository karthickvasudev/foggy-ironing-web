import React, { useEffect, useState } from "react";
import useScreensize from "./useScreensize";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);
  const { screenMdNone } = useScreensize();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    screenMdNone && showButton && (
      <div
        className="position-fixed bottom-0 end-0 m-2"
        style={{
          zIndex: 9999,
        }}
      >
        <button
          type="button"
          className="btn btn-danger btn-floating btn-lg"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
    )
  );
}

export default ScrollToTop;
