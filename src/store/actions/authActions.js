/* eslint-disable import/prefer-default-export */
import { UPDATE_AUTH } from "store/constants/constants";

export const updateAuthAction = (date, date1, login) => {
  return { type: UPDATE_AUTH, updateAdmin: date, updateAuth: date1, thisLogin: login };
};
