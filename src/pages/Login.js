import React from "react";
import GoogleLogin from "react-google-login";
const bgImage = require("../pictures/login_background.jpg");
const logo = require("../pictures/foggy_ironing_logo.png");
const constants = require("../constants/Constants");

export default function Login() {
  return <BackgroundImage />;
}

const loginSuccess = (response) => {
    console.log(response);
};

const loginFailure = (response) => {
    console.log(response);
};

function LoginCard() {
  return (
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
            onSuccess={loginSuccess}
            onFailure={loginFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
}

function BackgroundImage() {
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
      <LoginCard />
    </div>
  );
}
