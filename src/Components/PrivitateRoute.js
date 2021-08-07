import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../store/auth-context";
import { ADMIN } from "../routes";

const PriviteRoute = ({ component: Component, ...rest }) => {
  const ctx = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        ctx.isLoggedIn ? <Redirect to={ADMIN} /> : <Component {...props} />
      }
    />
  );
};

export default PriviteRoute;
