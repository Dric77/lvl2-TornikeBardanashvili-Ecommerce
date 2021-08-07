import { createStore } from "redux";
import logInHandler from "./user-actions";
import { SECCESS_LOGEDIN } from "./reduxTypes";

const initialState = {
  userData: {},
  token: "",
  isLoggedIn: false,
  loading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SECCESS_LOGEDIN:
      return {
        userData: action.payload,
        token: action.payload.token.access_token,
        isLoggedIn: true,
        loading: false,
      };
  }
};

export const store = createStore(user);
