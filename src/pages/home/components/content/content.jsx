/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ModalProduct from "components/modalProduct/modalProduct";
import image from "uploads/pizzas/pepperoni.webp";
import Card from "../card/card";
import styles from "./content.module.scss";

const Content = ({ title }) => {
  const [modalAddStyle, setModalAddStyle] = useState(null);

  const style = "modal-display";

  const openModal = () => {
    setModalAddStyle(style);
  };

  const close = () => {
    setModalAddStyle(null);
  };

  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.content__title}>{title} пиццы</h1>
        <div className={styles.content__container}>
          <Card
            handle={openModal}
            image={image}
            name="Пепперони"
            desc="Томатный соус, пикантная пепперони, моцарелла"
            price="10.13р"
          />
        </div>
      </div>
      <ModalProduct handler={close} display={modalAddStyle} />
    </>
  );
};

export default Content;
