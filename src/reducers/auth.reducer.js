import { AUTH_USER, UNAUTH_USER } from "../actions/types";

const initialState = {
  authorized: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authorized: true };
    case UNAUTH_USER:
      return { ...state, authorized: false };
    default:
      return state;
  }
};
