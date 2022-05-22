/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Button from "../button/button";
import styles from "./dropdown.module.scss";

const Dropdown = ({ children, btnContent }) => {
  const [checked, setChecked] = useState(false);

  const change = () => {
    setChecked(!checked);
  };

  return (
    <div className={styles.dropdown}>
      <Button handler={change} className="button--reset">
        {btnContent}
      </Button>
      <ul
        className={
          checked ? styles.dropdown__content : styles["dropdown__content--none"]
        }
      >
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
