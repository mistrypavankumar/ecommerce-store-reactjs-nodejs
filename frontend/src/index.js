import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

ReactDOM.render(
  <ReduxProvider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AlertProvider>
  </ReduxProvider>,
  document.getElementById("root")
);
