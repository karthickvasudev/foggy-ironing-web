import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";
const bgImage = require("../pictures/login_background.jpg");
const logo = require("../pictures/foggy_ironing_logo.png");
const constants = require("../constants/Constants");

export default function Login() {
  const isGoogleLogin = false;

  const devKeys = [
    "714d5571-01fd-4990-af6f-743a4c55a287",
    "108712567272799180515",
  ];
  const navigate = useNavigate();
  const auth = useAuth();

  const loginSuccessHandle = (response) => {
    auth.loggedIn(response.profileObj);
    navigate("/", { replace: true });
  };

  const loginFailureHandle = () => {
    auth.loggedOut();
    navigate("/user/login", { replace: true });
  };

  const DevLoginPopup = () => {
    const [profile, setProfile] = useState({
      name: undefined,
      email: undefined,
      devId: undefined,
      devKey: undefined,
    });

    const devLoginHandle = () => {
      if (
        profile.name === undefined ||
        profile.email === undefined ||
        profile.devKey === undefined ||
        profile.devId === undefined
      ) {
        alert("login error");
      } else {
        if (!(devKeys[0] === profile.devKey) || !(devKeys[1] === profile.devId)) {
          alert("login error");
        } else {
          auth.loggedIn(profile);
          navigate("/", { replace: true });
          window.location.reload()
        }
      }
    };

    return (
      <>
        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          aria-hidden="true"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="loginModal">
                  Dev login
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={profile.name}
                    onChange={(e) => {
                      setProfile({ ...profile, name: e.target.value });
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                    value={profile.email}
                    onChange={(e) => {
                      setProfile({ ...profile, email: e.target.value });
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="devId" className="form-label">
                    Dev Id
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="devId"
                    value={profile.devId}
                    onChange={(e) => {
                      setProfile({ ...profile, devId: e.target.value });
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="devKey" className="form-label">
                    Dev Key
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="devKey"
                    value={profile.devKey}
                    onChange={(e) => {
                      setProfile({ ...profile, devKey: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={devLoginHandle}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
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

              {isGoogleLogin && (
                <GoogleLogin
                  clientId={constants.CLIENT_ID}
                  buttonText="SignIn with Google"
                  onSuccess={loginSuccessHandle}
                  onFailure={loginFailureHandle}
                  cookiePolicy={"single_host_origin"}
                />
              )}

              {!isGoogleLogin && (
                <button
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login with Dev Environment
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <DevLoginPopup />
    </>
  );
}
