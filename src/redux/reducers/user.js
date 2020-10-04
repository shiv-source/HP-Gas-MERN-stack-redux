import * as ActionTypes from "../ActionTypes";

export const LoginUser = (
  state = {
    user: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
