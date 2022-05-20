import React from "react";
import styles from "./card.module.scss";
import Button from "../../../button/button";

import image from "../../../../uploads/pizzas/pepperoni.webp";

const Card = () => {
  return (
    <div className={styles.card}>
      <picture className={styles.card__image_wrapper}>
        <img className={styles.card__image} src={image} alt="pizza" />
      </picture>
      <h2 className={styles.card__name}>Пепперони</h2>
      <div className={styles.card__ingredients}>
        <p>Томатный соус, пикантная пепперони, моцарелла</p>
      </div>
      <div className={styles.card__params}>
        <ul className={styles.card__list}>
          <li className={styles.card__list_item}>
            <input
              className={styles["card__list-input"]}
              type="radio"
              name="type1"
              defaultChecked="true"
            />
            <label className={styles["card__list-label"]}>тонкое</label>
          </li>
          <li className={styles.card__list_item}>
            <input
              className={styles["card__list-input"]}
              type="radio"
              name="type1"
            />
            <label className={styles["card__list-label"]}>традиционное</label>
          </li>
        </ul>
        <ul className={styles.card__list}>
          <li className={styles.card__list_item}>
            <input
              className={styles["card__list-input"]}
              type="radio"
              name="size1"
              defaultChecked="true"
            />
            <label className={styles["card__list-label"]}>26</label>
          </li>
          <li className={styles.card__list_item}>
            <input
              className={styles["card__list-input"]}
              type="radio"
              name="size1"
            />
            <label className={styles["card__list-label"]}>30</label>
          </li>
          <li className={styles.card__list_item}>
            <input
              className={styles["card__list-input"]}
              type="radio"
              name="size1"
            />
            <label className={styles["card__list-label"]}>36</label>
          </li>
        </ul>
      </div>
      <div className={styles.card__bottom}>
        <span className={styles.card__bottom_price}>От 10.13р</span>
        <Button className="button--product">
          <span className={styles.card__bottom_span}>+</span>
          Добавить
          <span className={styles.card__bottom_span}>0</span>
        </Button>
      </div>
    </div>
  );
};

export default Card;
