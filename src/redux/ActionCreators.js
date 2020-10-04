import * as ActionTypes from "./ActionTypes";
import axios from "axios";
import { apiURL } from "../config/url.config";
import jwt from "jsonwebtoken";

export const postLoginUser = (credential) => (dispatch) => {
  axios.post(apiURL + "api/login", credential).then((res) => {
    if (res.status === 200) {
      let token = res.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      let decoded = jwt.decode(token);
      let user = {
    
        firstName : decoded.firstName,
        lastName : decoded.lastName,
        email : decoded.email,
        _id : decoded._id
      }
      dispatch(addUser(user))

    }

  });
};

export const addUser = (user) => ({
  type: ActionTypes.USER_LOGIN,
  payload: user,
});
