import React from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { useStyles } from "./userProfileStyle";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import { selectUserData } from "../../store/user/userSelectors";
import CardMedia from "@material-ui/core/CardMedia";
import API from "../../api";

const UserProfile = () => {
  const classes = useStyles();
  const userData = useSelector(selectUserData);

  const formik = useFormik({
    initialValues: {
      email: userData.email,
      name: userData.name,
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      API.updateUserProfile(userData.id, values);
    },
  });

  return (
    <Container>
      <Box mt={15}>
        <form onSubmit={formik.handleSubmit}>
          <CardMedia image={userData.avatar} className={classes.avatar} />
          <TextField
            id="avatar"
            label="New avatar"
            type="file"
            variant="outlined"
            name="avatar"
            defaultValue={userData.avatar}
            value={formik.values.avatar}
            onChange={(e) => formik.setFieldValue("photo1", e.target.files[0])}
            className={classes.input}
            error={formik.values.avatar}
          />
          <Box fontSize={20}> {userData.email} </Box>
          <TextField
            id="email"
            label="New Email"
            type="email"
            variant="outlined"
            name="email"
            defaultValue={userData.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            className={classes.input}
            error={formik.values.email}
          />
          <Box mt={2} mb={3} fontSize={15} color="error.main">
            {formik.errors.email}
          </Box>
          <Box component="span" fontSize={20}>
            {" "}
            {userData.name}{" "}
          </Box>
          <TextField
            id="name"
            label="new user name"
            type="text"
            variant="outlined"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className={classes.input}
            error={formik.values.name}
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
