/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

const Button = ({ text, className, handler, children, type, name }) => {
  return (
    <button
      name={name}
      type={type}
      onClick={handler}
      className={classNames(styles.button, styles[className])}
    >
      {text}
      {children}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  handler: PropTypes.func,
  children: PropTypes.any,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  text: null,
  className: null,
  handler: null,
  children: null,
};

export default Button;
