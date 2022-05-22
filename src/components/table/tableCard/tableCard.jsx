/* eslint-disable react/prop-types */
import React from "react";
import styles from "./tableCard.module.scss";

const TableCard = ({ children }) => {
  return <tr className={styles.table__card}>{children}</tr>;
};

export default TableCard;
