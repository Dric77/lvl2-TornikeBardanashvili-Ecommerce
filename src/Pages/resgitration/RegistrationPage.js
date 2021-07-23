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
import React, { useState } from "react";
import Loader from "../../Components/Loader";
import API from "../../api.js";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 150,
    maxWidth: 700
  },
  input: {
    width: "100%",
    marginBottom: 25
  },
  loading: {
    opacity: 0.7
  }
}));
function RegistrationPage() {
  const classes = useStyles();

  const [registrationStatus, setRegistrationStatus] = useState();
  const [loader, setLoader] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: ""
    },
    onSubmit: (values) => {
      setLoader(true);
      API.getAllData("register", "POST")
        .then((user) => console.log(user))
        .catch((e) => console.log(e))
        .finally(() => setLoader(false));
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
            <form onSubmit={formik.handleSubmit}>
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
                  />
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
                  />
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
              />
              <TextField
                id="password"
                label="password"
                type="password"
                variant="outlined"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                className={classes.input}
              />
              <TextField
                id="phone"
                label="phone"
                type="text"
                variant="outlined"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className={classes.input}
              />
              <Button variant="contained" color="primary" type="submit">
                Sing Up
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default RegistrationPage;
