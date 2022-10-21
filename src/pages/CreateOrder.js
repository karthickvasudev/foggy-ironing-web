import { Button } from "bootstrap";
import React from "react";

export default function CreateOrder() {
  return (
    <div>
      <h3>Create Order</h3>
      <div className="row">
        <span className="col-md-6">
          <span className="input-group mt-4">
            <input
              type="text"
              class="form-control"
              placeholder="customer Number"
              aria-label="customer Number"
            />

            <button className="input-group-text">Select</button>
          </span>
        </span>
        <span className="col-md-6 mt-4">
          <input
            type="text"
            class="form-control"
            placeholder="customer Name"
            aria-label="customer Name"
          />
        </span>
      </div>
      <div className="product-Details-Section mt-3">
        <p className="fs-5">Product Details</p>
        <div class="card ">
          <div class="card-body row">
            <span className="col">
              <p className="fw-bold">Product</p>
            </span>
            <span className="col mt-1">
              <p>Price</p>
            </span>
            <span className="col-md-1 col-2">
              <input type="text" class="form-control" id="inputZip" />
            </span>
            <span className="col mt-1">
              <p>price</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
