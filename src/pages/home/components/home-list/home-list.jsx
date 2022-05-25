import React from "react";
import PropTypes from "prop-types";
import styles from "./home-list.module.scss";

const HomeList = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

HomeList.propTypes = {
  children: PropTypes.array.isRequired,
};

export default HomeList;
