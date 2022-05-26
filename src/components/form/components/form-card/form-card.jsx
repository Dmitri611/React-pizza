/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import styles from "./form-card.module.scss";

const FormCard = ({
  title,
  type,
  placeholder,
  minLength,
  maxLength,
  pattern,
  description,
  autoComplete,
  name,
  onChange,
}) => {
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <input
        name={name}
        className={styles.card__input}
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        pattern={pattern}
        autoComplete={autoComplete}
        maxLength={maxLength}
        onChange={onChange}
      />
      <p className={styles.card__desc}>{description}</p>
    </div>
  );
};

FormCard.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  pattern: PropTypes.string,
  description: PropTypes.string,
  autoComplete: PropTypes.string,
};

FormCard.defaultProps = {
  title: null,
  type: null,
  placeholder: null,
  minLength: null,
  maxLength: null,
  pattern: null,
  description: null,
  autoComplete: null,
};

export default FormCard;
