import { Box, Grid, makeStyles } from "@material-ui/core";
import GridViewIcon from "@material-ui/icons/GridView";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Pagination from "@material-ui/lab/Pagination";
import React from "react";

function ProductHeader({ setListStyle }) {
  let gridHanldelClick = () => {
    setListStyle("gridView");
  };
  let calendarHanldelClick = () => {
    setListStyle("calendarView");
  };
  let handllePage = (e, page) => {
    console.log(page);
  };
  return (
    <Box display="flex" flexDirection="row" width="100%" height={0} pt={5}>
      <Grid container xs={12}>
        <Grid container item xs={4}>
          <GridViewIcon
            fontSize="large"
            color="action"
            onClick={gridHanldelClick}
          />
          <CalendarViewDayIcon
            fontSize="large"
            color="action"
            onClick={calendarHanldelClick}
          />
        </Grid>
        <Grid container item xs={4}>
          Label Exammple
        </Grid>
        <Grid container item xs={4}>
          <Pagination
            count={4}
            defaultPage={1}
            siblingCount={0}
            color="primary"
            onChange={handllePage}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductHeader;
