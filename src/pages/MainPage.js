import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

export default function MainPage() {
  const navigate = useNavigate();
  if (sessionStorage.getItem("profile") == null) {
    navigate("/user/login", { replace: true });
  } else {
    return (
      <>
        <NavBar />
        <Outlet></Outlet>
      </>
    );
  }
}
