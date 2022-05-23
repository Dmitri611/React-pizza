/* eslint-disable react/prop-types */
import React from "react";
import HomeList from "./components/home-list/home-list";
import Sort from "./components/sort/sort";
import Content from "./components/content/content";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.home__navigation}>
        <HomeList />
        <Sort />
      </div>
      <Content />
    </section>
  );
};

export default Home;
