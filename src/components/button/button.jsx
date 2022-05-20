/* eslint-disable react/prop-types */
import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

const Button = ({ text, className, handler, children }) => {
  return (
    <button
      onClick={handler}
      className={classNames(styles.button, styles[className])}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
