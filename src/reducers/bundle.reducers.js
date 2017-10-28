import { combineReducers } from "redux";
import { reducer } from "redux-form";
import { authReducer } from "./auth.reducer";

export const reducers = combineReducers({
  form: reducer,
  auth: authReducer
});
