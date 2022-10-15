import React from "react";
import { GoogleLogout } from "react-google-login";
import { Navigate, useNavigate } from "react-router-dom";
const constants = require("../constants/Constants");

export default function Dashboard() {
  const navigate = useNavigate();

  const logoutSuccess = () => {
    sessionStorage.clear();
    navigate("/", { replace: true });
  };
  return (
    <div>
      <GoogleLogout
        clientId={constants.CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={logoutSuccess}
      ></GoogleLogout>
    </div>
  );
}
