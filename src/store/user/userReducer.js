import {
  FEILD_LOGEDIN,
  LOGOUT_USER,
  SECCESS_LOGEDIN,
  SECCESS_RELOAD_LOGEDIN,
  SECCESS_SINGNUP,
  START_LOADER,
} from "./reduxTypes";

const initialState = {
  userData: {},
  token: "",
  isLoggedIn: false,
  loading: false,
  errs: [],
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SECCESS_LOGEDIN:
      return {
        ...state,
        userData: action.userData,
        token: action.token,
        isLoggedIn: true,
        loading: false,
      };
    case SECCESS_RELOAD_LOGEDIN:
      return {
        ...state,
        userData: action.userData,
        isLoggedIn: true,
        loading: false,
      };
    case SECCESS_SINGNUP:
      return {
        ...state,
        userData: action.userData,
        token: action.token,
        loading: false,
      };
    case FEILD_LOGEDIN:
      return {
        ...state,
        errs: action.errors,
      };
    case LOGOUT_USER:
      return {
        userData: {},
        token: "",
        isLoggedIn: false,
        loading: false,
        errs: [],
      };
    case START_LOADER:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
