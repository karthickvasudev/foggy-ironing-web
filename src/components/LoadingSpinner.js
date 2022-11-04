import React, { useEffect, useState } from "react";
import axios from "axios";

function LoadingSpinner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        setShow(true);
        return config;
      },
      (err) => {
        setShow(false);
        return err;
      }
    );

    axios.interceptors.response.use(
      (response) => {
        setShow(false);
        return response;
      },
      (err) => {
        setShow(false);
        return err;
      }
    );
  }, []);
  const overlay = {
    position: "fixed",
    zIndex: "999999",
    background: "#000000a6",
    width: "100%",
    height: "100%",
  };

  const LoadingTag = () => {
    return (
      <div style={overlay}>
        <span
          className="position-absolute top-50 start-50 translate-middle fw-semibold waveAnimation text-white"
          style={{ fontSize: "70px" }}
        >
          <span style={{ "--i": "1" }}>F</span>
          <span style={{ "--i": "2" }}>o</span>
          <span style={{ "--i": "3" }}>g</span>
          <span style={{ "--i": "4" }}>g</span>
          <span style={{ "--i": "5" }}>y</span>
          <p className="fs-3 text-center">Loading...</p>
        </span>
      </div>
    );
  };
  return show && <LoadingTag />;
}

export default LoadingSpinner;
