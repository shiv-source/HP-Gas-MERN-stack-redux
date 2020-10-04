import * as ActionTypes from "./ActionTypes";
import axios from "axios";
import { apiURL } from "../config/url.config";




export const postLoginUser = (credential) => (dispatch) => {
  axios.post(apiURL + 'api/login' , credential).then((res) => {
    console.log(res);
   
    // history.push('/dashboard');
  });
};

// export const addUser = (user) => ({
//   type: ActionTypes.ADD_DISHES,
//   payload: user,
// });
