import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";

function RequireAuth({children}) {
  const auth = useAuth();

  if (sessionStorage.getItem("profile") == null) {
    return <Navigate to='/user/login' />
  }

  return children;
}

export default RequireAuth;
