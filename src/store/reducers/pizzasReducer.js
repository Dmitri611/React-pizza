import { ADD_PIZZA, DELETE_PIZZA } from "../constants/constants";

const pizzasState = {
  pizzas: [
    {
      image:
        "https://dodopizza-a.akamaihd.net/static/Img/Products/a5d272351fe241b1a90b3e10d2b5e2d0_292x292.jpeg",
      name: "Пепперони",
      category: "мясная",
      ingredients:
        "Итальянские травы, томатный соус, томаты, пикантная пепперони, кубики брынзы, моцарелла, ветчина, шампиньоны",
      price: "15.40",
    },
  ],
};

const pizzasReducer = (action, state = pizzasState) => {
  switch (action?.type) {
    case ADD_PIZZA:
      return {
        ...state,
        pizzas: [action.newPizza, ...state.pizzas],
      };
    case DELETE_PIZZA:
      return {
        ...state,
        pizzas: state.pizzas.filter((pizza) => pizza.name !== action.delPizza),
      };
    default:
      return state;
  }
};

export default pizzasReducer;
