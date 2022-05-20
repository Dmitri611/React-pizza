/* eslint-disable react/prop-types */
import React from "react";
import styles from "./dropdown-item.module.scss";

const DropdownItem = ({ text, handler }) => {
  return (
    <li className={styles.item}>
      <button onClick={handler} className={styles.item__text}>
        {text}
      </button>
    </li>
  );
};

export default DropdownItem;
