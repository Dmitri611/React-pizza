import React from "react";
import styles from "./basketEmpty.module.scss";
import Button from "../../../../components/button/button";
import { ReactComponent as SmileSvg } from "../../../../assets/image/svg/smile.svg";
import empty from "../../../../assets/image/jpg/empty-basket.jpg";
import { Link } from "react-router-dom";

export default function BasketEmpty() {
  return (
    <section className={styles.basket}>
      <div className={styles.basket__container}>
        <div className={styles.basket__content}>
          <div className={styles.basket__heading}>
            <h1 className={styles.basket__title}>Корзина пустая</h1>
            <SmileSvg />
          </div>
          <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
          <picture>
            <img className={styles.basket__img} src={empty} alt="img" />
          </picture>
          <Link to="/">
            <Button text="Назад" className="button--size-m" />
          </Link>
        </div>
      </div>
    </section>
  );
}
