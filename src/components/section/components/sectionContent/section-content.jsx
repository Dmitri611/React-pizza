import React from "react";
import PropTypes from "prop-types";
import styles from "components/section/section.module.scss";

const SectionContent = ({ children }) => {
  return <div className={styles.section__content}>{children}</div>;
};

SectionContent.propTypes = {
  children: PropTypes.array.isRequired,
};

export default SectionContent;
