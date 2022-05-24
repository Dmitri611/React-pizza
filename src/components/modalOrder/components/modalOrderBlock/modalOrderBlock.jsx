/* eslint-disable react/prop-types */
import React from "react";
import styles from "./modalOrderBlock.module.scss";

const ModalOrderBlock = ({ title, text, children }) => {
  return (
    <div className={styles.block}>
      <span>{title}</span>
      <h3 className={styles.block__text}>{text}</h3>
      {children}
    </div>
  );
};

export default ModalOrderBlock;
