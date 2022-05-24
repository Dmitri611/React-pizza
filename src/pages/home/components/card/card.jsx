/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Button from "components/button/button";
import Picture from "components/picture/picture";
import styles from "./card.module.scss";

const Card = ({ image, name, desc, price, handle }) => {
  return (
    <div className={styles.card}>
      <a onClick={handle} href="#">
        <Picture wrapper={styles.card__image_wrapper} className={styles.card__image} src={image} />
        <h2 className={styles.card__name}>{name}</h2>
        <div className={styles.card__ingredients}>
          <p>{desc}</p>
        </div>
      </a>
      <div className={styles.card__params}>
        <ul className={styles.card__list}>
          <li className={styles.card__list_item}>
            <input
              className={styles["card__list-input"]}
              type="radio"
              name="type1"
              defaultChecked
            />
            <label className={styles["card__list-label"]}>тонкое</label>
          </li>
          <li className={styles.card__list_item}>
            <input className={styles["card__list-input"]} type="radio" name="type1" />
            <label className={styles["card__list-label"]}>традиционное</label>
          </li>
        </ul>
        <ul className={styles.card__list}>
          <li className={styles.card__list_item}>
            <input
              className={styles["card__list-input"]}
              type="radio"
              name="size1"
              defaultChecked
            />
            <label className={styles["card__list-label"]}>26</label>
          </li>
          <li className={styles.card__list_item}>
            <input className={styles["card__list-input"]} type="radio" name="size1" />
            <label className={styles["card__list-label"]}>30</label>
          </li>
          <li className={styles.card__list_item}>
            <input className={styles["card__list-input"]} type="radio" name="size1" />
            <label className={styles["card__list-label"]}>36</label>
          </li>
        </ul>
      </div>
      <div className={styles.card__bottom}>
        <span className={styles.card__bottom_price}>От {price}</span>
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
