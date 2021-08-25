import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Link as Mlink,
  Button
} from "@material-ui/core";
import "typeface-roboto";
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from '../store/cart/cartActions'
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
    height: "90%",
    width: "auto",
    transition: "ease 0.2s",
    "&:hover": {
      transform: "scale(1.2)"
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

function Cards({ data }) {
  const classes = useStyles();

    const dispatch = useDispatch();

  const addToCart = (e) => {
    dispatch(addProduct(data))
  }

  return (
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

        <CardContent className={classes.cardContent}>
          <Mlink
            component={Link}
            to={SINGLE_PRODUCT.replace(":id", data.id)}
            underline="none"
          >
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
                  ${data.price}
                </Box>
              </Typography>
            ) : (
              <Typography gutterBottom component="strong">
                ${data.price}
              </Typography>
            )}
          </Mlink>
          <Button variant="contained" color="secondary" onClick={addToCart}>
            ADD TO CART
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards;
