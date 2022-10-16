import React from "react";
const constants = require("../constants/Constants");

export default function Dashboard() {
  return <>
  <h2 className="page-title">Dashboard</h2>
  {bigScreen()}
  </>;
}

function bigScreen() {
  return (
    <>
      <div className="dashboard-tiles big-screen row justify-content-center mt-3">
        <div className="card col-2">
          <h5 className="card-title m-2">Orders</h5>
          <div className="card-body text-center fs-4">0</div>
        </div>
        <div className="card col-2 mx-4">
          <h5 className="card-title m-2">Completed</h5>
          <div className="card-body text-center fs-4">0</div>
        </div>
        <div className="card col-2">
          <h5 className="card-title m-2">Revenue</h5>
          <div className="card-body text-center fs-4">₹ 0.00</div>
        </div>
      </div>
    </>
  );
}
