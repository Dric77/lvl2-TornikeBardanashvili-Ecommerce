import API from "../../api";
import {
  removeLogedin,
  setErrors,
  setLoader,
  setToken,
  setUser,
} from "./userActionCreators";
import { helpers } from "../../helpers/helpers";

const logInHandler = (action) => (dispatch) => {
  let userInfo = {
    email: action.email,
    password: action.password,
  };
  dispatch(setLoader(true));
  API.authUser("auth/login", "POST", userInfo)
    .then((user) => {
      if (user.user) {
        dispatch(setUser(user.user));
        dispatch(setToken(user.token.access_token));
        localStorage.setItem("userToken", user.token.access_token);
      }
    })
    .catch((errs) => {
      let parsedError = helpers.parseErrors(errs).errors;
      dispatch(setErrors(parsedError));
    })
    .finally(() => dispatch(setLoader(false)));
};

const singupHandler = (action) => (dispatch) => {
  let newUserInfo = {
    name: action.firstName,
    email: action.email,
    password: action.password,
    password_confirmation: action.confirmPassword,
  };
  dispatch(setLoader(true));
  API.authUser("register", "POST", newUserInfo)
    .then((data) => {
      dispatch(setUser(data.user));
    })
    .catch((e) => {
      let parsedError = helpers.parseErrors(e).errors.email;
      dispatch(setErrors(parsedError));
    })
    .finally(() => dispatch(setLoader(false)));
};

const logoutUser = () => (dispatch) => {
  dispatch(removeLogedin());
  localStorage.removeItem("userToken");
};

const getDataWithToken = () => (dispatch) => {
  const accessToken = localStorage.getItem("userToken");
  if (accessToken) {
    dispatch(setLoader(true));
    fetch("http://159.65.126.180/api/auth/me", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.error) {
          localStorage.removeItem("userToken");
        } else {
          console.log('user fro mtoken', user)
          dispatch(setUser(user));
        }
      })
      .catch((e) => console.log("log in error", e))
      .finally(() => setLoader(false));
  }
};

export const updateUserProfileHandler =
  (currentUserId, values) => (dispatch) => {
    API.updateUserProfile(currentUserId, values).then((data) =>
      dispatch(setUser(data))
    );
  };

export { logInHandler, getDataWithToken, singupHandler, logoutUser };
