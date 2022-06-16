import { ADD_PROMO, DELETE_PROMO, UPDATE_PROMO } from "store/constants/constants";

const promosState = {
  promos: [
    {
      id: 1,
      image: "uploads/promo-codes/bundle.webp",
      code: "1234",
      name: "10% на весь заказ",
      discount: "0.9",
    },
    {
      id: 2,
      image: "uploads/promo-codes/bundle.webp",
      code: "5050",
      name: "-25% на весь заказ",
      discount: "0.75",
    },
  ],
};

const promoReducer = (state = promosState, action) => {
  switch (action.type) {
    case ADD_PROMO:
      return {
        ...state,
        promos: [action.payload, ...state.promos],
      };
    case DELETE_PROMO:
      return {
        ...state,
        promos: [...state.promos].filter((promo) => promo.code !== action.payload.code),
      };
    case UPDATE_PROMO:
      return {
        ...state,
        promos: [...state.promos].map((promo) => {
          if (promo.code === action.payload.code) {
            return action.payload;
          }
          return promo;
        }),
      };
    default:
      return state;
  }
};

export default promoReducer;
