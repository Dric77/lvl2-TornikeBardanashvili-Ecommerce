import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MyCheckbox from "./MyCheckbox.js";
import { useStyles } from "./singinStyle";
import { SIGN_UP } from "../../routes";
import { validationSchema } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { logInHandler } from "../../store/user/user-actions";
import { selectErrors, selectLogedin } from "../../store/user/userSelectors";

function SignInPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLogedin);
  const errors = useSelector(selectErrors);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remberCheckStaus: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(logInHandler(values));
    },
  });

  return (
    <div>
      <Container className={classes.mainContainer}>
        {isLoading && (
          <CircularProgress
            color="primary"
            size={50}
            className={classes.loader}
          />
        )}
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
                error={formik.values.email}
              />
              <Box mt={2} mb={3} fontSize={15} color="error.main">
                {formik.errors.email}
              </Box>
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
              <Box mt={2} mb={3} fontSize={15} color="error.main">
                {formik.errors.password}
              </Box>
              <Box
                component="h5"
                fontSize={20}
                fontWeight={400}
                m={0}
                color="error.main"
              >
                {errors &&
                  errors[0] &&
                  errors.map((err) => <Typography>{err}</Typography>)}
              </Box>
              <Box
                component="div"
                display="flex"
                justifyContent="space-between"
              >
                <MyCheckbox
                  name="RemberCheckStaus"
                  label="REMEBER ME"
                  checked={formik.values.remberCheckStaus}
                  value={formik.values.rememberMe}
                />
                <Button color="primary">Forget Password ?</Button>
              </Box>
              <Button variant="contained" color="primary" type="submit">
                Sing In
              </Button>
            </form>
            <Box component={Grid} item pt={4}>
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
