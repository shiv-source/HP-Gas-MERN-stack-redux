import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createForms } from "react-redux-form";
import { InitialFeedback } from "./form";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      ...createForms({
        feedback: InitialFeedback,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
