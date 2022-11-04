import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { showErrorAlert, showSuccessAlert } from "../../components/Alert";
import { GetDateTime } from "../../constants/DateTimeUtil";
import { ApiUrl } from "../../constants/Constants";

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const { data } = state;
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data]);

  const onSubmit = (data) => {
    axios
      .put(ApiUrl.products + "/" + id, data)
      .then((response) => {
        if (response.status === 200) {
          showSuccessAlert("Product updated Successfully");
          navigate("/products/" + data.id, {
            replace: true,
          });
        } else {
          showErrorAlert("Oops! something went wrong");
        }
      })
      .catch(() => {
        showErrorAlert("Oops! something went wrong");
      });
  };

  const ProductForm = () => {
    return (
      <form
        className="mt-5"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className="row justify-content-center">
          <div className="mb-3 col-md-3">
            <label htmlFor="productId" className="form-label">
              Product Id
              <span className="text-danger mx-1">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="productId"
              value={id}
              readOnly
              autoFocus="on"
              {...register("id", { required: true })}
            />
            <small className="text-muted mx-2">Product id can't be edit</small>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="mb-3 col-md-3">
            <label htmlFor="name" className="form-label">
              Name
              <span className="text-danger mx-1">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.productName && (
              <p className="mt-2 text-danger">Product name is required</p>
            )}
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="mb-3 col-md-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
              <span className="text-danger mx-1">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              {...register("quantity", { required: true })}
            />
            {errors.quantity && (
              <p className="mt-2 text-danger">Quantity is required</p>
            )}
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="mb-3 col-md-3">
            <label htmlFor="price" className="form-label">
              Price
              <span className="text-danger mx-1">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              id="price"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <p className="mt-2 text-danger">Price is required</p>
            )}
          </div>
        </div>

        <div className="row justify-content-center mx-md-5 mx-2">
          <div className="form-check-reverse form-switch col-md-3">
            <input
              className="form-check-input px-3"
              type="checkbox"
              role="switch"
              name="active"
              id="active"
              defaultChecked
              {...register("active")}
            />
            <label className="form-check-label" htmlFor="active">
              Active
            </label>
          </div>
        </div>
        <FormButtons />
      </form>
    );
  };

  const FormButtons = () => {
    return (
      <div className="submit-clear-button mb-3 d-flex justify-content-end mt-3">
        <button type="submit" className="btn btn-primary mx-2">
          Update
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={() => {
            reset(data);
          }}
        >
          Reset
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    );
  };

  return (
    <>
      <h3>{id}</h3>
      <ProductForm />
    </>
  );
}

export default EditProduct;
