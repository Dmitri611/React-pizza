import pepperoni from "uploads/pizzas/pepperoni.webp";
import barbecue from "uploads/pizzas/barbecue.webp";
import { ADD_PIZZA, DELETE_PIZZA } from "../constants/constants";

const pizzasState = {
  pizzas: [
    {
      image: pepperoni,
      name: "Пепперони",
      category: "мясная",
      ingredients: "Томатный соус, пикантная пепперони, моцарелла",
      price: 15,
      proteins: 14.42,
      fats: 10.51,
      carbohydrates: 17.22,
      energy: 240.46,
      helf: 575,
    },
    {
      image: barbecue,
      name: "Барбекю",
      category: "мясная",
      ingredients:
        "Острые колбаски чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус",
      price: 17,
      proteins: 12.78,
      fats: 10.88,
      carbohydrates: 20.14,
      energy: 239.42,
      helf: 560,
    },
  ],
};

const pizzasReducer = (state = pizzasState, action) => {
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
