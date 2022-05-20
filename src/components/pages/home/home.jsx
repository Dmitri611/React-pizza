/* eslint-disable react/prop-types */
import React from "react";
import styles from "./home.module.scss";
import HomeList from "./home-list/home-list";
import Sort from "./sort/sort";
import Content from "./content/content";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.home__navigation}>
        <HomeList />
        <Sort />
      </div>
      <Content />
    </section>
  );
}
