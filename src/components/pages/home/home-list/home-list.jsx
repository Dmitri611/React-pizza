import React, { useState } from "react";
import styles from "./home-list.module.scss";

const HomeList = () => {

  const categoryList = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeCategory, setActiveCategory] = useState(categoryList[0]);


  return (
    <ul className={styles.list}>
      {categoryList.map((item) =>  (
      <li key={item}>
        <label className={styles.list__item}>
          <input
            className={styles.list__input}
            name="category"
            type="radio"
            checked={item === activeCategory}
            onClick={()=> setActiveCategory(item)}
          />
          <span className={styles.list__text}>{item}</span>
        </label>
      </li>
    )
  )}
    </ul>
  );
};

export default HomeList;
