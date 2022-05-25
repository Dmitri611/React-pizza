import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import styles from "./section.module.scss";

const Section = ({ children, title, className }) => {
  return (
    <section className={styles.section}>
      <div className={classNames(styles.section__inner, styles[className])}>
        <h1 className={styles.section__title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Section;
