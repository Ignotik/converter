import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./Components/AppRoutes";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
