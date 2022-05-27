import { UPDATE_AUTH } from "store/constants/constants";

const auth = {
  isAdmin: false,
  isAuth: false,
  login: null,
};

const authReducer = (state = auth, action) => {
  switch (action.type) {
    case UPDATE_AUTH:
      return {
        isAdmin: action.updateAdmin,
        isAuth: action.updateAuth,
        login: action.thisLogin,
      };
    default:
      return state;
  }
};

export default authReducer;
