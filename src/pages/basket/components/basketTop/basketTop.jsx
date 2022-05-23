import React from "react";
import { Link } from "react-router-dom";
import Button from "components/button/button";
import { ReactComponent as BasketSvg } from "assets/image/svg/shopping.svg";
import { ReactComponent as BasketClearSvg } from "assets/image/svg/basket-clear.svg";
import styles from "./basketTop.module.scss";

const BasketTop = () => {
  return (
    <div className={styles.basket__top}>
      <div className={styles.basket__top_left}>
        <BasketSvg />
        <h1>Корзина</h1>
      </div>
      <Link to="/basket-empty">
        <Button className="button--size-m">
          <BasketClearSvg />
          Очистить корзину
        </Button>
      </Link>
    </div>
  );
};

export default BasketTop;
