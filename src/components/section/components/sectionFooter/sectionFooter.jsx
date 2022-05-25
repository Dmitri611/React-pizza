import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import styles from "./sectionFooter.module.scss";

const SectionFooter = ({ children, className }) => {
  return <div className={classNames(styles.section__footer, styles[className])}>{children}</div>;
};

SectionFooter.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};

SectionFooter.defaultProps = {
  className: null,
};

export default SectionFooter;
