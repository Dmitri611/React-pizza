import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer-list.module.scss";

const FooterList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <Link to="/" className={styles.list__text}>
          О Нас
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link to="/" className={styles.list__text}>
          Оставить отзыв
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link to="/" className={styles.list__text}>
          Работа у нас
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link to="/" className={styles.list__text}>
          Акции
        </Link>
      </li>
      <li className={styles.list__item}>
        <Link to="/" className={styles.list__text}>
          Контакты
        </Link>
      </li>
    </ul>
  );
};

export default FooterList;
