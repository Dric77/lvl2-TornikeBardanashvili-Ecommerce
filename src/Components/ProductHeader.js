import { Box, Grid, makeStyles } from "@material-ui/core";
import GridViewIcon from "@material-ui/icons/GridView";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Pagination from "@material-ui/lab/Pagination";
import theme from "../CutumTheme.js";
import React from "react";

const useStyle = makeStyles((theme) => ({
  gridItem: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center"
    }
  }
}));

function ProductHeader({ setListStyle }) {
  const classes = useStyle();

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
      <Grid container xs={12} spacing={2}>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={4}
          className={classes.gridItem}
        >
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
        <Grid container item xs={12} md={12} lg={4}>
          <Box component="span" fontWeight={100}>
            Label Exammple
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={4}
          className={classes.gridItem}
        >
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
