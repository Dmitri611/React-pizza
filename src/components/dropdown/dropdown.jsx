/* eslint-disable react/prop-types */
import React from "react";
import Button from "../button/button";
import styles from "./dropdown.module.scss";

const Dropdown = ({ children, btnContent, handler, check}) => {

  return (
    <div className={styles.dropdown}>
      <Button handler={handler} className="button--reset">
        {btnContent}
      </Button>
      <ul className={check ? styles.dropdown__content : styles["dropdown__content--none"]}>
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
