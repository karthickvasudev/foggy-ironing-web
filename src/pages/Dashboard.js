import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const values = { order: 1, completed: 1, revenue: 1001 + ".00" };
  const [tab, setTab] = useState({
    newOrder: true,
    completedOrder: false,
    deliveredOrders: false,
  });

  const tabsValueForChange = {
    newOrder: false,
    completedOrder: false,
    deliveredOrders: false,
  };

  const NonMobileScreen = () => {
    return (
      <div className="d-none d-md-block">
        <div className="row justify-content-center ">
          <span className="col-3 ">
            <div className="card ">
              <h5 className="card-title m-2">Order</h5>
              <div className="card-body">
                <p className="fs-3 text-center">{values.order}</p>
              </div>
            </div>
          </span>
          <span className="col-3">
            <div className="card">
              <h5 className="card-title m-2">Completed</h5>
              <div className="card-body">
                <p className="fs-3 text-center">{values.completed}</p>
              </div>
            </div>
          </span>
          <span className="col-3">
            <div className="card">
              <h5 className="card-title m-2">Revenue</h5>
              <div className="card-body">
                <p className="fs-3 text-center">₹ {values.revenue}</p>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  };

  const MobileScreen = () => {
    return (
      <div className="card d-flex justify-content-center d-md-none m-3 pt-3 rounded-4">
        <span className="card-body text-center">
          <h5 className="card-title row">
            <span className="col-4">
              Order
              <div className="today-order-count">
                <p className="fs-3 text-center mt-3">{values.order}</p>
              </div>
            </span>
            <span className="col-4">
              Completed
              <div className="order-completed-count">
                <p className="fs-3   text-center mb-0 mt-3">
                  {values.completed}
                </p>
              </div>
            </span>
            <span className="col-4">
              Revenue
              <div className="today-revenue">
                <p className="fs-3 text-center mb-0 mt-3">₹ {values.revenue}</p>
              </div>
            </span>
          </h5>
        </span>
      </div>
    );
  };

  const navActive = (bool) => {
    return bool ? "nav-link active px-md-4" : "nav-link px-md-4";
  };

  const DashboardTabs = () => {
    return (
      <div className="d-flex justify-content-center mt-5 ">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <span
              className={navActive(tab.newOrder)}
              onClick={() => {
                setTab({ ...tabsValueForChange, newOrder: true });
              }}
            >
              New Orders
            </span>
          </li>
          <li className="nav-item">
            <span
              className={navActive(tab.completedOrder)}
              onClick={() => {
                setTab({ ...tabsValueForChange, completedOrder: true });
              }}
            >
              Completed Orders
            </span>
          </li>
          <li className="nav-item">
            <span
              className={navActive(tab.deliveredOrders)}
              onClick={() => {
                setTab({ ...tabsValueForChange, deliveredOrders: true });
              }}
            >
              Delivered Orders
            </span>
          </li>
        </ul>
      </div>
    );
  };

  const DashboardTable = () => {
    return (
      <div className="">
        {tab.newOrder && <h1>new order</h1>}
        {tab.completedOrder && <h1>completed order</h1>}
        {tab.deliveredOrders && <h1>delivered order</h1>}
      </div>
    );
  };

  const CreateOrderButton = () => {
    return (
      <>
        <button
          className="btn btn-link position-absolute bottom-0 end-0 me-3 mb-4 d-md-none"
          onClick={() => {
            navigate("orders/create");
          }}
        >
          <span className="bg-primary rounded-circle p-3">
            <i class="fa fa-plus fa-1x mx-1 text-dark" aria-hidden="true"></i>
          </span>
        </button>

        <button
          onClick={() => {
            navigate("orders/create");
          }}
          className="btn btn-outline-primary position-absolute bottom-0 end-0 me-3 mb-4 d-none d-md-block"
        >
          Create Order
        </button>
      </>
    );
  };

  return (
    <>
      <h3>Dashboard</h3>
      <CreateOrderButton />
      <NonMobileScreen />
      <MobileScreen />
      <DashboardTabs />
      <DashboardTable />
    </>
  );
}
