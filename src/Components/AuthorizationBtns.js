import {
  Box,
  Button,
  Grid,
  Link as Mlink,
  makeStyles
} from "@material-ui/core";
import { SIGN_IN, SIGN_UP } from "../routes.js";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  borderBtn: {
    fontSize: "0.7rem",
    border: "2px solid #ccc",
    padding: "7px 29px",
    borderRadius: "10rem"
  }
}));

function AuthorizationBtns() {
  const classes = useStyles();
  return (
    <>
      <Grid item>
        <Box variant="h6" fontWeight={200}>
          <Mlink component={Link} underline="none" to={SIGN_IN}>
            Sing In
          </Mlink>
        </Box>
      </Grid>
      <Grid item>
        <Button color="inherit" className={classes.borderBtn}>
          <Mlink component={Link} underline="none" to={SIGN_UP}>
            Sing Up
          </Mlink>
        </Button>
      </Grid>
    </>
  );
}

export default AuthorizationBtns;
