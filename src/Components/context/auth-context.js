import React, { useEffect, useState } from "react";
import API from "../../api.js";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (values) => {},
  userData: {},
  loading: false,
  errorMessage: ""
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoadign] = useState(false);
  const [userData, setUserData] = useState({});

  let userLogedIn = (userInfo) => {
    setLoadign(true);
    API.authUser("auth/login", "POST", userInfo)
      .then((res) => {
        setIsLoggedIn(res.ok);
        return res.json();
      })
      .then((user) => {
        checkUserLogedIn(user);
      })
      .catch((e) => console.log("auth error", e))
      .finally(() => setLoadign(false));
  };

  const loginHandler = (values) => {
    let userInfo = {
      email: values.email,
      password: values.password
    };
    userLogedIn(userInfo);
  };

  let logOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
  };

  let checkUserLogedIn = (user) => {
    if (user.token) {
      setUserData(user);
      localStorage.setItem("userToken", user.token.access_token);
      localStorage.setItem("isLoggedIn", "1");
    } else {
      setErrorMessage("Wrong Email or Password");
    }
  };

  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem("isLoggedIn");
    const accessToken = localStorage.getItem("userToken");

    if (accessToken) {
      fetch("http://159.65.126.180/api/auth/me", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then((res) => res.json())
        .then((user) => setUserData(user))
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
        errorMessage: errorMessage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
