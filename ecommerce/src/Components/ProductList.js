import {
  Box,
  Card,
  Container,
  createMuiTheme,
  Grid,
  List
} from "@material-ui/core";
import GridViewIcon from "@material-ui/icons/GridView";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import React, { useEffect } from "react";
import Cards from "./Cards";
import ProductHeader from "./ProductHeader";

function ProductList() {
  return (
    <Grid container item xs={8}>
      <ProductHeader />
      <Grid container spacing={5}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Cards />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Cards />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Cards />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Cards />
        </Grid>
      </Grid>
      <ProductHeader />
    </Grid>
  );
}

export default ProductList;
