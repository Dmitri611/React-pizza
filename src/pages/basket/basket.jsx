import React from "react";
import styles from "./basket.module.scss";
import BasketBottom from "./components/basketBottom/basketBottom";
import BasketTop from "./components/basketTop/basketTop";
import BasketCard from "./components/basketCard/basketCard";
import image from "../../uploads/pizzas/pepperoni.webp";

export default function Basket() {
  return (
    <section className={styles.basket}>
      <div className={styles.basket__container}>
        <div className={styles.basket__content}>
          <BasketTop />
          <div className={styles.basket__middle}>
            <BasketCard
              pizzaImg={image}
              pizzaName="Пепперони"
              pizzaDesc="тонкое тесто, 26 см."
              amount="1"
              pizzaPrice="15 р"
            />
          </div>
          <BasketBottom />
        </div>
      </div>
    </section>
  );
}
