/* eslint-disable react/prop-types */
import React from "react";
import Modal from "components/modal/modal";
import PropTypes from "prop-types";
import { ReactComponent as Close } from "assets/image/svg/delete.svg";
import Button from "components/button/button";
import Picture from "components/picture/picture";
import Params from "components/params/params";
import styles from "./modalProduct.module.scss";

const ModalProduct = ({
  display,
  handler,
  pizzaName,
  pizzaDesc,
  pizzaProteins,
  pizzaFats,
  pizzaCarbohydrates,
  pizzaEnergy,
  pizzaHelf,
  pizzaPrice,
  pizzaImage,
  onClick,
}) => {
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
        <Picture wrapper={styles["modal-product__image-wrapper"]} src={pizzaImage} />
        <div className={styles["modal-product__info"]}>
          <h2 className={styles["modal-product__title"]}>{pizzaName}</h2>
          <p>{pizzaDesc}</p>
          <span className={styles["modal-product__callory"]}>
            Пищевая ценность на 100г продукта:
          </span>
          <span>Жиры - {pizzaProteins}г</span>
          <span>Белки - {pizzaFats}г</span>
          <span>Углеводы - {pizzaCarbohydrates}г</span>
          <span>Энергетическая ценность - {pizzaEnergy} ккал.</span>
          <Params typeName="type2" sizeName="size2" />
          <div className={styles["modal-product__info-bottom"]}>
            <div className={styles["modal-product__info-total"]}>
              <span className={styles["modal-product__title"]}>{pizzaPrice}р</span>
              <span>{pizzaHelf} гр</span>
            </div>
            <Button handler={onClick} className="button--default" text="В корзину" />
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
