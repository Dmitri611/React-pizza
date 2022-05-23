/* eslint-disable react/prop-types */
import React from "react";
import styles from "./paymentCard.module.scss";

const PaymentCard = ({ children, text }) => {
  return (
    <>
      <p>{text}</p>
      <div className={styles.card}>{children}</div>
    </>
  );
};

export default PaymentCard;
