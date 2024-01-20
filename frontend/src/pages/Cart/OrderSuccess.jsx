import React from "react";
import { CheckCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="h-full w-full bg-primaryGreen">
      <div className="w-[90%] h-screen mx-auto flex flex-col justify-center items-center gap-5">
        <CheckCircle
          style={{ fontSize: "5rem" }}
          className="text-primaryGreen animate-bounce"
        />

        <p className="text-2xl text-center text-white">
          Your Order has been Placed Successfully
        </p>

        <Link
          className="bg-yellow-400 text-primaryDarkGreen px-10 py-2 hover:scale-105 transition-all duration-500 rounded-md"
          to="/orders/me"
        >
          View Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
