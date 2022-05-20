import React from "react";
import styles from "./header.module.scss";
import Logo from "../logo/logo";
import HeaderList from "./header-list/header-list";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Logo />
          <p className={styles.header__logo_desc}>Живите вкусно!</p>
        </div>
        <HeaderList />
      </div>
    </header>
  );
};

export default Header;
