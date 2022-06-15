/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
import React from "react";
import BasketBottom from "pages/basket/components/basketBottom/basketBottom";
import BasketTop from "pages/basket/components/basketTop/basketTop";
import BasketCard from "pages/basket/components/basketCard/basketCard";
import { useSelector } from "react-redux";
import { authSelector, pizzaSelector, userSelector } from "store/selectors/selectors";
import styles from "./basket.module.scss";

const Basket = () => {
  const authUser = useSelector(authSelector);
  const allUsers = useSelector(userSelector);
  const allPizzas = useSelector(pizzaSelector);
  const thisUser = allUsers.find((user) => user.login === authUser.login);
  const getPizzas = [];

  for (const value of thisUser.basket) {
    getPizzas.push(allPizzas.find((item) => item.id === value.idPizza));  
  }


  return (
    <section className={styles.basket}>
      <div className={styles.basket__container}>
        <div className={styles.basket__content}>
          <BasketTop />
          <div className={styles.basket__middle}>
            {getPizzas.map((pizza) => (
              <BasketCard
                key={pizza.id}
                countPizza={1}
                pizzaImg={pizza.image}
                pizzaName={pizza.name}
                pizzaDesc={pizza.ingredients}
                pizzaPrice={`${pizza.price} р.`}
              />
            ))}
          </div>
          <BasketBottom />
        </div>
      </div>
    </section>
  );
};

export default Basket;
