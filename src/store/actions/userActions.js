import { ADD_USER, DELETE_USER, UPDATE_USER } from "../constants/constants";

export const addUserAction = (data) => {
  return { type: ADD_USER, payload: data };
};

export const delUserAction = (data) => {
  return { type: DELETE_USER, payload: data };
};

export const updateUserAction = (data) => {
  return { type: UPDATE_USER, payload: data };
};
