// import React from "react";
import App from "./App.js";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
