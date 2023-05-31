import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FlagState from "./FlagState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FlagState>
        <App />
      </FlagState>
    </BrowserRouter>
  </React.StrictMode>
);
