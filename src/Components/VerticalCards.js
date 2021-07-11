import {
  Link as Mlink,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { SINGLE_PRODUCT } from "../routes.js";

const useStyles = makeStyles({
  card: {
    height: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    boxShadow: "none",
    borderRadius: "5px"
  },
  root: {
    maxWidth: "100%",
    width: "100%",
    height: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  media: {
    height: "100%",
    width: "auto",
    backgroundSize: "100%",
    transition: "ease 0.2s",
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  imgBg: {
    width: "100%",
    height: 430,
    backgroundColor: "#e4e4e4",
    overflow: "hidden",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "#4f4f4f"
  },
  title: {
    fontSize: "2rem",
    textTransform: "uppercase"
  },
  imgMask: {
    height: "100%",
    width: 230,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    fontSize: "1rem",
    marginTop: "1rem",
    fontWeight: 400
  },
  disCountPrice: {
    color: "#ff3d71"
  },
  oldPrice: {
    color: "#9e9e9e",
    textDecoration: "line-through"
  }
});

function VerticalCards({ data }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Mlink
        component={Link}
        to={SINGLE_PRODUCT.replace(":id", data.id)}
        underline="none"
      >
        <Grid container className={classes.imgBg}>
          <Grid item lg={4} md={12} className={classes.imgMask}>
            <CardMedia
              component="img"
              className={classes.media}
              image={data.img}
              title="Contemplative Reptile"
            />
          </Grid>

          <Grid item container lg={8} md={12}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom component="h1" className={classes.title}>
                {data.title}
              </Typography>
              {!!data.disCountPrice ? (
                <Box
                  display="flex"
                  flexDirection="column"
                  gutterBottom
                  component="strong"
                >
                  <Box
                    component="span"
                    fontSize="1.3rem"
                    mb={0.5}
                    className={classes.disCountPrice}
                  >
                    {" "}
                    ${data.disCountPrice}
                  </Box>
                  <Box
                    component="span"
                    fontSize="1rem"
                    className={classes.oldPrice}
                  >
                    {" "}
                    ${data.price}
                  </Box>
                </Box>
              ) : (
                <Box fontSize="1.3rem" gutterBottom component="strong">
                  ${data.price}
                </Box>
              )}
              <Typography component="p" className={classes.description}>
                {data.description}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Mlink>
    </Card>
  );
}

export default VerticalCards;
