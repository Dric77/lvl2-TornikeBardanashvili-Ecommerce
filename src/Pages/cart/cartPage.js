import React from "react";

import {
  Container,
  Grid,
  Box,
  Typography,
  CardMedia,
  makeStyles
} from "@material-ui/core";

const UseStyles = makeStyles((theme) => ({
  media: {
    height: 150,
    width: 150
  },
  cartItems: {
    boxShadow: "0 10px 20px 0 rgb(0 0 0 / 5%)",
    border: "2px solid #000"
  }
}));

function cartPage() {
  const classes = UseStyles();

  return (
    <>
      <Container>
        <Box mt={15}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <Typography align="center" variant="h4">
                Shoping Cart
              </Typography>
            </Grid>
            <Grid item container lg={8} className={classes.cartItems}>
              <Grid item>
                <CardMedia
                  image="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                  className={classes.media}
                />
              </Grid>
            </Grid>
            <Grid item container lg={4}>
              sidbar
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default cartPage;
