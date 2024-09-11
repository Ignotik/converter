import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiCurrency: React.FC = ({ onRatesLoaded }) => {
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        onRatesLoaded(response.data.rates);
      })
      .catch((error) => {
        console.error("Error fetching exchange rates:", error);
      });
  }, [onRatesLoaded]);

  return null;
};

export default ApiCurrency;
