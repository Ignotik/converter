import React from "react";

const defaultValue = ["RUB", "USD", "EURO", "GBP"];

type BlockProps = {
  value: number;
  currency: string;
  onChangeValue: (value: string) => void;
  onChangeCurrency: (currency: string) => void;
};

const Block: React.FC<BlockProps> = ({
  value,
  currency,
  onChangeValue,
  onChangeCurrency,
}) => {
  return (
    <div className="block">
      <ul className="currencies">
        {defaultValue.map((val) => (
          <li
            onClick={() => onChangeCurrency(val)}
            className={currency === val ? "active" : ""}
            key={val}
          >
            {val}
          </li>
        ))}
        <li>
          <svg height="50px" viewBox="0 0 50 50" width="50px">
            <rect fill="none" height="50" width="50" />
            <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
          </svg>
        </li>
      </ul>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        placeholder={0}
      />
    </div>
  );
};

export default Block;
