import React from "react";
import { useNavigate } from "react-router-dom";

function ProductMobileList(props) {
  const navigate = useNavigate();
  const productList = props.data;
  const navigateToViewPage = (productId) => {
    navigate("/products/" + productId);
  };


  const ProductCard = (prop) => {
    const product = prop.data;
    return (
      <div className="card mt-2 mouse" onClick={()=>navigateToViewPage(product.productId)}>
        <div className="card-body row mx-0">
          <h5 className="card-title">
            {product.productId}
          </h5>

          <div className="product-id col text-center">
            <span className="fw-bold">Name</span>
            <p className="mt-3">{product.productName}</p>
          </div>
          <div className="product-quantity col text-center">
            <span className="fw-bold">Quantity</span>
            <p className="mt-3">{product.quantity}</p>
          </div>

          <div className="product-price col text-center">
            <span className="fw-bold">Price</span>
            <p className="mt-3">₹ {product.price}</p>
          </div>

          <div className="product-active col text-center">
            <span className="fw-bold">Status</span>
            <div className="form-check form-switch mt-3 d-flex justify-content-center">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                name="active"
                id="active"
                checked={product.active}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div id="mobile-list-product" className="mobile-list overflow-auto">
        {productList.map((product, key) => (
          <ProductCard key={key} data={product} />
        ))}
      </div>
    </>
  );
}

export default ProductMobileList;
