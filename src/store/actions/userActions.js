import { ADD_USER, DELETE_USER } from "../constants/constants";

export const addUserAction = (date) => {
  return { type: ADD_USER, newUser: date };
};

export const delUserAction = (date) => {
  return { type: DELETE_USER, delUser: date };
};
