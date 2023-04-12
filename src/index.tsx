import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store";
import App from "./app/App";
import { ApiTokenHandler, OrdersLoader } from "components";
import React from "react";

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    <ApiTokenHandler />
    <OrdersLoader />
  </Provider>
  // </React.StrictMode>
);
