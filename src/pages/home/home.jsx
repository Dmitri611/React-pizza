/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { pizzaSelector } from "store/selectors/selectors";
import Dropdown from "components/dropdown/dropdown";
import DropdownItem from "components/dropdown/dropdown-item/dropdown-item";
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

  const sortList = ["популярности", "дешёвые", "дорогие"];
  const [sortValue, setSortValue] = useState(sortList[0]);

  const change = (e) => {
    setSortValue(e.target.innerText);
  };

  // при клике на кнопку добавить показывает модалку авторизации || navigate
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
        <Sort>
          <Dropdown btnContent={sortValue}>
            {sortList.map((item) => (
              <DropdownItem key={item} handler={change} text={item} />
            ))}
          </Dropdown>
        </Sort>
      </div>
      <Content title={activeCategory}>{allPizzas(activeCategory, pizzas, sortValue)}</Content>
    </section>
  );
};

export default Home;
