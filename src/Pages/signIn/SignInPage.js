import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Components/context/auth-context.js";
import MyCheckbox from "./MyCheckbox.js";
import { SIGN_UP } from "../../routes";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 150,
    maxWidth: 700
  },
  input: {
    width: "100%",
    marginBottom: 25
  }
}));

function SignInPage() {
  const classes = useStyles();
  const [singInData, setSingInData] = useState();

  const ctx = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      RemberCheckStaus: false
    },
    onSubmit: (values) => {
      ctx.onLogin(values);
    }
  });
  return (
    <div>
      <Container className={classes.mainContainer}>
        <Box component={Grid} container wrap="nowrap" flexDirection="column">
          <Box component={Grid} item textAlign="center" lg={12} pb={15}>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
          </Box>
          <Box component={Grid} item textAlign="center" lg={12}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                id="email"
                label="Yor Email"
                type="email"
                variant="outlined"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={classes.input}
              />
              <TextField
                id="password"
                label="Your Password"
                type="password"
                variant="outlined"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className={classes.input}
              />
              <Box
                component="div"
                display="flex"
                justifyContent="space-between"
              >
                <MyCheckbox
                  name="RemberCheckStaus"
                  label="REMEBER ME"
                  checkStaus={formik.values.RemberCheckStaus}
                  value={formik.values.rememberMe}
                />
                <Button color="primary">Forget Password ?</Button>
              </Box>
              <Button variant="contained" color="primary" type="submit">
                Sing In
              </Button>
            </form>
            <Box component={Grid} item>
              Not a member? <Link to={SIGN_UP}> Register</Link>
            </Box>
            <Box
              component={Grid}
              item
              container
              display="flex"
              justifyContent="center"
              flexDirection="column"
            >
              <Grid item>or sign with:</Grid>
              <Grid item>logos</Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default SignInPage;
