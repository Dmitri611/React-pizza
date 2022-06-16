/* eslint-disable import/prefer-default-export */
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import pizzasReducer from "./reducers/pizzasReducer";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import promoReducer from "./reducers/promoReducer";
import basketReducer from "./reducers/basketReducer";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  users: usersReducer,
  auth: authReducer,
  promos: promoReducer,
  basket: basketReducer,
});

export const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
