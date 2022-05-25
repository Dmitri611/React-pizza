import React from "react";
import BasketBottom from "pages/basket/components/basketBottom/basketBottom";
import BasketTop from "pages/basket/components/basketTop/basketTop";
import BasketCard from "pages/basket/components/basketCard/basketCard";
import image from "uploads/pizzas/pepperoni.webp";
import styles from "./basket.module.scss";

const Basket = () => {
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
              pizzaPrice="15 р"
            />
          </div>
          <BasketBottom />
        </div>
      </div>
    </section>
  );
};

export default Basket;
