import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionGear from "../../components/ActionGear";
import LaptopTables from "../../components/LaptopTables";
import ScrollToTop from "../../components/ScrollToTop";
import SearchSection from "../../components/SearchSection";
import useScreensize from "../../components/useScreensize";
import ProductFireStore from "../../firestore/ProductFireStore";
import ProductMobileList from "../../mobilecomponents/ProductMobileList";

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
    const parseRows = () =>
      ProductFireStore.getAll().then((list) => {
        setProductList(list);
        setSearchBackup(list);
        setLaptopTableValues(list);
      }).catch(e=>{
        console.log(e);
        if(e === 'FirebaseError: Quota exceeded.'){
          
        }
      });
    parseRows();
  }, []);

  const setLaptopTableValues = (originList) => {
    const rows = [];
    originList.map((li) => {
      const actionGearData = [
        {
          name: "View",
          type: "link",
          link: "products/" + li.productId,
        },
        {
          name: "Edit",
          type: "action",
          action: () => {
            navigate("/products/" + li.productId + "/edit", {
              state: { data: li },
            });
          },
        },
      ];

      const arr = [
        li.productId,
        li.productName,
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
        ((product.active ? 'active':'inactive') === value)||
        product.productId.includes(value) ||
        product.productName.includes(value) ||
        product.quantity.includes(value) ||
        product.price.includes(value)        
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
