/* eslint-disable react/prop-types */
import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Button from "components/button/button";
import { useSelector } from "react-redux";
import { basketSelector, promoSelector } from "store/selectors/selectors";
import styles from "./basketBottom.module.scss";

const BasketBottom = ({ totalPrice }) => {
  const basket = useSelector(basketSelector);
  const promos = useSelector(promoSelector);
  const [promo, setPromo] = useState();

  const thisPromo = promos.find((item) => item.code === promo);

  const change = (e) => {
    setPromo(e.target.value);
  };


  return (
      <div className={styles.basket__bottom}>
        <input
          onChange={change}
          value={promo}
          className={styles.basket__bottom_promo}
          type="text"
          placeholder="Промокод"
        />
        <div className={styles.basket__bottom_total}>
          <span>
            Всего пицц: <span className={styles.basket__bottom_span}>{basket.length} шт.</span>
          </span>
          <span>
            Сумма заказа:{" "}
            <span
              className={classNames(
                styles.basket__bottom_span,
                styles["basket__bottom_span--orange"]
              )}
            >
              {`${totalPrice * (thisPromo?thisPromo.discount: 1) } р.`}
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
