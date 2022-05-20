import React from "react";
import styles from "./footer-list.module.scss";

const FooterList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles["list__item"]}>
        <a href="#" className={styles.list__text}>
          О Нас
        </a>
      </li>
      <li className={styles.list__item}>
        <a href="#" className={styles.list__text}>
          Оставить отзыв
        </a>
      </li>
      <li className={styles.list__item}>
        <a href="#" className={styles.list__text}>
          Работа у нас
        </a>
      </li>
      <li className={styles.list__item}>
        <a href="#" className={styles.list__text}>
          Акции
        </a>
      </li>
      <li className={styles.list__item}>
        <a href="#" className={styles.list__text}>
          Контакты
        </a>
      </li>
    </ul>
  );
};

export default FooterList;
