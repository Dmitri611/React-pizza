import { UPDATE_BASKET_ITEM, DELETE_BASKET_ITEM } from "store/constants/constants";

export const delBasketItemAction = (data) => {
  return { type: DELETE_BASKET_ITEM, payload: data };
};

export const updateCountAction = (date) => {
  return { type: UPDATE_BASKET_ITEM, payload: date };
};
