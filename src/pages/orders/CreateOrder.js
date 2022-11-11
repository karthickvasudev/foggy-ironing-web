import React, { useEffect, useState } from "react";
import axios from "axios";
import { ApiUrl } from "../../constants/Constants";
import { showErrorAlert } from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import useScreensize from "../../components/useScreensize";

export default function CreateOrder() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(ApiUrl.products).then(({ status, data }) => {
      if (status === 200) {
        setProducts(data.filter((d) => d.active === true));
      } else {
        showErrorAlert("Oops! something went wrong");
      }
    });
  }, []);

  const ProductDetailsCard = ({ name, price, productId, quantityValue = '', handleQtyInput, qty }) => {
    return (
      <div className="card mb-2">
        <div className="card-body row">
          <span className="col-md-4 my-2  col-12 align-self-center">
            <span className="fw-bold product-name">{name}</span>
          </span>
          <span className="col-6 col-md-4 align-self-center">
            <span className="product-price">₹ {price} <small className="text-muted">per {qty > 1 ? qty : ''} Qty</small></span>
          </span>
          <span className="col-md-1 col-3 qty">
            <input
              type="number"
              className="form-control text-center"
              id="quantity"
              name={productId}
              value={quantityValue === 0 ? '' : quantityValue}
              onChange={(e) => {
                handleQtyInput(e, price)
              }}
            />
          </span>
          <span className="col align-self-center">
            <span className="total-price-of-qty">
              ₹ {((quantityValue * price) / qty) ? (quantityValue * price) / qty : 0}
            </span>
          </span>
        </div>
      </div>
    );
  };



  const TotalAndProductInputs = ({ products }) => {
    const [quantityInputs, setQuantityInputs] = useState({})
    const [totalPriceInputs, setTotalPriceInputs] = useState({})

    const [quantitySum, setQuantitySum] = useState(0)
    const [priceSum, setPriceSum] = useState(0)

    const handleQtyInput = (e, price) => {
      const { name, value } = e.target;
      setQuantityInputs({ ...quantityInputs, [name]: +value });
      setTotalPriceInputs({ ...totalPriceInputs, [name]: +(value * price) })
    }
    useEffect(() => calculateQtySum(), [quantityInputs])

    const calculateQtySum = () => {
      const quantityValues = Object.values(quantityInputs);
      const priceValues = Object.values(totalPriceInputs);
      const sumQty = quantityValues.reduce((acc, c) => acc + c, 0);

      setQuantitySum(sumQty);
      const sumPrice = priceValues.reduce((acc, c) => acc + c, 0);
      setPriceSum(sumPrice)
    }



    return (
      <>
        <div className="total-section card mt-3">
          <div className="card-body row">
            <h6 className="card-title fw-bold">Total</h6>
            <div className="col-6">
              <span className="total-qty-header fw-bold">Quantity : </span>
              <span className="total-qty">{quantitySum}</span>
            </div>
            <div className="col-6">
              <span className="total-price-header fw-bold">Price : </span>
              <span className="total-price"> ₹ {priceSum}</span>
            </div>
          </div>
        </div>
        <div className="product-Details-Section mt-3">
          <p className="fs-5">Product Details</p>
          {products.map((product) => {
            const { id, price, name, quantity } = product
            return (
              <ProductDetailsCard
                key={id}
                name={name}
                productId={id}
                price={price}
                qty={quantity}
                quantityValue={quantityInputs[id]}
                handleQtyInput={handleQtyInput}
              />
            );
          })}
        </div>
      </>
    )
  }

  const CreateButton = ({ flag, createOrder, disableFlag }) => {
    const { screenMd, screenMdNone } = useScreensize()
    return (
      <>
        {
          screenMd &&
          <div className="submit-clear-button mb-3 d-flex justify-content-end my-3" >
            <button type="submit" className="btn btn-primary mx-2" disabled={flag || !disableFlag}
              onClick={createOrder}
            >Create</button>
            <button className="btn btn-secondary mx-2" onClick={() => {
              navigate(-1);
            }}>Back</button>
          </div>
        }
        {
          screenMdNone &&
          <div className="create-btn my-3 d-md-none">
            <button disabled={flag || !disableFlag} className="btn btn-primary col-12">Create</button>
          </div>}

      </>
    )
  }

  const CustomerSection = ({ props }) => {
    const { customerDetails, setCustomerDetails } = props
    console.log(customerDetails);
    return <div className="row">
      <span className="col-md-6">
        <span className="input-group mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="customer Number"
            aria-label="customer Number"
            maxLength={10}
            pattern='\d'
            inputMode="numeric"
            value={customerDetails.phoneNumber}
            onChange={e => {
              setCustomerDetails({ ...customerDetails, phoneNumber: String(e.target.value) })
            }}
          />
          <button className="input-group-text" data-bs-toggle="modal" data-bs-target="#phone-number-selection-modal">Select</button>
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
  }

  const CustomerSelectionModal = () => {
    return (
      <div className="modal fade" tabIndex="-1" id="phone-number-selection-modal" data-bs-backdrop="static" data-bs-keyboard="false">
        <div className="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>)
  }

  const CreateOrderForm = () => {
    const [customerDetails, setCustomerDetails] = useState({ phoneNumber: '', name: '' })

    const createOrder = () => {
      console.log("working");
    }
    return (
      <>
        <CustomerSelectionModal />
        <CustomerSection props={{ customerDetails: customerDetails, setCustomerDetails: setCustomerDetails }} />
        <TotalAndProductInputs products={products} />
        <CreateButton createOrder={createOrder} />
      </>
    );
  }

  return (
    <div>
      <h3>Create Order</h3>
      <div className="submit-clear-button d-flex justify-content-end my-1" >
        <button className="btn btn-secondary mx-2" onClick={() => {
          navigate(-1);
        }}>Back</button>
      </div>
      <CreateOrderForm products={products} />
    </div>
  );
}
