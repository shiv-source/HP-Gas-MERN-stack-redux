import * as ActionTypes from "../ActionTypes";

export const userLogin = (
  state = {
    isLoggedIn: false,
    firstName: "",
    lastName: "",
    email: "",
    _id: "",
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return {
        isLoggedIn: true,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        _id: action.payload._id,
      };

      case ActionTypes.USER_LOGOUT:
        return {
          isLoggedIn: false,
          firstName: "",
          lastName: "",
          email: "",
          _id: "",
        };

    default:
      return state;
  }
};



