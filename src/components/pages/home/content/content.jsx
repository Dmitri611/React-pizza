import React from "react";
import styles from "./content.module.scss";
import Card from "../card/card";

export default function Content() {
  return (
    <div className={styles.content}>
      <h1 className={styles.content__title}>Все пиццы</h1>
      <div className={styles.content__container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
