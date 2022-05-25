/* eslint-disable import/prefer-default-export */
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import pizzasReducer from "./reducers/pizzasReducer";
import usersReducer from "./reducers/usersReducer";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  users: usersReducer,
});

export const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
