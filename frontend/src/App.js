import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/layout/Navbar/Navbar";
import WebFont from "webfontloader";
import Footer from "./components/layout/Footer/Footer";
import footerData from "./data/footerData.json";
import "./App.css";

import { loadUser } from "./actions/userAction";
import ElementWithRoutes from "./routes/ElementWithRoutes";
import axios from "axios";

const menuOptions = [
  {
    menuName: "Home",
    path: "/",
  },
  {
    menuName: "Products",
    path: "/products",
  },
  {
    menuName: "About Us",
    path: "/aboutus",
  },
  {
    menuName: "Contact Us",
    path: "/contactus",
  },
];

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");
  const dispatch = useDispatch();

  const { user, isAuthenticated, loading } = useSelector((state) => state.user);

  const getStripeApiKey = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/stripeapikey`
      );
      setStripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error("Error fetching Stripe API Key:", error);
    }
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins", "Roboto"],
      },
    });

    if (isAuthenticated) {
      dispatch(loadUser());
      getStripeApiKey();
    } else {
    }
  }, [dispatch]);

  return (
    <>
      <Navbar webName="E-Commerce" menuOptions={menuOptions} />
      <ElementWithRoutes stripeApiKey={stripeApiKey} />
      <Footer jsonData={footerData} />
    </>
  );
}

export default App;
