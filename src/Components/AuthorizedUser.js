import {
  Button,
  CardMedia,
  Grid,
  Link as Mlink,
  makeStyles
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ADMIN, SIGN_IN } from "../routes.js";
import AuthContext from "./context/auth-context.js";

const useStyle = makeStyles((theme) => ({
  avatar: {
    width: 30,
    height: 30
  }
}));

function AuthorizedUser() {
  const classes = useStyle();
  const [userData, setUserData] = useState({});

  const ctx = useContext(AuthContext);

  useEffect(() => {
    if (ctx.userData.user) {
      setUserData(ctx.userData.user);
    } else {
      setUserData(ctx.userData);
    }
  }, [ctx.userData]);

  return (
    <>
      {!!userData.name && (
        <>
          <Grid item>
            <Mlink component={Link} to={ADMIN}>
              admin
            </Mlink>
          </Grid>
          <Grid item>
            <CardMedia image={userData.avatar} className={classes.avatar} />
          </Grid>
          <Grid item>{userData.name}</Grid>
          <Grid item>
            <Mlink onClick={ctx.onLogout} component={Link} to={SIGN_IN}>
              Log Out
            </Mlink>
          </Grid>
        </>
      )}
    </>
  );
}

export default AuthorizedUser;
