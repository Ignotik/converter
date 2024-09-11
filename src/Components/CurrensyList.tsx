import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <h1>Курсы валют</h1>
      <Link to="/">Назад</Link>
      <ul>
        {Object.keys(rates).map((currency) => (
          <li key={currency}>
            {currency}: {rates[currency].toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyList;
