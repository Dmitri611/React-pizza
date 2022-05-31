import { ADD_PROMO, DELETE_PROMO, UPDATE_PROMO } from "store/constants/constants";

// promo code actions
export const addPromoAction = (date) => {
  return { type: ADD_PROMO, payload: date };
};

export const delPromoAction = (date) => {
  return { type: DELETE_PROMO, payload: date };
};

export const updatePromoAction = (data) => {
  return { type: UPDATE_PROMO, payload: data };
};
