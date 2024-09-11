import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import CurrencyList from "./CurrensyList";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/currencies" element={<CurrencyList />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
