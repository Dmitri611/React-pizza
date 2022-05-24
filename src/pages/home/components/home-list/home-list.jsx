/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styles from "./home-list.module.scss";

const HomeList = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default HomeList;
