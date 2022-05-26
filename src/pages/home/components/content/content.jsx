import PropTypes from "prop-types";
import React, { useState } from "react";
import ModalProduct from "components/modalProduct/modalProduct";
import { useSelector } from "react-redux";
import { pizzaSelector } from "store/selectors/selectors";
import Card from "../card/card";
import styles from "./content.module.scss";

const Content = ({ title }) => {
  const pizzas = useSelector(pizzaSelector);
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
          {pizzas.map((pizza) => (
            <Card
              handler={openModal}
              key={pizza.name}
              image={pizza.image}
              name={pizza.name}
              desc={pizza.ingredients}
              price={pizza.price}
            />
          ))}
        </div>
      </div>
      {pizzas.map((pizza) => (
        <ModalProduct
          key={pizza.name}
          handler={close}
          display={modalAddStyle}
          pizzaName={pizza.name}
          pizzaDesc={pizza.ingredients}
          pizzaProteins={pizza.proteins}
          pizzaFats={pizza.fats}
          pizzaCarbohydrates={pizza.carbohydrates}
          pizzaEnergy={pizza.energy}
          pizzaHelf={pizza.helf}
          pizzaPrice={pizza.price}
          pizzaImage={pizza.image}
        />
      ))}
    </>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Content;
