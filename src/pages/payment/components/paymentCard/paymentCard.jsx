import PropTypes from "prop-types";
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

PaymentCard.propTypes = {
  children: PropTypes.any.isRequired,
  text: PropTypes.string,
};

PaymentCard.defaultProps = {
  text: null,
};

export default PaymentCard;
