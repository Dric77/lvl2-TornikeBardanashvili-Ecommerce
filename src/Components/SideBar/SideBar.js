import { createMuiTheme, Grid, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Categories from "./Categories";
import Filter from "./Filter";
import Condition from "./Condition";
import Review from "./Review";
import Price from "./Price";
import Size from "./Size";

const useStyle = makeStyles({
  fullWidth: {
    width: "100%"
  },
  reiting: {
    display: "flex",
    flexDirection: "column"
  },
  stars: {
    color: "#1266f1"
  }
});

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto,sans-serif;"
  },
  overrides: {
    MuiInputBase: {
      input: {
        height: 12
      }
    }
  }
});

function SideBar() {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        sm={4}
        lg={4}
        direction="column"
        alignItems="flex-end"
      >
        <Categories />

        <Filter />

        <Condition />

        <Review />

        <Price />

        <Size />
      </Grid>
    </>
  );
}

export default SideBar;
