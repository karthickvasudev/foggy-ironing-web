import React from "react";
import { useForm } from "react-hook-form";

function CreateCustomer() {
  const CreateCustomerForm = () => {
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
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormButtons />
        <div className="row justify-content-center">
          {/* name */}
          <div className="mb-3 col-md-4">
            <label htmlFor="name" className="form-label">
              Name
              <span className="text-danger mx-1">*</span>
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="name"
              {...register("name", { required: true, minLength: 3 })}
            />
            {errors.name && (errors.name.type === 'required') && (
              <p className="mt-2 text-danger">Customer name is required</p>
            )}
            {errors.name && (errors.name.type === 'minLength') && (
              <p className="mt-2 text-danger">Customer name should be more than 2 characters</p>
            )}
          </div>
        </div>

        {/* phone number */}
        <div className="row justify-content-center">
          <div className="mb-3 col-md-4">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
              <span className="text-danger mx-1">*</span>
            </label>
            <input
              autoComplete="off"
              type="number"
              className="form-control"
              id="name"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <p className="mt-2 text-danger">Phone Number is required</p>
            )}
          </div>
        </div>

        {/* address */}
        <div className="row justify-content-center">
          <div className="mb-3 col-md-4">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="name"
              {...register("address")}
            />
          </div>
        </div>

        {/* city */}
        <div className="row justify-content-center">
          <div className="mb-3 col-md-4">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              autoComplete="off"
              type="text"
              className="form-control"
              id="city"
              {...register("city")}
            />
          </div>
        </div>

        {/* pin code */}
        <div className="row justify-content-center">
          <div className="mb-3 col-md-4">
            <label htmlFor="pinCode" className="form-label">
              Pin Code
            </label>
            <input
              autoComplete="off"
              type="number"
              className="form-control"
              id="pinCode"
              {...register("pinCode")}
            />
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
      <h3>Create Customer</h3>
      <CreateCustomerForm />
    </>
  );
}

export default CreateCustomer;
