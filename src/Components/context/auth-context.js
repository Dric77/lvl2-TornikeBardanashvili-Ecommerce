import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (values) => {},
  userData: {}
});

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  let test = (email, password) => {
    fetch("http://159.65.126.180/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        setUserData(user);
        localStorage.setItem("isLoggedIn", user.token.access_token);
      })
      .catch((e) => console.log(e));
  };

  const loginHandler = (values) => {
    test(values.email, values.password);
  };

  let logOutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem("isLoggedIn");

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
        userData: userData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
