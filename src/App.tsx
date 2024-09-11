import React, { useEffect, useState } from "react";
import ApiCurrency from "./Components/ApiCurrency";
import { Link } from "react-router-dom";
import "./index.scss";
import { saveTransactions, getTransactions } from "./utils/LocalStorage";

export interface Transaction {
  from: string;
  to: string;
  amount: number;
  convertedAmount: number;
  description: string;
  date: Date;
}

const App: React.FC = () => {
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>(
    getTransactions()
  );
  const [description, setDescription] = useState<string>("");
  const [transactionDate, setTransactionDate] = useState<Date>(new Date());

  useEffect(() => {
    saveTransactions(transactions);
  }, [transactions]);

  const convertCurrency = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const result = amount * (rates[toCurrency] / rates[fromCurrency]);
      setConvertedAmount(result);

      const newTransaction: Transaction = {
        from: fromCurrency,
        to: toCurrency,
        amount,
        convertedAmount: result,
        description,
        date: transactionDate,
      };

      setTransactions((prevTransactions) => [
        ...prevTransactions,
        newTransaction,
      ]);
    }
  };

  return (
    <div className="container">
      <h1>Кошелёк обменник</h1>

      <ApiCurrency onRatesLoaded={setRates} />

      <div className="section">
        <h2>Обменять валюту</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span> to </span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button onClick={convertCurrency}>Convert</button>
      </div>

      {convertedAmount > 0 && (
        <div className="section">
          <h2>Converted Amount</h2>
          <p>
            {convertedAmount.toFixed(2)} {toCurrency}
          </p>
        </div>
      )}

      <div className="section">
        <h2>Добавить транзакцию</h2>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="date"
          value={transactionDate.toISOString().substring(0, 10)}
          onChange={(e) => setTransactionDate(new Date(e.target.value))}
        />
      </div>

      <div className="section">
        <h2>История транзакций</h2>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.amount} {transaction.from} -{" "}
              {transaction.convertedAmount.toFixed(2)} {transaction.to}
              <br />
              {transaction.description} - {transaction.date.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <Link to="/currencies">Посмотреть все курсы валют</Link>
      </div>
    </div>
  );
};

export default App;
