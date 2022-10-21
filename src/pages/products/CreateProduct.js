import React from "react";
import { useForm } from "react-hook-form";

function CreateProduct() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const ProductForm = () => {
    return (
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("productName", { required: true })}
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
              type="text"
              className="form-control"
              name="price"
              id="price"
              {...register("price", { required: true, min: 3 })}
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
          Create
        </button>
        <button type="reset" className="btn btn-secondary mx-2">
          Clear
        </button>
      </div>
    );
  };

  return (
    <>
      <h3>Create Product</h3>
      {<ProductForm />}
    </>
  );
}

export default CreateProduct;
