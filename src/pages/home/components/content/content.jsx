import React from "react";
import Card from "../card/card";
import styles from "./content.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.content__title}>Все пиццы</h1>
      <div className={styles.content__container}>
        <Card />
      </div>
    </div>
  );
};

export default Content;
