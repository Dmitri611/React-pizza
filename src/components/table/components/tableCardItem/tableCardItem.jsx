/* eslint-disable react/prop-types */
import React from "react";
import styles from "./tableCardItem.module.scss";

const TableCardItem = ({ children, text }) => {
  return (
    <td className={styles.table__item}>
      {text}
      {children}
    </td>
  );
};

export default TableCardItem;
