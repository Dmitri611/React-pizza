import React from "react";
import PropTypes from "prop-types";
import styles from "./form.module.scss";

const Form = ({ children }) => {
  return (
    <form className={styles.form} action="#">
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.array,
};

Form.defaultProps = {
  children: null,
};

export default Form;
