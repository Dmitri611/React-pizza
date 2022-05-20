/* eslint-disable react/prop-types */
import classNames from "classnames";
import React from "react";
import styles from "./section.module.scss";

const Section = ({children, title}) => {
  return (
    <section className={styles.section}>
      <div className={classNames(styles.section__inner, styles['section__inner--size-m'])}>
        <h1 className={styles.section__title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Section;
