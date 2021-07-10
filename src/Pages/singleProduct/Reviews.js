import {
  Box,
  Button,
  CardMedia,
  Grid,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import HoverReview from "../../Components/HoverReview.js";

const useStyle = makeStyles((theme) => ({
  img: {
    height: 100,
    width: 100,
    backgroundSize: "90%"
  },
  mainContainer: {
    width: "100%",
    height: "auto"
  },
  imgContainer: {
    height: 100,
    display: "flex"
  },
  stars: {
    color: "#1266f1"
  },
  fullWidth: {
    width: "100%"
  }
}));

function Reviews({ singleData }) {
  const classes = useStyle();
  return (
    <Grid container className={classes.mainContainer}>
      <Grid item lg={12}>
        <Typography component="h3" variant="h5">
          {singleData.reviewCount} review for Fantasy T-shirt
        </Typography>
      </Grid>
      <Grid container item lg={12} alignItems="center">
        <Grid item lg={2}>
          <CardMedia
            image="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
            className={classes.img}
          />
        </Grid>
        <Grid item lg={6}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <Box display="flex">
              <Typography component="h1">Marthasteward</Typography>
              <Typography component="h6">– January 28, 2020</Typography>
            </Box>
            <Typography component="h6">Nice one, love it!</Typography>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Box textAlign="end">
            <Rating
              className={classes.stars}
              name="read-only"
              defaultValue={singleData.review}
              precision={0.5}
              readOnly
            />
          </Box>
        </Grid>
        <Grid item container lg={12}>
          <Grid item lg={12}>
            Your email address will not be published.
          </Grid>
          <Grid item lg={12}>
            <HoverReview />
          </Grid>
          <Grid item lg={12}>
            <TextField
              className={classes.fullWidth}
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              className={classes.fullWidth}
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              className={classes.fullWidth}
              id="outlined-textarea"
              label="email"
              placeholder="email"
              type="email"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={12}>
            <Button variant="contained" color="primary">
              Add Review
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Reviews;
