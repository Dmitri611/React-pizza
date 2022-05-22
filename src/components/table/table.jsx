/* eslint-disable react/prop-types */
import React from "react";
import styles from "./table.module.scss";

const Table = ({ children }) => {
  return (
    <table className={styles.table}>
      <tbody className={styles.table__content}>{children}</tbody>
    </table>
  );
};

export default Table;
