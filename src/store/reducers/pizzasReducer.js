import { ADD_PIZZA, DELETE_PIZZA, UPDATE_PIZZA } from "../constants/constants";

const pizzasState = {
  pizzas: [
    {
      id: 1,
      image: "uploads/pizzas/pepperoni.webp",
      name: "Пепперони",
      category: "Мясные",
      ingredients: "Томатный соус, пикантная пепперони, моцарелла",
      price: 15,
      proteins: 14.42,
      fats: 10.51,
      carbohydrates: 17.22,
      energy: 240.46,
      helf: 575,
    },
    {
      id: 2,
      image: "uploads/pizzas/barbecue.webp",
      name: "Барбекю",
      category: "Гриль",
      ingredients:
        "Острые колбаски чоризо, соус барбекю, томаты, красный лук, моцарелла, томатный соус",
      price: 17,
      proteins: 12.78,
      fats: 10.88,
      carbohydrates: 20.14,
      energy: 239.42,
      helf: 560,
    },
    {
      id: 3,
      image: "uploads/pizzas/vegetables-mushrooms.webp",
      name: "Овощи и грибы",
      category: "Вегетарианские",
      ingredients:
        "Итальянские травы, томатный соус, томаты, кубики брынзы, маслины, красный лук, сладкий перец, моцарелла, шампиньоны",
      price: 14,
      proteins: 9.78,
      fats: 8.94,
      carbohydrates: 15.3,
      energy: 180.1,
      helf: 455,
    },
    {
      id: 4,
      image: "uploads/pizzas/double-pepperoni.webp",
      name: "Двойная пепперони",
      category: "Мясные",
      ingredients: "Томатный соус, пикантная пепперони, моцарелла",
      price: 20,
      proteins: 14.42,
      fats: 10.51,
      carbohydrates: 17.22,
      energy: 240.46,
      helf: 575,
    },
    {
      id: 5,
      image: "uploads/pizzas/cheesy.webp",
      name: "Сырная",
      category: "Сырные",
      ingredients: "Моцарелла, сыры чеддер и пармезан, соус альфредо",
      price: 11,
      proteins: 12.22,
      fats: 9.11,
      carbohydrates: 15.92,
      energy: 300.6,
      helf: 500,
    },
    {
      id: 6,
      image: "uploads/pizzas/carbonara.webp",
      name: "Карбонара",
      category: "Острые",
      ingredients:
        "Бекон, сыры чеддер и пармезан, моцарелла, томаты, соус альфредо, красный лук, чеснок, итальянские травы",
      price: 18,
      proteins: 12.22,
      fats: 9.11,
      carbohydrates: 15.92,
      energy: 300.6,
      helf: 520,
    },
  ],
};

const pizzasReducer = (state = pizzasState, action) => {
  switch (action?.type) {
    case ADD_PIZZA:
      return {
        ...state,
        pizzas: [action.payload, ...state.pizzas],
      };
    case DELETE_PIZZA:
      return {
        ...state,
        pizzas: [...state.pizzas].filter((pizza) => pizza.name !== action.payload.name),
      };
    case UPDATE_PIZZA:
      return {
        ...state,
        pizzas: [...state.pizzas].map((pizza) => {
          if (pizza.id === action.payload.id) {
            return action.payload;
          }
          return pizza;
        }),
      };
    default:
      return state;
  }
};

export default pizzasReducer;
