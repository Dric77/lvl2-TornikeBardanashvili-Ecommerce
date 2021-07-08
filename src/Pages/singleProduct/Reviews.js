import { Box, CardMedia, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  img: {
    height: 100,
    width: 80,
    backgroundSize: "90%"
  },
  mainContainer: {
    width: "100%",
    height: "auto"
  },
  imgContainer: {
    height: 100,
    display: "flex"
  }
}));

function Reviews() {
  const classes = useStyle();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.imgContainer}>
        <CardMedia
          image="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
          className={classes.img}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Box display="flex">
            <Typography component="h1">Marthasteward</Typography>
            <Typography component="h6">– January 28, 2020</Typography>
          </Box>
          <Typography component="h6">Nice one, love it!</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Reviews;
