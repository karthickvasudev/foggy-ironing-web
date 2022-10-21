import React from "react";
import LaptopTables from "../components/LaptopTables";
const constants = require("../constants/Constants");

export default function Dashboard() {
  const values = { order: 1, completed: 1, revenue: 1001 + ".00" };
  return (
    <>
      {BigScreen(values)}
      {SmallScreen(values)}
      {dashboardList()}

      {ListDetails()}
    </>
  );
}

function BigScreen(props) {
  const { order, completed, revenue } = props;
  return (
    <div className="d-none d-md-block">
      <div className="row justify-content-center ">
        <span className="col-3 ">
          <div className="card ">
            <h5 className="card-title m-2">Order</h5>
            <div className="card-body">
              <p class="fs-3 text-center mb-0">{order}</p>
            </div>
          </div>
        </span>
        <span className="col-3">
          <div className="card">
            <h5 className="card-title m-2">Completed</h5>
           
  
   <div className="card-body">
              <p class="fs-3 text-center mb-0">{completed}</p>
            </div>
          </div>
        </span>
        <span className="col-3">
          <div className="card">
            <h5 className="card-title m-2">Revenue</h5>
            <div className="card-body">
              <p class="fs-3 text-center mb-0">₹ {revenue}</p>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
function SmallScreen(props) {
  const { order, completed, revenue } = props;
  return (
    <div className="card d-flex justify-content-center d-md-none m-3 pt-3 rounded-4">
      <span className="card-body text-center">
        <h5 className="card-title row">
          <span className="col-4">
            Order
            <div>
              <p className="fs-3 text-center mt-2">{order}</p>
            </div>
          </span>
          <span className="col-4">
            Completed
            <div>
              <p className="fs-3   text-center mb-0 mt-2">{completed}</p>
            </div>
          </span>
          <span className="col-4">
            Revenue
            <div>
              <p className="fs-3 text-center mb-0 mt-2">₹ {revenue}</p>
            </div>
          </span>
        </h5>
      </span>
    </div>
  );
}
function dashboardList() {
  return (
    <div className="d-flex justify-content-center mt-5 ">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <span class="nav-link active px-4" aria-current="page" href="#">
            New Orders
          </span>
        </li>
        <li class="nav-item">
          <span class="nav-link  px-4" href="#">
            Completed Orders
          </span>
        </li>
        <li class="nav-item">
          <span class="nav-link px-4">Delivered Orders</span>
        </li>
      </ul>
    </div>
  );
}

function ListDetails() {

 if (true) {
    return (
      <div className="mt-3">
        <h1>new orders</h1>
      </div>
    );
  }
}
