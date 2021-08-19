import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ADMIN } from "../routes";
import { useSelector } from "react-redux";
import { selectLoading, selectLogedin } from "../store/user/userSelectors";
import Loader from "./Loader";

const PriviteRoute = ({ component: Component, ...rest }) => {
  const isLogedIn = useSelector(selectLogedin);
  const loading = useSelector(selectLoading);

  return (
    <Loader loading={loading}>
      <Route
        {...rest}
        render={(props) =>
          isLogedIn ? <Redirect to={ADMIN} /> : <Component {...props} />
        }
      />
    </Loader>
  );
};

export default PriviteRoute;
