/* eslint-disable react/prop-types */
import React from "react";
import styles from "./form-bottom.module.scss";

const FormBottom = ({ children }) => {
  return <div className={styles.bottom}>{children}</div>;
};

export default FormBottom;
