import { ADD_USER, DELETE_USER } from "../constants/constants";

const usersState = {
  users: [
    {
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
      login: "dima",
      password: "dimadima",
      email: "dima",
      firstName: "Dmitri",
      lastName: "Novikov",
      address: "Vitebsk",
      tel: "+375333910514",
      isAdmin: false,
    },
  ],
};

const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [action.newUser, ...state.users],
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.name !== action.delUser),
      };
    default:
      return state;
  }
};

export default usersReducer;
