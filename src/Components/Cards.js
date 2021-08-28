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
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SINGLE_PRODUCT } from "../routes.js";
import { selectProducts } from "../store/cart/cartSelectors.js";
import { setProduct } from "../store/cart/cartActionCreators.js";

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
  const products = useSelector(selectProducts);

  const [filteredProducts, setFilteredProducts] = useState(products);

  const addToCart = (e) => {
    const exsitProduct = filteredProducts.find((item) => item.id === data.id);

    if (exsitProduct) {
      setFilteredProducts(
        filteredProducts.map((el) =>
          el.id === exsitProduct.id
            ? { ...exsitProduct, productCount: exsitProduct.productCount + 1 }
            : el
        )
      );
    } else {
      let newArr = filteredProducts;
      newArr.push({ ...data, productCount: 1 });
      setFilteredProducts(newArr);
    }

    dispatch(setProduct(filteredProducts));
  };

  // cartProducts.map((el) => {
  //   if (el.id === data.id) {
  //     setTest(el.id);
  //   }
  // });

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
        <Mlink
          component={Link}
          to={SINGLE_PRODUCT.replace(":id", data.id)}
          underline="none"
        >
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
                  ${data.price}
                </Box>
              </Typography>
            ) : (
              <Typography gutterBottom component="strong">
                ${data.price}
              </Typography>
            )}
          </CardContent>
        </Mlink>
        {filteredProducts && filteredProducts.length ? (
          filteredProducts.map((el) =>
            el.id === data.id ? (
              <Button variant="contained" color="secondary" onClick={addToCart}>
                Remove TO CART
              </Button>
            ) : (
              <Button variant="contained" color="secondary" onClick={addToCart}>
                ADD TO CART
              </Button>
            )
          )
        ) : (
          <Button variant="contained" color="secondary" onClick={addToCart}>
            ADD TO CART
          </Button>
        )}
      </CardActionArea>
    </Card>
  );
}

export default Cards;
