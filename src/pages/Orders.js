import React from "react";
import LaptopTables from "../components/LaptopTables";
import OrderList from "../mobilecomponents/OrderList";

export default function Orders() {
  const orderHeaders = [
    "ORDER ID",
    "CUSTOMER",
    "ORDER DATE",
    "COUNT",
    "AMOUNT",
    "ORDER STATUS",
    "PAYMENT STATUS",
    "PAID AMOUNT",
    "ACTION",
  ];
  const actionGear = [
    {
      name: "View",
      type: "link",
      link: "/",
      action: null,
    },
    {
      name: "Action",
      type: "action",
      link: "",
      action: () => {
        console.log("working");
      },
    },
  ];

  const tableProperties = {
    tableName: "order-table",
    headerColumns: orderHeaders,
    rows: ["value", "value"],
    actionGear: actionGear,
  };

  const data ={
    
  }

  return (
    <>
      <h2 className="page-title mt-2">Orders</h2>
      <div className="d-none d-md-block non-mobile">
        {LaptopTables(tableProperties)}
      </div>
      <div className="d-md-none order-table mobile"> {OrderList()} </div>
    </>
  );
}
