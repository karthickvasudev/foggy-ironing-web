import React, { useEffect } from "react";
import { useGoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
const menuItems = require("../constants/menuItems.json");
const constants = require("../constants/Constants");

export default function NavBar() {
  const userDetails = require("../components/UserDetails").getUserDetails();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          FOGGY IRONING
        </a>
        <div className="ms-auto text-white">
          <span className="me-4"> Hi {userDetails.name}!</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              FOGGY IRONING
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {ProfileDetails(userDetails)}
              {menuItems.map((menu, key) => Menus(menu, key))}

              <li className="nav-item m-2">
                <span
                  className="nav-link"
                  aria-current="page"
                  onClick={() => {
                    sessionStorage.clear();
                    navigate("user/login", { replace: true });
                  }}
                >
                  LOGOUT
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

const Menus = (menu, key) => {
  return (
    <li key={key} className="nav-item m-2">
      <a className="nav-link" aria-current="page" href={menu.link}>
        {menu.name}
      </a>
    </li>
  );
};

const ProfileDetails = (userDetails) => {
  return (
    <div className="profile-details mb-3 row">
      <div className="col d-flex justify-content-center">
        <img src={userDetails.imageUrl} className="rounded" alt="..." />
      </div>
      <div className="ms-1 col">
        <div className="name fw-bold mt-3">
          {userDetails.name.toUpperCase()}
        </div>
        <div className="email text-muted mt-2">
          <small>{userDetails.email}</small>{" "}
        </div>
      </div>
    </div>
  );
};
