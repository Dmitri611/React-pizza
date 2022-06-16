/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
import React from "react";
import BasketBottom from "pages/basket/components/basketBottom/basketBottom";
import BasketTop from "pages/basket/components/basketTop/basketTop";
import BasketCard from "pages/basket/components/basketCard/basketCard";
import { useDispatch, useSelector } from "react-redux";
import { basketSelector, pizzaSelector } from "store/selectors/selectors";
import { delBasketItemAction, updateCountAction } from "store/actions/basketActions";
import { DECREASE, INCREASE } from "store/constants/constants";
import styles from "./basket.module.scss";
import BasketEmpty from "./components/basketEmpty/basketEmpty";

const Basket = () => {
  const allPizzas = useSelector(pizzaSelector);
  const dispatch = useDispatch();
  const getPizzas = [];
  const basket = useSelector(basketSelector);

  for (const value of basket) {
    getPizzas.push({ ...allPizzas.find((item) => item.id === value.idPizza), count: value.count });
  }

  const totalPriceArray = getPizzas.map((item) => item.price * item.count);
  const totalPrice = totalPriceArray.reduce(function (sum, elem) {
    return sum + elem;
  }, 0);

  return basket.length > 0 ? (
    <section className={styles.basket}>
      <div className={styles.basket__container}>
        <div className={styles.basket__content}>
          <BasketTop />
          <div className={styles.basket__middle}>
            {getPizzas.map((pizza) => (
              <BasketCard
                key={pizza.id}
                countPlus={() => dispatch(updateCountAction({ id: pizza.id, action: INCREASE }))}
                countMinus={() => dispatch(updateCountAction({ id: pizza.id, action: DECREASE }))}
                countPizza={pizza.count}
                pizzaImg={pizza.image}
                pizzaName={pizza.name}
                pizzaDesc={pizza.ingredients}
                pizzaPrice={`${pizza.price * pizza.count} р.`}
                delClick={() => dispatch(delBasketItemAction(pizza.id))}
              />
            ))}
          </div>
          <BasketBottom totalPrice={totalPrice} />
        </div>
      </div>
    </section>
  ) : (
    <BasketEmpty />
  );
};

export default Basket;
