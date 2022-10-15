import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";
const bgImage = require("../pictures/login_background.jpg");
const logo = require("../pictures/foggy_ironing_logo.png");
const constants = require("../constants/Constants");

export default function Login() {
  const navigate = useNavigate();
  const auth = useAuth();

  const loginSuccessHandle = (response) => {
    auth.loggedIn(response.profileObj);
    navigate("/dashboard", { replace: true });
  };

  const loginFailureHandle = () => {
    auth.loggedOut();
    navigate("/", { replace: true });
  };

  return (
    <div
      className="row align-items-center m-0 justify-content-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card"
        style={{
          width: "25rem",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">Login</h5>
          <div className="row justify-content-center">
            <img src={logo} alt="" style={{ width: "250px" }} />
            <GoogleLogin
              clientId={constants.CLIENT_ID}
              buttonText="SignIn with Google"
              onSuccess={loginSuccessHandle}
              onFailure={loginFailureHandle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
