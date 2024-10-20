import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/">
        ConMoney
      </Link>
      <Link className={styles.link} to="/currencies">
        Посмотреть все курсы валют
      </Link>
    </header>
  );
};

export default Header;
