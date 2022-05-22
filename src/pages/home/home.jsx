/* eslint-disable react/prop-types */
import React from "react";
import styles from "./home.module.scss";
import HomeList from "./components/home-list/home-list";
import Sort from "../../pages/home/components/sort/sort";
import Content from "./components/content/content";

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
