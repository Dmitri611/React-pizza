/* eslint-disable react/prop-types */
import React from "react";
import styles from "../section.module.scss";

const SectionContent = ({ children }) => {
  return <div className={styles.section__content}>{children}</div>;
};

export default SectionContent;
