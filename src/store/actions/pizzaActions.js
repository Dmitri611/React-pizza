import { ADD_PIZZA, DELETE_PIZZA, UPDATE_PIZZA } from "../constants/constants";

export const addPizzaAction = (date) => {
  return { type: ADD_PIZZA, payload: date };
};

export const delPizzaAction = (date) => {
  return { type: DELETE_PIZZA, payload: date };
};

export const updatePizzaAction = (data) => {
  return { type: UPDATE_PIZZA, payload: data };
};
