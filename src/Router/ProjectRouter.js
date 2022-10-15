import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { gapi } from "gapi-script";
import Dashboard from "../pages/Dashboard";
import { AuthProvider } from "../components/Auth";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import RequireAuth from "../components/RequireAuth";
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
        scope: "profile",
      });
    }
    gapi.load("client:auth2", onStart);
  });

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/user/login" element={<Login />} />

          <Route
            path="/"
            element={
              <RequireAuth>
                <MainPage />
              </RequireAuth>
            }
          >
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Route>
        
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
