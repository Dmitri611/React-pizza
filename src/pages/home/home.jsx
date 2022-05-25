/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import HomeList from "./components/home-list/home-list";
import Sort from "./components/sort/sort";
import Content from "./components/content/content";
import styles from "./home.module.scss";
import stylesItem from "./components/home-list/home-list.module.scss";

const Home = () => {
  const categoryList = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];

  const [activeCategory, setActiveCategory] = useState(categoryList[0]);

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
      <Content title={activeCategory} />
    </section>
  );
};

export default Home;
