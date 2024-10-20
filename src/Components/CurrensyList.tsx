import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.exchangerate-api.com/v4/latest/USD";

const CurrencyList: React.FC = () => {
  const [rates, setRates] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setRates(response.data.rates);
      })
      .catch((error) => {
        console.error("Error fetching exchange rates:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Курсы валют</h1>
      <ul>
        {Object.keys(rates).map((currency) => (
          <li className="list" key={currency}>
            {currency}: {rates[currency].toFixed(2)} к 1.00 USD
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyList;
