import API from "../api";
import { SECCESS_LOGEDIN } from "./reduxTypes";

const userSeccessLogedIn = (userData) => {
  return {
    type: SECCESS_LOGEDIN,
    payload: userData,
  };
};

const logInHandler = (action, state) => {
  return (dispatch) => {
    let userInfo = {
      email: action.email,
      password: action.password,
    };
    API.authUser("auth/login", "POST", userInfo).then((user) => {
      if (user.user) {
        dispatch(userSeccessLogedIn(user));
      }
    });
  };
};

export default logInHandler;
