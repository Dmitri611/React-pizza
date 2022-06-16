import { DECREASE, DELETE_BASKET_ITEM, INCREASE, UPDATE_BASKET_ITEM } from "../constants/constants";

const initialState = {
  basket: [],
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BASKET_ITEM:
      return {
        ...state,
        basket: [...state.basket].filter((item) => item.idPizza !== action.payload),
      };

    case UPDATE_BASKET_ITEM: {
      const UpdateCartItem = (item, pizzaId, quantity) => {
        if (item === undefined) return { idPizza: pizzaId, count: quantity };
        return { idPizza: pizzaId, count: item.count + quantity };
      };

      const UpdateCartItems = (basket, item, itemIndex) => {
        if (itemIndex === -1) return [...basket, item];
        if (item.count === 0)
          return [...basket.slice(0, itemIndex), ...basket.slice(itemIndex + 1)];
        return [...basket.slice(0, itemIndex), item, ...basket.slice(itemIndex + 1)];
      };

      const { basket } = state;
      const itemIdx = [...basket].findIndex(({ idPizza }) => idPizza === action.payload.id);
      const item = basket[itemIdx];

      switch (action.payload.action) {
        case INCREASE: {
          const newItem = UpdateCartItem(item, action.payload.id, +1);
          return {
            ...state,
            basket: UpdateCartItems(basket, newItem, itemIdx),
          };
        }
        case DECREASE: {
          const newItem = UpdateCartItem(item, action.payload.id, -1);
          return {
            ...state,
            basket: UpdateCartItems(basket, newItem, itemIdx),
          };
        }
        default:
          return state;
      }
    }
    default:
      return state;
  }
};

export default basketReducer;
