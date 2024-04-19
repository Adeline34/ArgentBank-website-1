import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client"; // Importez createRoot depuis react-dom/client
import "./src/assets/css/main.css";

// redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./src/reducers";
import { BrowserRouter } from "react-router-dom";
import { getUsers } from "./src/actions/users.action";

const store = configureStore({
  reducer: rootReducer,
  devTools:true,
})

store.dispatch(getUsers());

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
);
