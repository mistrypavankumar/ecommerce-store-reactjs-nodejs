import React, { useState } from "react";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";
import { Dashboard, Person, ExitToApp, ListAlt } from "@material-ui/icons";
import store from "./../../../store";
import { useAlert } from "react-alert";
import { logout } from "../../../actions/userAction";
import { Backdrop } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";

const UserOptions = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const alert = useAlert();

  const [open, setOpen] = useState(false);

  const dashboard = () => {
    navigate("/admin/dashboard");
  };

  const account = () => {
    navigate("/account");
  };

  const cart = () => {
    navigate("/cart");
  };

  const orders = () => {
    navigate("/orders/me");
  };

  const logoutUser = () => {
    store.dispatch(logout());

    alert.success("Logout Successfully");
  };

  const options = [
    {
      icon: <Person />,
      name: "Profile",
      func: account,
    },

    {
      icon: (
        <ShoppingCart
          style={{ color: cartItems.length > 0 ? "#14cddb" : "unset" }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },

    {
      icon: <ListAlt />,
      name: "Orders",
      func: orders,
    },

    {
      icon: <ExitToApp />,
      name: "Logout",
      func: logoutUser,
    },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <Dashboard />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  return (
    <>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        className="h-0"
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="down"
        icon={
          <img
            className="w-full object-cover rounded-full"
            src={user.avatar.url ? user.avatar.url : "/profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((option, id) => {
          return (
            <SpeedDialAction
              key={id}
              icon={option.icon}
              tooltipTitle={option.name}
              onClick={option.func}
              tooltipOpen={window.innerWidth <= 600 ? true : false}
            />
          );
        })}
      </SpeedDial>
    </>
  );
};

export default UserOptions;
