/* eslint-disable react/prop-types */
import React from "react";
import Button from "components/button/button";
import { ReactComponent as DeleteSvg } from "assets/image/svg/delete.svg";
import styles from "./basketCard.module.scss";

const BasketCard = ({ pizzaImg, pizzaName, pizzaDesc, amount, pizzaPrice }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__product}>
        <picture>
          <img className={styles.card__product_image} src={pizzaImg} alt="pizza" />
        </picture>
        <div className={styles.card__product_text}>
          <p className={styles.card__product_heading}>{pizzaName}</p>
          <p className={styles.card__product_desc}>{pizzaDesc}</p>
        </div>
      </div>
      <div className={styles.card__quantity}>
        <Button className="button--size-s" text="−" />
        <input
          className={styles.card__quantity_number}
          type="number"
          min="1"
          max="99"
          size="1"
          value={amount}
        />
        <Button className="button--size-s" text="+" />
      </div>
      <p className={styles.card__price}>{pizzaPrice}</p>
      <Button className="button--edit">
        <DeleteSvg />
      </Button>
    </div>
  );
};

export default BasketCard;
