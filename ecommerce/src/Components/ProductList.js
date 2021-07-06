import {
  Box,
  Card,
  Container,
  createMuiTheme,
  Grid,
  List,
  makeStyles
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import ProductHeader from "./ProductHeader";
import VerticalCards from "./VerticalCards";

const useStyle = makeStyles({
  cardList: {
    justifyContent: "center"
  },
  fullWidth: {
    width: "100% !important"
  }
});

function ProductList() {
  const classes = useStyle();
  const [listStyle, setListStyle] = useState("gridView");

  const [data, setData] = useState([
    {
      title: "Black denim jacket",
      price: "99,99",
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
      disCountPrice: "21,99"
    },
    {
      title: "Black denim jacket",
      price: "99,99",
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
    },
    {
      title: "Black denim jacket",
      price: "99",
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
    },
    {
      title: "Black denim jacket",
      price: "99,21",
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
    },
    {
      title: "Black denim jacket",
      price: "99,18",
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
    }
  ]);

  return (
    <Grid container item xs={12} lg={8}>
      <Container>
        <Box mb={3}>
          <ProductHeader setListStyle={setListStyle} />
        </Box>
        <Grid container spacing={5} className={classes.cardList}>
          {data.map((e) =>
            listStyle === "gridView" ? (
              <Grid item xs={12} sm={8} md={6} lg={4}>
                <Cards data={e} />
              </Grid>
            ) : (
              <Grid item xs={12} className={classes.fullWidth}>
                <VerticalCards data={e} />
              </Grid>
            )
          )}
        </Grid>
        <Box mb={3}>
          <ProductHeader setListStyle={setListStyle} />
        </Box>
      </Container>
    </Grid>
  );
}

export default ProductList;
