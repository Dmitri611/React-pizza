import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { pizzaSelector } from "store/selectors/selectors";
import Card from "../card/card";
import styles from "./content.module.scss";

const Content = ({ title }) => {
  const pizzas = useSelector(pizzaSelector);

  return (
    <div className={styles.content}>
      <h1 className={styles.content__title}>{title} пиццы</h1>
      <div className={styles.content__container}>
        {pizzas.map((pizza) => (
          <Card
          key={pizza.name}
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
      </div>
    </div>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Content;
