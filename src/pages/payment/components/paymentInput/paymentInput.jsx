import PropTypes from 'prop-types';
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

PaymentInput.propTypes = {
  children: PropTypes.object,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
}

PaymentInput.defaultProps = {
  children: null,
  className: null,
  placeholder: null,
}

export default PaymentInput;
