import React from "react";
import Card from "./components/card/card";

const allPizzas = (activeCategory, pizzas, sortValue) => {
  const card = ({
    name,
    ingredients,
    proteins,
    fats,
    carbohydrates,
    energy,
    helf,
    price,
    image,
    id,
  }) => (
    <Card
      key={name}
      pizzaId={id}
      pizzaName={name}
      pizzaDesc={ingredients}
      pizzaProteins={proteins}
      pizzaFats={fats}
      pizzaCarbohydrates={carbohydrates}
      pizzaEnergy={energy}
      pizzaHelf={helf}
      pizzaPrice={price}
      pizzaImage={image}
    />
  );

  const cheapPizzas = (a, b) => a.price - b.price;
  const richPizzas = (a, b) => b.price - a.price;

  const categoryPizzas = pizzas.filter(
    (element) => activeCategory === "Все" || element.category === activeCategory
  );

  switch (sortValue) {
    case "дешёвые":
      return categoryPizzas.sort(cheapPizzas).map((pizza) => card(pizza));
    case "дорогие":
      return categoryPizzas.sort(richPizzas).map((pizza) => card(pizza));
    default:
      return categoryPizzas.map((pizza) => card(pizza));
  }
};

export default allPizzas;
