import React from "react";
import { GoogleLogout } from "react-google-login";
import { Navigate, useNavigate } from "react-router-dom";
const constants = require("../constants/Constants");

export default function Dashboard() {
  const values={order:1,completed:1,revenue:1001+".00"}
  return (
    <>
      {bigscreen(values)}
      {smallscreen(values)}
    </>
  );
}

function bigscreen(props) {
  const {order,completed,revenue} = props;
  return (
    <div className="d-none d-md-block">
      <div className="row justify-content-center ">
        <span className="col-3 ">
          <div className="card bg-success ">
            <h5 className="card-title m-2">Order</h5>
            <div className="card-body">
              <p class="fs-1 text-center mb-0">{order}</p>
            </div>
          </div>
        </span>
        <span className="col-3 ">
          <div className="card bg-secondary">
          <h5 className="card-title m-2">Completed</h5>
            <div className="card-body">
              
              <p class="fs-1 text-center mb-0">{completed}</p>
            </div>
          </div>
        </span>
        <span className="col-3 ">
          <div className="card bg-success">
          <h5 className="card-title m-2">Revenue </h5>  
            <div className="card-body ">
              
              <p class="fs-1 text-center mb-0">₹ {revenue}</p>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
function smallscreen(props) {
  const {order,completed,revenue} = props;
  return (
    <span className="card-body text-center">
      <h5 className="card-title row bg-success d-flex justify-content-center d-md-none m-3 pt-3 rounded-4">
        <span className="col-4">
          Order
          <div>
            <p className="fs-1 text-center mt-2">{order}</p>
          </div>
        </span>
        <span className="col-4">
          Completed
          <div>
            <p className="fs-1 text-center mb-0 mt-2">{completed}</p>
          </div>
        </span>
        <span className="col-4">
          Revenue
          <div>
            <p className="fs-1 text-center mb-0 mt-2">₹ {revenue}</p>
          </div>
        </span>
      </h5>
    </span>
  );
}
