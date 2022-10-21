import React from "react";
import LaptopTables from "../components/LaptopTables";
import SearchSection from "../components/SearchSection";
import OrderList from "../mobilecomponents/OrderList";
import ActionGear from "../components/ActionGear";

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
      link: "/orders/ORD-00001",
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
    rows: ["value", "value", ActionGear(actionGear)],
  };

  const searchProps = { link: "/orders/create" };

  return (
    <>
      <h2 className="page-title mt-2">Orders</h2>
      {SearchSection(searchProps)}
      <div className="d-none d-md-block non-mobile">
        {LaptopTables(tableProperties)}
      </div>
      <div className="d-md-none order-table mobile"> {OrderList()} </div>
    </>
  );
}
