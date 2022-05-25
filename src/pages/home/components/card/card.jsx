/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import Button from "components/button/button";
import Picture from "components/picture/picture";
import Params from "components/params/params";
import styles from "./card.module.scss";

const Card = ({ image, name, desc, price, handle }) => {
  const [count, setCount] = useState(0);

  const countPlus = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.card}>
      <a onClick={handle} href="#">
        <Picture wrapper={styles.card__image_wrapper} className={styles.card__image} src={image} />
        <h2 className={styles.card__name}>{name}</h2>
        <div className={styles.card__ingredients}>
          <p>{desc}</p>
        </div>
      </a>
      <Params />
      <div className={styles.card__bottom}>
        <span className={styles.card__bottom_price}>От {price}</span>
        <Button handler={countPlus} className="button--product">
          <span className={styles.card__bottom_span}>+</span>
          Добавить
          <span className={styles.card__bottom_span}>{count}</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
