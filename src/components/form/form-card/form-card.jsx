/* eslint-disable react/prop-types */
import React from "react";
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
}) => {
  return (
    <div className={styles.card}>
      <p>{title}</p>
      <input
        className={styles.card__input}
        type={type}
        placeholder={placeholder}
        minLength={minLength}
        pattern={pattern}
        autoComplete={autoComplete}
        maxLength={maxLength}
      />
      <p className={styles.card__desc}>{description}</p>
    </div>
  );
};

export default FormCard;
