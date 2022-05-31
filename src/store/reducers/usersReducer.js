import { ADD_USER, DELETE_USER, UPDATE_USER } from "../constants/constants";

const usersState = {
  users: [
    {
      id: "1",
      login: "admin",
      password: "adminadmin",
      email: "admin",
      firstName: "",
      lastName: "",
      address: "",
      tel: "",
      isAdmin: true,
    },
    {
      id: "2",
      login: "dima",
      password: "dimadima",
      email: "dimkanov543@gmail.com",
      firstName: "Dmitri",
      lastName: "Novikov",
      address: "Московский проспект 70к3",
      tel: "+375333910514",
      isAdmin: false,
    },
  ],
};
// добавить регистрацию!
const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case DELETE_USER:
      return {
        ...state,
        users: [...state.users].filter((user) => user.login !== action.payload.login),
      };
    case UPDATE_USER:
      return {
        ...state,
        users: [...state.users].map((user) => {
          if (user.login === action.payload.login) {
            return action.payload;
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export default usersReducer;
