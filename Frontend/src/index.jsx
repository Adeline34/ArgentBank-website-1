import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client"; // Importez createRoot depuis react-dom/client
import "./assets/css/main.css";

// redux
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"
import { getUsersLogin } from "./actions/users.action";

const store = configureStore({
  reducer: rootReducer,
  devtools: true,
});

store.dispatch(getUsersLogin());

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
);
