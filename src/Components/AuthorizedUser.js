import {
  Button,
  CardMedia,
  Grid,
  Link as Mlink,
  makeStyles,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ADMIN, SIGN_IN } from "../routes.js";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/user/user-actions";
import Box from "@material-ui/core/Box";
import { USER_PROFILE } from "../routes";

const useStyle = makeStyles((theme) => ({
  avatar: {
    width: 30,
    height: 30,
  },
}));

function AuthorizedUser() {
  const classes = useStyle();
  const { pathname } = useLocation();
  const [userData, setUserData] = useState({});

  const data = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    setUserData(data);
  }, []);

  return (
    <>
      {userData && userData.name && (
        <>
          <Grid item>
            <Mlink component={Link} to={ADMIN}>
              admin
            </Mlink>
          </Grid>
          <Grid item>
            <Mlink to={USER_PROFILE} component={Link}>
              <CardMedia image={userData.avatar} className={classes.avatar} />
            </Mlink>
          </Grid>
          <Grid item>{userData.name}</Grid>
          <Grid item>
            <Mlink onClick={logoutHandler} component={Link} to={SIGN_IN}>
              <Box>Log Out</Box>
            </Mlink>
          </Grid>
        </>
      )}
    </>
  );
}

export default AuthorizedUser;
