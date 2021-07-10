import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import "typeface-roboto";
import { Link } from "react-router-dom";
import React from "react";
import SingleProduct from "../Pages/singleProduct/SingleProduct.js";
import { SINGLE_PRODUCT } from "../routes.js";

const useStyles = makeStyles({
  card: {
    height: "auto",
    width: "90%",
    display: "flex",
    justifyContent: "center",
    boxShadow: "none",
    borderRadius: "5px"
  },
  root: {
    maxWidth: 345,
    width: "100%",
    height: 340,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  media: {
    height: 330,
    width: "auto",
    transition: "ease 0.2s",
    "&:hover": {
      transform: "scale(1.4)"
    }
  },
  imgBg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e4e4e4",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  saleMark: {
    position: "absolute",
    fontSize: "1.2rem",
    fontWeight: 700,
    top: 10,
    left: 10,
    color: "#fff",
    backgroundColor: "#007bff",
    padding: "0.2rem .6rem",
    borderRadius: "1rem"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#4f4f4f"
  },
  disCountPrice: {
    color: "#ff3d71"
  },
  oldPrice: {
    color: "#9e9e9e",
    textDecoration: "line-through"
  }
});

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto,sans-serif"
  },
  pallete: {
    main: {
      error: {
        color: "#dc3545"
      }
    }
  }
});

function Cards({ data }) {
  const classes = useStyles();
  return (
    <ThemeProvider>
      <Link to={SINGLE_PRODUCT.replace(":id", data.id)}>
        <Card className={classes.card}>
          <CardActionArea className={classes.root}>
            <Box className={classes.imgBg}>
              <CardMedia
                component="img"
                className={classes.media}
                image={data.img}
                title="Contemplative Reptile"
              />
              {data.disCountPrice ? (
                <Box component="span" className={classes.saleMark}>
                  Sale
                </Box>
              ) : null}
            </Box>
            <ThemeProvider theme={theme}>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom component="h1">
                  {data.title}
                </Typography>
                {!!data.disCountPrice ? (
                  <Typography gutterBottom component="strong">
                    <Box component="span" className={classes.disCountPrice}>
                      {" "}
                      ${data.disCountPrice}
                    </Box>
                    <Box component="span" className={classes.oldPrice}>
                      {" "}
                      ${data.price}
                    </Box>
                  </Typography>
                ) : (
                  <Typography gutterBottom component="strong">
                    ${data.price}
                  </Typography>
                )}
              </CardContent>
            </ThemeProvider>
          </CardActionArea>
        </Card>
      </Link>
    </ThemeProvider>
  );
}

export default Cards;
