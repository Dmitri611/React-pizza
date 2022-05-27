/* eslint-disable react/prop-types */
import Modal from "components/modal/modal";
import React from "react";
import styles from './modalInfo.module.scss';

const ModalInfo = ({display}) => {
  return(
    <Modal display={display} content={styles["modal-info__content"]}>
      <h2 className={styles["modal-info__title"]}>Сначала пройдите авторизацию!</h2>
    </Modal>
  );
}

export default ModalInfo;
