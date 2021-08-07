import React, { createContext, useEffect, useState } from "react";
import API from "../api.js";
import { AuthHelpers } from "./authHelpers.js";

const AuthContext = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (values) => {},
  userData: {},
  loading: false,
  errorMessage: "",
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);
  const [loading, setLoadign] = useState(false);
  const [userData, setUserData] = useState({});

  let userLogedIn = (userInfo) => {
    setLoadign(false);
    API.authUser("auth/login", "POST", userInfo)
      .then((user) => {
        if (user.user) {
          AuthHelpers.checkUserLogedIn(user);
          setIsLoggedIn(true);
        }
      })
      .catch((e) => {
        let errs = JSON.parse(e);
        console.log(errs);
        errs.errors.map((el) => {
          setErrorMessage(...errorMessage, el);
        });
      })
      .finally(() => setLoadign(false));
  };

  const loginHandler = (values) => {
    let userInfo = {
      email: values.email,
      password: values.password,
    };
    userLogedIn(userInfo);
  };

  let logOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem("isLoggedIn");
    const accessToken = localStorage.getItem("userToken");

    if (accessToken) {
      fetch("http://159.65.126.180/api/auth/me", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((user) => AuthHelpers.checkData(user))
        .then((data) => setUserData(data))
        .catch((e) => console.log(e));
    }

    if (userLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logOutHandler,
        onLogin: loginHandler,
        userData: userData,
        loading: loading,
        errorMessage: errorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
