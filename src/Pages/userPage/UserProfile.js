import React from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { useStyles } from "./userProfileStyle";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../store/user/userSelectors";
import CardMedia from "@material-ui/core/CardMedia";
import { updateUserProfileHandler } from "../../store/user/user-actions";

const UserProfile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const formik = useFormik({
    initialValues: {
      email: userData && userData.email,
      name: userData && userData.name,
      avatar: "",
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(updateUserProfileHandler(userData.id, values));
    },
  });

  return (
    <Container>
      <Box mt={15}>
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <CardMedia
              image={userData && userData.avatar}
              className={classes.avatar}
            />
            <TextField
              id="avatar"
              type="file"
              variant="outlined"
              name="avatar"
              onChange={(e) =>
                formik.setFieldValue("avatar", e.target.files[0])
              }
              className={classes.uploadInp}
            />
          </Box>
          <TextField
            id="email"
            label="New Email"
            type="email"
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className={classes.input}
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
            value={formik.values.name}
            onChange={formik.handleChange}
            className={classes.input}
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
