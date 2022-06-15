import {
  ADD_BASKET_ITEM,
  ADD_USER,
  DELETE_BASKET_ITEM,
  DELETE_USER,
  UPDATE_USER,
} from "../constants/constants";

export const addUserAction = (data) => {
  return { type: ADD_USER, payload: data };
};

export const delUserAction = (data) => {
  return { type: DELETE_USER, payload: data };
};

export const updateUserAction = (data) => {
  return { type: UPDATE_USER, payload: data };
};

export const addBasketItemAction = (data) => {
  return { type: ADD_BASKET_ITEM, payload: data };
};

export const delBasketItemAction = (data) => {
  return { type: DELETE_BASKET_ITEM, payload: data };
};
