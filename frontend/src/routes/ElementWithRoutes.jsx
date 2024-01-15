import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart/Cart";
import Shipping from "../pages/Cart/Shipping";
import ContactUs from "../pages/ContactUs";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import ProductDetails from "../pages/Product/ProductDetails";
import Products from "../pages/Product/Products";
import SearchProducts from "../pages/Product/SearchProducts";
import ForgotPassword from "../pages/User/ForgotPassword";
import LoginSignUp from "../pages/User/LoginSignUp";
import Profile from "../pages/User/Profile";
import ResetPassword from "../pages/User/ResetPassword";
import UpdatePassword from "../pages/User/UpdatePassword";
import UpdateProfile from "../pages/User/UpdateProfile";
import ConfrimOrder from "../pages/Cart/ConfirmOrder";
import Payment from "../pages/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "../pages/Cart/OrderSuccess";
import MyOrders from "../pages/Cart/MyOrders";
import OrderDetails from "../pages/Cart/OrderDetails";
import Dashboard from "../pages/admin/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import AdminProtectedRoute from "./AdminProtectedRoute";
import ProductList from "../pages/admin/ProductList";
import CreateNewProduct from "../pages/admin/CreateNewProduct";
import UpdateProduct from "../pages/admin/UpdateProduct";
import OrdersList from "../pages/admin/OrdersList";
import ProcessOrder from "../pages/admin/ProcessOrder";
import UserList from "../pages/admin/UserList";
import UpdateUser from "../pages/admin/UpdateUser";
import ProductReviews from "../pages/admin/ProductReviews";
// import { useSelector } from "react-redux";

const ElementWithRoutes = ({ stripeApiKey }) => {
  // const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/search" element={<SearchProducts />} />

        {/* When user get logged in*/}
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route exact path="/account" element={<Profile />} />
          <Route exact path="/update" element={<UpdateProfile />} />
          <Route exact path="/password/update" element={<UpdatePassword />} />
          <Route exact path="/login/shipping" element={<Shipping />} />
          <Route exact path="/success" element={<OrderSuccess />} />
          <Route
            exact
            path="/process/payment/*"
            element={
              stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <Routes>
                    <Route path="/" element={<Payment />} />
                  </Routes>
                </Elements>
              )
            }
          />
          <Route path="/orders/me" element={<MyOrders />} />
          <Route exact path="/order/confirm" element={<ConfrimOrder />} />
          <Route path="/order/:id" element={<OrderDetails />} />
        </Route>

        {/* When admin is logged in */}
        <Route exact path="/" element={<AdminProtectedRoute />}>
          <Route exact path="/admin/dashboard" element={<Dashboard />} />
          <Route exact path="/admin/products" element={<ProductList />} />
          <Route exact path="/admin/product" element={<CreateNewProduct />} />
          <Route exact path="/admin/product/:id" element={<UpdateProduct />} />
          <Route exact path="/admin/orders" element={<OrdersList />} />
          <Route exact path="/admin/order/:id" element={<ProcessOrder />} />
          <Route exact path="/admin/users" element={<UserList />} />
          <Route exact path="/admin/user/:id" element={<UpdateUser />} />
          <Route exact path="/admin/reviews" element={<ProductReviews />} />
        </Route>

        <Route exact path="/login" element={<LoginSignUp />} />
        <Route exact path="/password/forgot" element={<ForgotPassword />} />
        <Route
          exact
          path="/password/reset/:token"
          element={<ResetPassword />}
        />
        <Route exact path="/cart" element={<Cart />} />

        {/* If router is not specified then show below page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default ElementWithRoutes;
