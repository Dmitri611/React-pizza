/* eslint-disable react/prop-types */
import React from "react";
import Modal from "components/modal/modal";
import { ReactComponent as Close } from "assets/image/svg/delete.svg";
import Button from "components/button/button";
import image from "uploads/pizzas/pepperoni.webp";
import Picture from "components/picture/picture";
import styles from "./modalProduct.module.scss";

const ModalProduct = ({ display, handler }) => {
  return (
    <Modal
      display={display}
      modalName={styles["modal-product"]}
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
          <div className={styles.card__params}>
            <ul className={styles.card__list}>
              <li className={styles["card__list-item"]}>
                <input
                  className={styles["card__list-input"]}
                  type="radio"
                  name="test1"
                  defaultChecked
                />
                <label className={styles["card__list-label"]}>тонкое</label>
              </li>
              <li className="card__list-item">
                <input className={styles["card__list-input"]} type="radio" name="test1" />
                <label className={styles["card__list-label"]}>традиционное</label>
              </li>
            </ul>
            <ul className="card__list">
              <li className="card__list-item">
                <input
                  className={styles["card__list-input"]}
                  type="radio"
                  name="test-size1"
                  defaultChecked
                />
                <label className={styles["card__list-label"]}>26</label>
              </li>
              <li className="card__list-item">
                <input className={styles["card__list-input"]} type="radio" name="test-size1" />
                <label className={styles["card__list-label"]}>30</label>
              </li>
              <li className="card__list-item">
                <input className={styles["card__list-input"]} type="radio" name="test-size1" />
                <label className={styles["card__list-label"]}>36</label>
              </li>
            </ul>
          </div>
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

export default ModalProduct;
