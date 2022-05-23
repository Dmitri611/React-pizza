/* eslint-disable react/prop-types */
import classNames from "classnames";
import React from "react";
import styles from "./sectionFooter.module.scss";

const SectionFooter = ({ children, className }) => {
  return <div className={classNames(styles.section__footer, styles[className])}>{children}</div>;
};

export default SectionFooter;
