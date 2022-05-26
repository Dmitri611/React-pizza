/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";
import styles from "./content.module.scss";

const Content = ({ title, children }) => {
  return (
    <div className={styles.content}>
      <h1 className={styles.content__title}>{title} пиццы</h1>
      <div className={styles.content__container}>{children}</div>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Content;
