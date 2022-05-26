import React from "react";
import Card from "./components/card/card";

const allPizzas = (activeCategory, pizzas) => {
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
  const categoryPizzas = pizzas.filter((element) => element.category === activeCategory);
  switch (categoryPizzas.length > 0) {
    case true:
      return categoryPizzas.map((pizza) => card(pizza));
    default:
      return pizzas.map((pizza) => card(pizza));
  }
};

export default allPizzas;
