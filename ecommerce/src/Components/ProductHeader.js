import { Box, Grid } from "@material-ui/core";
import GridViewIcon from "@material-ui/icons/GridView";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import React from "react";

function ProductHeader() {
  return (
    <Box display="flex" flexDirection="row" width="100%" pt={5} mb={2}>
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
  );
}

export default ProductHeader;
