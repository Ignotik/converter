import React from "react";
import "./index.scss";
import Block from "./Components/Block";

const App: React.FC = () => {
  return (
    <div className="App">
      <Block value={0} currency="RUB" />
      <Block value={0} currency="USD" />
    </div>
  );
};

export default App;
