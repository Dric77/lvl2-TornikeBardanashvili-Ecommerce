import React from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { useStyles } from "./userProfileStyle";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/userSelectors";

const UserProfile = () => {
  const classes = useStyles();

  const updateuserInfo = (newInfo) => {
    fetch(`http://159.65.126.180/api/users/${39}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
      body: JSON.stringify(newInfo), // body data type must match "Content-Type" header
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.text().then((text) => {
          throw text;
        });
      })
      .then((newData) => console.log(newData));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      updateuserInfo(values);
    },
  });

  return (
    <Container>
      <Box mt={15}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="email"
            label="New Email"
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
            id="name"
            label="new user name"
            type="text"
            variant="outlined"
            name="name"
            value={formik.values.userName}
            onChange={formik.handleChange}
            className={classes.input}
            error={formik.values.userName}
          />
          <Box mt={2} mb={3} fontSize={15} color="error.main">
            {formik.errors.email}
          </Box>
          <Button variant="contained" color="primary" type="submit">
            Update Feilds
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default UserProfile;
