/* eslint-disable react/prop-types */
import React from "react";
import styles from "./sectionFooter.module.scss";

const SectionFooter = ({ children }) => {
  return <div className={styles.section__footer}>{children}</div>;
};

export default SectionFooter;
