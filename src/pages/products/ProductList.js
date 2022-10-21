import React from "react";
import SearchSection from "../../components/SearchSection";

function ProductList() {
  return (
    <>
      <h3>Products</h3>
      <SearchSection data={{ link: "/products/create" }} />
      
    </>
  );
}

export default ProductList;
