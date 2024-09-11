import React, { useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

interface ApiCurrencyProps {
  onRatesLoaded: (rates: { [key: string]: number }) => void;
}

const ApiCurrency: React.FC<ApiCurrencyProps> = ({ onRatesLoaded }) => {
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
