import React from "react";
import Modal from "components/modal/modal";
import Button from "components/button/button";
import { ReactComponent as Close } from "assets/image/svg/delete.svg";
import Form from "components/form/form";
import PropTypes from "prop-types";

import styles from "./modalEdit.module.scss";

const ModalEdit = ({ display, handler, title, children }) => {
  return (
    <Modal
      display={display}
      container={styles["modal-edit__container"]}
      content={styles["modal-edit__content"]}
    >
      <div className={styles["modal-edit__head"]}>
        <h2 className={styles["modal-edit__title"]}>{title}</h2>
        <Button handler={handler} className="button--reset">
          <Close />
        </Button>
      </div>
      <Form>{children}</Form>
    </Modal>
  );
};

ModalEdit.propTypes = {
  display: PropTypes.string,
  handler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

ModalEdit.defaultProps = {
  display: null,
};

export default ModalEdit;
