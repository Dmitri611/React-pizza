/* eslint-disable react/prop-types */
import React from "react";
import Modal from "components/modal/modal";
import Button from "components/button/button";
import styles from "./modalWarn.module.scss";

const ModalWarn = ({ display, handler }) => {
  return (
    <Modal
      display={display}
      modalName={styles["modal-warn"]}
      content={styles["modal-warn__content"]}
    >
      <h2 className={styles["modal-warn__title"]}>Вы уверены что хотите удалить?</h2>
      <div className={styles["modal-warn__bottom"]}>
        <Button handler={handler} className="button--size-m" text="отмена" />
        <Button type="submit" className="button--size-m" text="принять" />
      </div>
    </Modal>
  );
};

export default ModalWarn;
