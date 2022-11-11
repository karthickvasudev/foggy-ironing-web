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
        <div className="order-id-options-menu row">
        <h5 className="card-title order-id text-warning col-11">ORD-00001</h5>
        <div className="menu col-1">
        <i class="fa fa-ellipsis-v fa-2x" aria-hidden="true"></i>
        </div>
        </div>
        
        <div className="customer-details row mt-1">
          <div className="col-12 my-1">
            <span className="header fw-bold">Customer : </span>
            <span className="name">Karthick</span>
          </div>
          <div className="col-12 my-1">
            <span className="header fw-bold">Phone : </span>
            <small className="phone-number ">9361312424</small>
          </div>
        </div>

        <div className="headers mt-3 row justify-content-center">
          <div className="order-count-header col-3 text-center">
            <span className="header fw-bold">Count</span>
          </div>

          <div className="order-amount-header col-3 text-center">
            <span className="header fw-bold">Amount</span>
          </div>

          <div className="order-status-header col-3 text-center">
            <span className="header fw-bold">Status</span>
          </div>
          <div className="order-status-header col-3 text-center">
            <span className="header fw-bold">Payment Status:</span>
          </div>
        </div>

        <div className="order-detail mt-1 row justify-content-center">
          <div className="order-count col-3 text-center">
            <p className="count">1</p>
          </div>

          <div className="order-amount col-3 text-center">
            <p className="amount">₹ 100</p>
          </div>

          <div className="order-status col-3 text-center">
            <small>IN UNIT</small>
          </div>
          <div className="order-status col-3 text-center">
            <small>Paid</small>
          </div>
          <div className="order-created-on col-12" style={{ fontSize: "12px" }}>
            <span className="header fw-bold">Created On : </span>
            <small className="created-on">29-Aug-2022 10:46:24AM</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderMobileList;
