import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client"; // Importez createRoot depuis react-dom/client
import "./assets/css/main.css";

// redux

import { BrowserRouter } from "react-router-dom";


const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
);