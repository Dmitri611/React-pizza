/* eslint-disable react/prop-types */
import React from "react";
import styles from "./sort.module.scss";

const Sort = ({ children }) => {
  return (
    <div className={styles.sort}>
      <span className="sort__text">Сортировка по:</span>
      {children}
    </div>
  );
};

export default Sort;
