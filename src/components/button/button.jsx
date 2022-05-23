/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

const Button = ({ text, className, handler, children, type }) => {
  return (
    <button type={type} onClick={handler} className={classNames(styles.button, styles[className])}>
      {text}
      {children}
    </button>
  );
};

export default Button;
