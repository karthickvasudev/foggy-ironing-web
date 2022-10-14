import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import { BrowserRouter } from "react-router-dom";
import { gapi } from "gapi-script";
import Dashboard from "../pages/Dashboard";
const cors = require("cors");

const constants = require("../constants/Constants");

export default function ProjectRouter() {
  useEffect(() => {
    cors({
      origin: "http://localhost:3000",
    });
    function onStart() {
      gapi.client.init({
        clientId: constants.CLIENT_ID,
        scope: "",
      });
    }

    gapi.load("client:auth2", onStart);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/login" element={<Login />}></Route>
        <Route path="/" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
