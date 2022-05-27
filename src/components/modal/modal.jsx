import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import styles from "./modal.module.scss";

const Modal = ({ display, container, content, children }) => {
  return (
    <div className={classNames(styles.modal, styles[display])}>
      <div className={classNames(styles.modal__container, container)}>
        <div className={classNames(styles.modal__content, content)}>{children}</div>
      </div>
    </div>
  );
};

// еще одно any!

Modal.propTypes = {
  display: PropTypes.string,
  container: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.any.isRequired,
};

Modal.defaultProps = {
  display: null,
  container: null,
  content: null,
};

export default Modal;
