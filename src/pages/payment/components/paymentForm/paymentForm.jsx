import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Button from "components/button/button";
import styles from "./paymentForm.module.scss";

const PaymentForm = ({ children }) => {
  return (
    <form className={styles.form} action="#">
      {children}
      <div className={styles.form__bottom}>
        <Link to="/basket">
          <Button className="button--size-m" text="Назад" />
        </Link>
        <Button type="submit" className="button--size-m" text="Подтвердить заказ" />
      </div>
    </form>
  );
};

PaymentForm.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PaymentForm;
