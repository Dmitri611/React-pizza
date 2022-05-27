/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Modal from "components/modal/modal";
import PropTypes from "prop-types";
import { ReactComponent as Close } from "assets/image/svg/delete.svg";
import Button from "components/button/button";
import Picture from "components/picture/picture";
import Params from "components/params/params";
import realPrice from "components/params/realPrice";
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
  const typesList = ["тонкое", "традиционное"];
  const sizesList = ["26", "30", "36"];
  const [price, setPrice] = useState(pizzaPrice);
  const [activeType, setActiveType] = useState(typesList[0]);
  const [activeSize, setActiveSize] = useState(sizesList[0]);

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
            Пищевая ценность на 100г продукта(26см):
          </span>
          <span>Жиры - {pizzaProteins}г</span>
          <span>Белки - {pizzaFats}г</span>
          <span>Углеводы - {pizzaCarbohydrates}г</span>
          <span>Энергетическая ценность - {pizzaEnergy} ккал.</span>
          <Params
            onChange={(e) => {
              realPrice(e, pizzaPrice, setPrice, price);
            }}
            typeName={`typeinfo-${pizzaName}`}
            sizeName={`sizeinfo-${pizzaName}`}
            typesList={typesList}
            activeType={activeType}
            setActiveType={setActiveType}
            sizesList={sizesList}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
          <div className={styles["modal-product__info-bottom"]}>
            <div className={styles["modal-product__info-total"]}>
              <span className={styles["modal-product__title"]}>{price}р</span>
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
