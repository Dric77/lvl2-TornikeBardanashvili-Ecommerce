import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from "@material-ui/core";
import { useStyles } from "./regitrationStyle";
import API from "../../api.js";
import { useFormik } from "formik";
import { validationSchema } from "./validation";
import React, { useContext, useState } from "react";
import AuthContext from "../../Components/context/auth-context.js";

function RegistrationPage({ registrationStatus, setRegistrationStatus }) {
  const classes = useStyles();
  const [loader, setLoader] = useState(false);
  const [errorText, setErrorText] = useState();

  const ctx = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let newUserInfo = {
        name: values.firstName,
        email: values.email,
        password: values.password,
        password_confirmation: values.confirmPassword
      };
      API.authUser("register", "POST", newUserInfo)
        .then((res) => {
          if (!res.ok) {
            res.text().then((error) => setErrorText(JSON.parse(error)));
          }
          setRegistrationStatus(res.ok);
          if (registrationStatus) {
            console.log(res.ok, registrationStatus);
            ctx.onLogin(values);
          }
          return res.json();
        })
        .then((data) => console.log(data))
        .catch((e) => console.log("error", e))
        .finally(() => {
          setLoader(false);
        });
    }
  });

  return (
    <div>
      <Container className={classes.mainContainer}>
        <Box
          component={Grid}
          container
          wrap="nowrap"
          flexDirection="column"
          className={loader && classes.loading}
        >
          <Box component={Grid} item textAlign="center" lg={12} pb={15}>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
          </Box>
          <Box component={Grid} item textAlign="center" lg={12}>
            <form onSubmit={formik.handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  <TextField
                    id="firstName"
                    label="First Name"
                    type="text"
                    variant="outlined"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    className={classes.input}
                    error={formik.errors.firstName}
                  />
                  <Box
                    component="div"
                    color="error.main"
                    fontSize={15}
                    className={classes.errorMessage}
                  >
                    {formik.errors.firstName && formik.errors.firstName}
                  </Box>
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    id="lastName"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    className={classes.input}
                    error={formik.errors.lastName}
                  />
                  <Box
                    component="div"
                    color="error.main"
                    fontSize={15}
                    className={classes.errorMessage}
                  >
                    {formik.errors.lastName && formik.errors.lastName}
                  </Box>
                </Grid>
              </Grid>
              <TextField
                id="email"
                label="email"
                type="email"
                variant="outlined"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={classes.input}
                error={formik.errors.email}
              />
              <Box
                component="div"
                color="error.main"
                fontSize={15}
                className={classes.errorMessage}
              >
                {formik.errors.email && formik.errors.email}
              </Box>
              <TextField
                id="password"
                label="password"
                type="password"
                variant="outlined"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className={classes.input}
                error={formik.errors.password}
              />
              <Box
                component="div"
                color="error.main"
                fontSize={15}
                className={classes.errorMessage}
              >
                {formik.errors.password && formik.errors.password}
              </Box>
              <TextField
                id="confirmPassword"
                label="confirmPassword"
                type="password"
                variant="outlined"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                className={classes.input}
                error={formik.errors.confirmPassword}
              />
              <Box
                component="div"
                color="error.main"
                fontSize={15}
                className={classes.errorMessage}
              >
                {formik.errors.confirmPassword && formik.errors.confirmPassword}
              </Box>
              <TextField
                id="phone"
                label="phone"
                type="text"
                variant="outlined"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className={classes.input}
                error={formik.errors.phone}
              />
              <Box
                component="div"
                color="error.main"
                fontSize={15}
                className={classes.errorMessage}
              >
                {formik.errors.phone && formik.errors.phone}
              </Box>
              <Box component="h5" color="error.main">
                {/* {!!errorText && console.log(errorText.errors.email)} */}
              </Box>
              <Button variant="contained" color="primary" type="submit">
                Sign Up
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default RegistrationPage;
