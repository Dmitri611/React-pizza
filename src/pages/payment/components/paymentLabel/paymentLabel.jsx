import PropTypes from "prop-types";
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

PaymentLabel.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PaymentLabel;
