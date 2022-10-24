import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { gapi } from "gapi-script";
import Dashboard from "../pages/Dashboard";
import { AuthProvider } from "../components/Auth";
import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import RequireAuth from "../components/RequireAuth";
import ProductList from "../pages/products/ProductList";
import CreateProduct from "../pages/products/CreateProduct";
import PageNotFound from "../pages/PageNotFound";
import CustomerList from "../pages/customers/CustomerList";
import CreateCustomer from "../pages/customers/CreateCustomer";
import ViewProduct from "../pages/products/ViewProduct";
import EditProduct from "../pages/products/EditProduct";
import Orders from "../pages/orders/Orders";
import ViewOrder from "../pages/orders/ViewOrder";
import CreateOrder from "../pages/orders/CreateOrder";
const cors = require("cors");

const constants = require("../constants/Constants");

export default function ProjectRouter() {
  useEffect(() => {
    cors({
      origin: "http://localhost:3000",
    });

    function onStart() {
      gapi.client.init({
        clientId: constants.CLIENT_ID,
        scope: "profile",
      });
    }
    gapi.load("client:auth2", onStart);
  });

  return (
    <AuthProvider>
      <BrowserRouter>
        {/* login page parent route */}
        <Routes>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/user/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <MainPage />
              </RequireAuth>
            }
          >
            {/* dashboard */}
            <Route
              path=""
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route path="orders">
              <Route
                path=""
                element={
                  <RequireAuth>
                    <Orders />
                  </RequireAuth>
                }
              ></Route>
              <Route
                path="create"
                element={
                  <RequireAuth>
                    <CreateOrder />
                  </RequireAuth>
                }
              />
            </Route>
            {/* Orders route */}
            <Route path="orders">
              <Route
                path=""
                element={
                  <RequireAuth>
                    <Orders />
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <ViewOrder />
                  </RequireAuth>
                }
              />
            </Route>

            {/* Product Route */}

            <Route path="products">
              <Route
                path=""
                element={
                  <RequireAuth>
                    <ProductList />
                  </RequireAuth>
                }
              />
              <Route
                path="create"
                element={
                  <RequireAuth>
                    <CreateProduct />
                  </RequireAuth>
                }
              />
              <Route
                path=":id/edit"
                element={
                  <RequireAuth>
                    <EditProduct />
                  </RequireAuth>
                }
              />
              <Route
                path=":id"
                element={
                  <RequireAuth>
                    <ViewProduct />
                  </RequireAuth>
                }
              />
            </Route>

            {/* customers rout */}
            <Route path="customers">
              <Route
                path=""
                element={
                  <RequireAuth>
                    <CustomerList />
                  </RequireAuth>
                }
              />
              <Route
                path="create"
                element={
                  <RequireAuth>
                    <CreateCustomer />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
