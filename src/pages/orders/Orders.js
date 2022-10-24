import React from "react";
import LaptopTables from "../../components/LaptopTables";
import SearchSection from "../../components/SearchSection";
import OrderMobileList from "../../mobilecomponents/OrderMobileList";
import useScreensize from "../../components/useScreensize";

export default function Orders() {
  const { screenMd, screenMdNone } = useScreensize();
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

  const searchProps = { link: "/orders/create" };

  return (
    <>
      <h2 className="page-title mt-2">Orders</h2>
      <SearchSection data={searchProps} />
      {screenMd && <LaptopTables />}
      {screenMdNone && <OrderMobileList />}
    </>
  );
}
