import React, { useEffect, useState } from "react";
import ProductFireStore from "../../firestore/ProductFireStore";

export default function CreateOrder() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    ProductFireStore.getAll().then((list) => {
      const activeProducts = list.filter((li) => li.active === true);
      setProducts(activeProducts);
    });
  });

  const ProductDetailsCard = ({ data }) => {
    
    return (
      <div className="card mb-2">
        <div className="card-body row">
          <span className="col-4 align-self-center">
            <span className="fw-bold product-name">{data.productName}</span>
          </span>
          <span className="col-3 align-self-center">
            <span className="product-price">₹ {data.price}</span>
          </span>
          <span className="col-md-1 col-3 qty">
            <input type="number" className="form-control text-center" id="quantity" />
          </span>
          <span className="col align-self-center">
            <span className="total-price-of-qty">₹ 0</span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h3>Create Order</h3>
      <div className="row">
        <span className="col-md-6">
          <span className="input-group mt-4">
            <input
              type="text"
              className="form-control"
              placeholder="customer Number"
              aria-label="customer Number"
            />

            <button className="input-group-text">Select</button>
          </span>
        </span>
        <span className="col-md-6 mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="customer Name"
            aria-label="customer Name"
          />
        </span>
      </div>
      <div className="total-section card mt-3">
        <div className="card-body row">
          <h6 className="card-title fw-bold">Total</h6>
          <div className="col-6">
            <span className="total-qty-header fw-bold">Quantity : </span>
            <span className="total-qty">0</span>
          </div>
          <div className="col-6">
            <span className="total-price-header fw-bold">Price : </span>
            <span className="total-price"> ₹ 0</span>
          </div>
        </div>
      </div>
      <div className="product-Details-Section mt-3">
        <p className="fs-5">Product Details</p>
        {products.map((product) => {
          return <ProductDetailsCard data={product} />;
        })}
      </div>
    </div>
  );
}
