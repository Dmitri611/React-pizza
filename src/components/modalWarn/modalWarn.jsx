/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import Modal from "components/modal/modal";
import Button from "components/button/button";
import styles from "./modalWarn.module.scss";

const ModalWarn = ({ display, handler, handlerOk, title }) => {
  return (
    <Modal display={display} content={styles["modal-warn__content"]}>
      <h2 className={styles["modal-warn__title"]}>{title}</h2>
      <div className={styles["modal-warn__bottom"]}>
        <Button handler={handler} className="button--size-m" text="отмена" />
        <Button handler={handlerOk} type="submit" className="button--size-m" text="принять" />
      </div>
    </Modal>
  );
};

ModalWarn.propTypes = {
  display: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

ModalWarn.defaultProps = {
  display: null,
};

export default ModalWarn;
