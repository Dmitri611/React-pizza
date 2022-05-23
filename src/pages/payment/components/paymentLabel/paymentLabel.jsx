/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./paymentLabel.module.scss";

const PaymentLabel = ({ type, text, name }) => {
  return (
    <label className={styles.label}>
      <input type={type} name={name} />
      {text}
    </label>
  );
};

export default PaymentLabel;
