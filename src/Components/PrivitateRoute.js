import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ADMIN } from "../routes";
import { useSelector } from "react-redux";
import { selectLogedin } from "../store/user/userSelectors";

const PriviteRoute = ({ component: Component, ...rest }) => {
  const isLogedIn = useSelector(selectLogedin);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogedIn ? <Redirect to={ADMIN} /> : <Component {...props} />
      }
    />
  );
};

export default PriviteRoute;
