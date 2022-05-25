import React from "react";
import Modal from "components/modal/modal";
import PropTypes from "prop-types";
import { ReactComponent as Close } from "assets/image/svg/delete.svg";
import Button from "components/button/button";
import image from "uploads/pizzas/pepperoni.webp";
import Picture from "components/picture/picture";
import Params from "components/params/params";
import styles from "./modalProduct.module.scss";

const ModalProduct = ({ display, handler }) => {
  return (
    <Modal
      display={display}
      container={styles["modal-product__container"]}
      content={styles["modal-product__content"]}
    >
      <div className={styles["modal-product__head"]}>
        <Button handler={handler} className="button--reset">
          <Close />
        </Button>
      </div>
      <div className={styles["modal-product__body"]}>
        <Picture wrapper={styles["modal-product__image-wrapper"]} src={image} />
        <div className={styles["modal-product__info"]}>
          <h2 className={styles["modal-product__title"]}>Пепперони</h2>
          <p>Томатный соус, пикантная пепперони, моцарелла</p>
          <span className={styles["modal-product__callory"]}>
            Пищевая ценность на 100г продукта:
          </span>
          <span>Жиры - 14,42г</span>
          <span>Белки - 10,51г</span>
          <span>Углеводы - 17,22г</span>
          <span>Энергетическая ценность - 240,46 ккал.</span>
          <Params typeName="type2" sizeName="size2" />
          <div className={styles["modal-product__info-bottom"]}>
            <div className={styles["modal-product__info-total"]}>
              <span className={styles["modal-product__title"]}>10.13р</span>
              <span>575 гр</span>
            </div>
            <Button className="button--default" text="В корзину" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

ModalProduct.propTypes = {
  display: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

ModalProduct.defaultProps = {
  display: null,
};

export default ModalProduct;
