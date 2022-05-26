import React from "react";
import Card from "./components/card/card";

const allPizzas = (activeCategory, pizzas, sortValue) => {
  const card = (pizza) => {
    return (
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
    );
  };

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
