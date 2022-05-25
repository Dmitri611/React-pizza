import React from "react";
import PropTypes from "prop-types";
import styles from "./modalOrderBlock.module.scss";

const ModalOrderBlock = ({ title, text, children }) => {
  return (
    <div className={styles.block}>
      <span>{title}</span>
      <h3 className={styles.block__text}>{text}</h3>
      {children}
    </div>
  );
};

ModalOrderBlock.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.object,
};

ModalOrderBlock.defaultProps = {
  text: null,
  children: null,
};

export default ModalOrderBlock;
