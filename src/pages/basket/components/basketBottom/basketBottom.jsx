import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Button from "components/button/button";
import styles from "./basketBottom.module.scss";

const BasketBottom = () => {
  return (
    <div className={styles.basket__bottom}>
      <input className={styles.basket__bottom_promo} type="text" placeholder="Промокод" />
      <div className={styles.basket__bottom_total}>
        <span>
          Всего пицц: <span className={styles.basket__bottom_span}>3 шт.</span>
        </span>
        <span>
          Сумма заказа:{" "}
          <span
            className={classNames(
              styles.basket__bottom_span,
              styles["basket__bottom_span--orange"]
            )}
          >
            45 р.
          </span>
        </span>
      </div>
      <div className={styles.basket__bottom_btns}>
        <Link to="/">
          <Button className="button--size-m" text="Назад" />
        </Link>
        <Link to="/basket/payment">
          <Button className="button--default" text="Оплатить сейчас" />
        </Link>
      </div>
    </div>
  );
};

export default BasketBottom;
