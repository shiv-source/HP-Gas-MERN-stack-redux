import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./form";
import { userLogin } from './reducers/user';
import { composeWithDevTools } from 'redux-devtools-extension';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      userLogin : userLogin,
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    composeWithDevTools( applyMiddleware(thunk, logger),),
   
    
  );

  return store;
};
