/* eslint-disable react/prop-types */
import React from "react";
import styles from "./tableCardItem.module.scss";

const TableCardItemTh = ({ text }) => {
  return <th className={styles.table__item}>{text}</th>;
};

export default TableCardItemTh;
