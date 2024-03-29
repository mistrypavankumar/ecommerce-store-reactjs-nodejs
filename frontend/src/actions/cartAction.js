import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import axios from "axios";

// Add to cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/v1/product/${id}`
  );

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url, // needt to change image to images
      stock: data.product.stock,
      quantity,
    },
  });

  //   storing added cart items into localstorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// remove item from cart

export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: REMOVE_CART_ITEM, payload: id });

  //   storing added cart items into localstorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// Save shipping info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  // Saving into local storage
  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
