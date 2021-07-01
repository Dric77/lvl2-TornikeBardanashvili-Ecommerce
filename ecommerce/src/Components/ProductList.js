import { Box, Card, createMuiTheme, Grid, List } from "@material-ui/core";
import GridViewIcon from "@material-ui/icons/GridView";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import React from "react";
import Cards from "./Cards";

function ProductList() {
  return (
    <Grid container item xs={8}>
      <Box display="flex" flexDirection="row" width="100%" pt={5}>
        <Grid container xs={12}>
          <Grid container item xs={4}>
            <GridViewIcon fontSize="large" color="action" />
            <CalendarViewDayIcon fontSize="large" color="action" />
          </Grid>
          <Grid container item xs={4}>
            Label Exammple
          </Grid>
          <Grid container item xs={4}>
            Page Switcher
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" flexDirection="row" width="100%" pt={3} m={5}>
        <Grid container item xs={4} spacing={5}>
          <Cards />
        </Grid>
        <Grid container item xs={4} spacing={5}>
          <Cards />
        </Grid>
      </Box>
    </Grid>
  );
}

export default ProductList;
