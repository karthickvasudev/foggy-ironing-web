import React from "react";
import { useLongPress } from "use-long-press";

function OrderMobileList(props) {
  const longPressEvent = useLongPress(() => {
    console.log("long pres working");
  });
  return <>{getOrder(props, longPressEvent)}</>;
}

const getOrder = (prop, longPressEvent) => {
  return (
    <div {...longPressEvent()} className="card">
      <div className="card-body">
        <h5 className="card-title order-id text-warning">ORD-00001</h5>

        <div className="order-detail row justify-content-center">
          <div className="customer-details col-3">
            <span className="header fw-bold">Customer</span>
            <div className="name">Karthick</div>
            <small className="phone-number ">9361312424</small>
          </div>

          <div className="order-count col-3 text-center">
            <span className="header fw-bold">Count</span>
            <p className="count mt-2">1</p>
          </div>

          <div className="order-amount col-3 text-center">
            <span className="header fw-bold">Amount</span>
            <p className="amount mt-2">₹ 100</p>
          </div>

          <div className="order-status col-3 text-center">
            <span className="header fw-bold">Status</span>
            <div className="status mt-2">
              <small>IN UNIT</small>
            </div>
          </div>

          <div
            className="order-created-on col-6 mt-2"
            style={{ fontSize: "12px" }}
          >
            <span className="header fw-bold">Created On : </span>
            <small className="created-on">29-Aug-2022 10:46:24AM</small>
          </div>

          <div
            className="order-payment-status col-6 mt-2"
            style={{ fontSize: "12px" }}
          >
            <span className="header fw-bold">Payment Status: </span>
            <small className="payment-status">Paid</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMobileList;
