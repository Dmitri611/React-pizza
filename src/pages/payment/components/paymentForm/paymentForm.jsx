/* eslint-disable react/prop-types */
import React from "react";
import styles from "./paymentForm.module.scss";
import Button from "../../../../components/button/button";
import { Link } from "react-router-dom";

const PaymentForm = ({ children }) => {
  return (
    <form className={styles.form} action="#">
      {children}
      <div className={styles.form__bottom}>
        <Link to="/basket">
          <Button className="button--size-m" text="Назад" />
        </Link>
        <Button
          type="submit"
          className="button--size-m"
          text="Подтвердить заказ"
        />
      </div>
    </form>
  );
};

export default PaymentForm;
