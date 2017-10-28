import { config } from "../config/config";
import axios from "axios";
import { AUTH_USER, UNAUTH_USER } from "../actions/types";

export const signInUser = ({ email, password }, history) => dispatch => {
  axios
    .post(
      config.API_URL + "/signin",
      {
        email,
        password
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(response => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem("token", response.data.token);
      history.push("/feature");
    })
    .catch();
};
