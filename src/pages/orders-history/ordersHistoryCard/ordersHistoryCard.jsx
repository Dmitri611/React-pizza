/* eslint-disable react/prop-types */
import React from "react";
import Button from "components/button/button";
import classNames from "classnames";
// import { Link } from "react-router-dom";
import styles from "./ordersHistoryCard.module.scss";

const OrdersHistoryCard = ({ date, number, address, children, totalPrice, handler }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__wrapper}>
        <span>{number}</span>
        <h2 className={styles.card__date}>{date}</h2>
      </div>
      <div className={styles.card__wrapper}>
        <span>Адрес</span>
        <h2 className={styles.card__text}>{address}</h2>
      </div>
      <div className={classNames(styles.card__wrapper, styles.card__products)}>{children}</div>
      <div className={classNames(styles.card__wrapper, styles.card__total)}>
        <span className={styles.card__text}>Сумма</span>
        <span className={styles.card__text}>{totalPrice}</span>
      </div>
      <div className={styles.card__bottom}>
        <Button handler={handler} text="подробнее" className="button--size-m" />
        <Button text="повторить" className="button--size-m" />
      </div>
    </div>
  );
};

export default OrdersHistoryCard;
