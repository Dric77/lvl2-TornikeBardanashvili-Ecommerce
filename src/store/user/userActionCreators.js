import {
  FEILD_LOGEDIN,
  LOGOUT_USER,
  SECCESS_LOGEDIN,
  START_LOADER,
} from "./reduxTypes";

export const setUser = (userData) => {
  return {
    type: SECCESS_LOGEDIN,
    userData,
  };
};

export const setToken = (token) => {
  return {
    type: SECCESS_LOGEDIN,
    token,
  };
};

export const setLoader = (loading) => {
  return {
    type: START_LOADER,
    loading,
  };
};

export const setErrors = (errors) => {
  return {
    type: FEILD_LOGEDIN,
    errors,
  };
};

export const removeLogedin = () => {
  return {
    type: LOGOUT_USER,
    isLoggedIn: false,
  };
};
