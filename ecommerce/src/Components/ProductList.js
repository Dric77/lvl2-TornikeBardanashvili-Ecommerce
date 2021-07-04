import {
  Box,
  Card,
  Container,
  createMuiTheme,
  Grid,
  List,
  makeStyles
} from "@material-ui/core";
import GridViewIcon from "@material-ui/icons/GridView";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import ProductHeader from "./ProductHeader";

const useStyle = makeStyles({
  grid: {}
});

function ProductList() {
  const [data, setData] = useState([
    {
      title: "Black denim jacket",
      price: "99,99",
      img: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
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
    <Grid container item xs={8}>
      <ProductHeader />
      <Grid container spacing={5} xs={12}>
        {data.map((e) => (
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Cards data={e} />
          </Grid>
        ))}
      </Grid>
      <ProductHeader />
    </Grid>
  );
}

export default ProductList;
