import React from "react";
import { useParams } from "react-router-dom";
import MoreOptions from "../components/MoreOptions";

function ViewOrder() {
  const { id } = useParams();

  const menuItems = [
    {
      name: "link",
      type: "link",
      link: "/",
    },
    {
      name: "action",
      type: "action",
      action: () => {
        console.log("working");
      },
    },
  ];

  const OrderDetailsCard = () => {
    return (
      <div class="card mt-3 order-details">
        <div class="card-body row">
          <OrderDetails />
        </div>
      </div>
    );
  };

  const OrderDetails = () => {
    return (
      <>
        <div className="col-md-6 row my-2">
          <span className="col-6 fw-bold">Key :</span>
          <span className="col-6">value</span>
        </div>
        <div className="col-md-6 row my-2">
          <span className="col-6 fw-bold">Key :</span>
          <span className="col-6">value</span>
        </div>
        <div className="col-md-6 row my-2">
          <span className="col-6 fw-bold">Key :</span>
          <span className="col-6">value</span>
        </div>
      </>
    );
  };

  const ProductDetailsCard = () => {
    return (
      <div class="card mt-3 product-details">
        <div class="card-body row"></div>
      </div>
    );
  };

  return (
    <>
      <h3 className="page-title">{id}</h3>
      {MoreOptions(menuItems)}
      {<OrderDetailsCard />}
      {<ProductDetailsCard />}
    </>
  );
}

export default ViewOrder;
