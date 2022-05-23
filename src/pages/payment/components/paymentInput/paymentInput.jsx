/* eslint-disable react/prop-types */
import classNames from "classnames";
import React from "react";
import styles from "./paymentInput.module.scss";

const PaymentInput = ({ children, type, placeholder, className, name }) => {
  return (
    <>
      <input
        className={classNames(styles.input, styles[className])}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      {children}
    </>
  );
};

export default PaymentInput;
