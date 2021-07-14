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
import React, { useState } from "react";
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
  },
  reviewBtn: {
    padding: ".7rem 1.4rem",
    "&:hover": {
      backgroundColor: "#4285f4",
      boxShadow: " 0 4px 10px 0 rgb(0 0 0 / 20%), 0 2px 10px 0 rgb(0 0 0 / 5%)"
    }
  }
}));

function Reviews({ setSingleData, singleData }) {
  const classes = useStyle();
  const [review, setReview] = useState({
    userName: "",
    time: "",
    reviewDes: "",
    reviewStar: 0
  });
  const [stars, setstars] = useState();
  const [decriptio, setDecriptio] = useState();
  const [name, setname] = useState();
  const [email, setEmail] = useState();

  let handleReview = (e) => {
    e.preventDefault();
    let tmp = {
      userName: name,
      time: Date().toLocaleString(),
      review: decriptio,
      email: email,
      reviewStar: stars
    };
  };

  return (
    <Grid container item lg={12} className={classes.mainContainer}>
      <Grid item lg={12}>
        <Typography component="h3" variant="h5">
          {singleData.reviewCount} review for Fantasy T-shirt
        </Typography>
      </Grid>
      <Grid container item lg={12} spacing={3} alignItems="center">
        {singleData.review.map((rev) => (
          <Box
            component={Grid}
            contaner
            item
            lg={12}
            display="flex"
            alignItems="center"
          >
            <Grid item lg={1}>
              <CardMedia
                image="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
                className={classes.img}
              />
            </Grid>
            <Grid item lg={7}>
              <Box
                p={2}
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
              >
                <Box display="flex">
                  <Typography component="h1">{rev.userName}</Typography>
                  <Typography component="h6">– {rev.time}</Typography>
                </Box>
                <Typography component="h6">{rev.reviewDes}</Typography>
              </Box>
            </Grid>
            <Grid item lg={4}>
              <Box textAlign="end">
                <Rating
                  className={classes.stars}
                  name="read-only"
                  defaultValue={rev.reviewStar}
                  precision={0.5}
                  readOnly
                />
              </Box>
            </Grid>
          </Box>
        ))}

        <Grid item container lg={12}>
          <Grid item lg={12}>
            Your email address will not be published.
          </Grid>
          <form onSubmit={handleReview} className={classes.fullWidth}>
            <Grid container item spacing={4}>
              <Grid item lg={12}>
                <HoverReview setstars={setstars} stars={stars} />
              </Grid>
              <Grid item lg={12}>
                <TextField
                  className={classes.fullWidth}
                  id="outlined-multiline-static"
                  label="Multiline"
                  multiline
                  rows={4}
                  variant="outlined"
                  onChange={(event) => {
                    setDecriptio(event.target.value);
                  }}
                />
              </Grid>
              <Grid item lg={12}>
                <TextField
                  className={classes.fullWidth}
                  id="outlined-textarea"
                  label="Name"
                  placeholder="Name"
                  variant="outlined"
                  onChange={(event) => {
                    setname(event.target.value);
                  }}
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
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Grid>
              <Grid container lg={12} display="flex" justify="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className={classes.reviewBtn}
                >
                  Add Review
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Reviews;
