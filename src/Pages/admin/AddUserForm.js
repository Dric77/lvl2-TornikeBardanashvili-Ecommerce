import React, { useState } from "react";
import { useFormik } from "formik";
import { makeStyles } from "@material-ui/styles";
import API from "../../api";
import { Box, Button, Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  fullWidth: {
    width: "100%",
  },
}));

function AddUserForm({ users, setUsers, setOpenModal }) {
  const classes = useStyle();
  const [addedStatus, setAddedStatus] = useState();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      city: "",
      street: "",
      phone: 0,
    },
    onSubmit: (values) => {
      let data = JSON.stringify(values, null, 2);
      let apiDataSeilize = {
        id: 1,
        email: values.email,
        username: values.username,
        password: values.password,
        name: {
          firstname: values.firstname,
          lastname: values.lastname,
        },
        address: {
          city: values.city,
          street: values.street,
        },
        phone: values.phone,
      };
      setUsers([...users, apiDataSeilize]);
      API.addData(values, setAddedStatus);
      // setOpenModal(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      <Box component={Grid} flexDirection="column" container spacing={2}>
        <Box component={Grid} flexDirection="row" container item lg={12}>
          <Grid lg={6}>
            <label htmlFor="firstname">firstname</label>
            <input
              className={classes.fullWidth}
              id="firstname"
              name="firstname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
          </Grid>
          <Grid lg={6}>
            <label htmlFor="lastname">Last Name</label>
            <input
              className={classes.fullWidth}
              id="lastname"
              name="lastname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
          </Grid>
        </Box>
        <Box
          item
          component={Grid}
          lg={12}
          display="flex"
          flexDirection="column"
        >
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Box component={Grid} flexDirection="row" container item lg={12}>
            <Grid lg={6}>
              <label htmlFor="street">street </label>
              <input
                className={classes.fullWidth}
                id="street"
                name="street"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.street}
              />
            </Grid>
            <Grid lg={6}>
              <label htmlFor="city">City </label>
              <input
                className={classes.fullWidth}
                id="city"
                name="city"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.city}
              />
            </Grid>
          </Box>
          <label htmlFor="phone">Phone </label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </Box>
        <Grid item>
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </Grid>
      </Box>
    </form>
  );
}

export default AddUserForm;
