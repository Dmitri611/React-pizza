/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { pizzaSelector } from "store/selectors/selectors";
import HomeList from "./components/home-list/home-list";
import Sort from "./components/sort/sort";
import Content from "./components/content/content";
import styles from "./home.module.scss";
import stylesItem from "./components/home-list/home-list.module.scss";
import allPizzas from "./allPizzas";

const Home = () => {
  const categoryList = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Сырные"];
  const [activeCategory, setActiveCategory] = useState(categoryList[0]);
  const pizzas = useSelector(pizzaSelector);

  return (
    <section className={styles.home}>
      <div className={styles.home__navigation}>
        <HomeList>
          {categoryList.map((item) => (
            <li key={item}>
              <label className={stylesItem.list__item}>
                <input
                  className={stylesItem.list__input}
                  name="category"
                  type="radio"
                  defaultChecked={item === activeCategory}
                  onClick={() => setActiveCategory(item)}
                />
                <span className={stylesItem.list__text}>{item}</span>
              </label>
            </li>
          ))}
        </HomeList>
        <Sort />
      </div>
      <Content title={activeCategory}>{allPizzas(activeCategory, pizzas)}</Content>
    </section>
  );
};

export default Home;
