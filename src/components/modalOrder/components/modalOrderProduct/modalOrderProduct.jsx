/* eslint-disable react/prop-types */
import Picture from "components/picture/picture";
import React from "react";
import styles from "./modalOrderProduct.module.scss";

const ModalOrderProduct = ({ src, pizzaName, pizzaDesc, amount, price }) => {
  return (
    <div className={styles.product}>
      <Picture src={src} />
      <div className={styles.product__text}>
        <h3 className={styles.product__desc}>{pizzaName}</h3>
        <span>{pizzaDesc}</span>
      </div>
      <span className={styles.product__desc}>{amount}</span>
      <span className={styles.product__desc}>{price}</span>
    </div>
  );
};

export default ModalOrderProduct;
