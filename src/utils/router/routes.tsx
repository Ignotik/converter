import App from "../../App";
import CurrencyList from "../../Components/CurrensyList";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/currencies",
    element: <CurrencyList />,
  },
];
