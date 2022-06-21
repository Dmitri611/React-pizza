/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { pizzaSelector } from "store/selectors/selectors";
import Dropdown from "components/dropdown/dropdown";
import DropdownItem from "components/dropdown/dropdown-item/dropdown-item";
import getInfoDB from "getInfoDB";
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

  indexedDB.open("store").onsuccess = (e) => {
    const db = e.target.result
    const result = getInfoDB('pizzas', db);
    console.log(result.result);
  }


  const sortList = ["популярности", "дешёвые", "дорогие"];
  const [sortValue, setSortValue] = useState(sortList[0]);

  const [checked, setChecked] = useState(false);

  const open = () => {
    setChecked(!checked);
  };

  const change = (e) => {
    setSortValue(e.target.innerText);
    setChecked(!checked);
  };

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
          <Dropdown btnContent={sortValue} handler={open} check={checked}>
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
