import React from "react";
import ReactDOM from "react-dom/client";

import BaseRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GlobalStyles from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BaseRoutes />
    <GlobalStyles />
    <ToastContainer />
  </BrowserRouter>
);
