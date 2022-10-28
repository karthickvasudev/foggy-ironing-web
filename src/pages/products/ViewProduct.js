import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActionGear from "../../components/ActionGear";
import ProductFireStore from "../../firestore/ProductFireStore";

function ViewProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () =>
      ProductFireStore.getProduct(id).then(async (data) => {
        await setProduct(data);
      });

    getProduct();
  }, []);

  const ProductDetails = () => {
    return (
      <>
        <div className="col-md-12 row my-2 product-id">
          <span className="col-md-2 col-6 fw-bold d-flex justify-content-start">
            Product Id :
          </span>
          <span className="col-6">{product.productId}</span>
        </div>

        <div className="col-md-12 row my-2 product-name">
          <span className="col-md-2 col-6 fw-bold d-flex justify-content-start">
            Name :
          </span>
          <span className="col-6">{product.productName}</span>
        </div>

        <div className="col-md-12 row my-2 quantity">
          <span className="col-md-2 col-6 fw-bold d-flex justify-content-start">
            Quantity :
          </span>
          <span className="col-6">{product.quantity}</span>
        </div>

        <div className="col-md-12 row my-2 price">
          <span className="col-md-2 col-6 fw-bold d-flex justify-content-start">
            Price :
          </span>
          <span className="col-6">₹ {product.price}</span>
        </div>

        <div className="col-md-12 row my-2 active">
          <span className="col-md-2 col-6 fw-bold d-flex justify-content-start">
            Active :
          </span>
          <span className="col-6">
            <div className="form-check form-switch col-md-9">
              <input
                className="form-check-input px-3"
                type="checkbox"
                role="switch"
                name="active"
                id="active"
                checked={product.active}
                readOnly
              />
            </div>
          </span>
        </div>

        <div className="col-md-12 row my-2 created-by">
          <span className="col-md-2 col-6 fw-bold d-flex justify-content-start">
            Created By :
          </span>
          <span className="col-6">{product.createdBy}</span>
        </div>

        <div className="col-md-12 row my-2 created-on">
          <span className="col-md-2 col-6 fw-bold d-flex justify-content-start">
            Created On :
          </span>
          <span className="col-6">{product.createdOn}</span>
        </div>

        <div className="col-md-12 row my-2 updated-by">
          <span className="col-md-2 col-6 fw-bold d-flex justify-content-start">
            Updated By :
          </span>
          <span className="col-6">{product.updatedBy}</span>
        </div>

        <div className="col-md-12 row my-2 updated-on">
          <span className="col-md-2 col-6 fw-bold d-flex justify-content-start">
            Updated On :
          </span>
          <span className="col-6">{product.updatedOn}</span>
        </div>
      </>
    );
  };

  const TopButtons = () => {
    return (
      <>
        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>

        <button
          className="btn btn-primary mx-1"
          onClick={() => {
            navigate("/products/" + id + "/edit", { state: { data: product } });
          }}
        >
          Edit
        </button>
      </>
    );
  };

  return (
    <>
      <h3>{id}</h3>
      <div className="d-flex justify-content-end me-1">
        <TopButtons />
      </div>
      <div className="card mt-3 order-details">
        <div className="card-body row">
          <ProductDetails />
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
