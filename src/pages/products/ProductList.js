import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionGear from "../../components/ActionGear";
import LaptopTables from "../../components/LaptopTables";
import ScrollToTop from "../../components/ScrollToTop";
import SearchSection from "../../components/SearchSection";
import useScreensize from "../../components/useScreensize";
import { ApiUrl } from "../../constants/Constants";
import ProductMobileList from "../../mobilecomponents/ProductMobileList";
import axios from "axios";

function ProductList() {
  const { screenMd, screenMdNone } = useScreensize();
  const navigate = useNavigate();
  const [tableRows, setTableRows] = useState([]);
  const [searchBackup, setSearchBackup] = useState([]);
  const [productList, setProductList] = useState([]);
  const headerColumns = [
    "PRODUCT ID",
    "NAME",
    "QTY",
    "PRICE",
    "ACTIVE",
    "ACTION",
  ];
  useEffect(() => {
    axios.get(ApiUrl.products).then((response) => {
      setProductList(response.data);
      setSearchBackup(response.data);
      setLaptopTableValues(response.data);
    });
  }, []);

  const setLaptopTableValues = (originList) => {
    const rows = [];
    originList.map((li) => {
      const actionGearData = [
        {
          name: "View",
          type: "link",
          link: "products/" + li.id,
        },
        {
          name: "Edit",
          type: "action",
          action: () => {
            navigate("/products/" + li.id + "/edit", {
              state: { data: li },
            });
          },
        },
      ];

      const arr = [
        li.id,
        li.name,
        li.quantity,
        "₹ " + li.price,
        li.active ? "Active" : "Inactive",
        <ActionGear data={actionGearData} />,
      ];
      rows.push(arr);
      setTableRows(rows);
    });
  };

  const searchData = (value) => {
    if (!value) {
      setProductList(searchBackup);
      setLaptopTableValues(searchBackup);
      return;
    }

    let searchedResult = searchBackup.filter((product) => {
      return (
        (product.active ? "active" : "inactive") === value ||
        product.id.includes(value) ||
        product.name.includes(value) ||
        product.quantity === value ||
        product.price === value
      );
    });
    setProductList(searchedResult);
    setLaptopTableValues(searchedResult);
  };

  const NoData = () => {
    return (
      <span className="no-data position-fixed top-50 start-50 translate-middle fw-bold">
        No Data!
      </span>
    );
  };

  return (
    <>
      <ScrollToTop />
      <h3>Products</h3>
      <SearchSection
        data={{ link: "/products/create" }}
        searchData={searchData}
      />

      <div className="mt-3 table-wrapper">
        {productList.length === 0 && <NoData />}

        {productList.length !== 0 && screenMd && (
          <LaptopTables
            tableName="product-table"
            headers={headerColumns}
            rows={tableRows}
          />
        )}

        {productList.length !== 0 && screenMdNone && (
          <ProductMobileList data={productList} />
        )}
      </div>
    </>
  );
}

export default ProductList;
