/* eslint-disable react/prop-types */
import React from "react";
import styles from "./form.module.scss";

const Form = ({ children }) => {
  return (
    <form className={styles.form} action="#">
      {children}
    </form>
  );
};

export default Form;
