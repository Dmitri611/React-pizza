/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styles from "./form-bottom.module.scss";

const FormBottom = ({ children }) => {
  return <div className={styles.bottom}>{children}</div>;
};

FormBottom.propTypes = {
  children: PropTypes.array,
};

FormBottom.defaultProps = {
  children: null,
};

export default FormBottom;
