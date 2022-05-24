/* eslint-disable react/prop-types */
import classNames from "classnames";
import React from "react";
import styles from "./modal.module.scss";

const Modal = ({ display, container, content, children, modalName }) => {
  return (
    <div className={classNames(styles.modal, styles[display], modalName)}>
      <div className={classNames(styles.modal__container, container)}>
        <div className={classNames(styles.modal__content, content)}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
