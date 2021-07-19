import { Box, Grid, makeStyles } from "@material-ui/core";
import GridViewIcon from "@material-ui/icons/GridView";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Pagination from "@material-ui/lab/Pagination";
import CurrentPage from "../Components/CurrentPage";
import React from "react";
import MyPagination from "./MyPagination.js";

const useStyle = makeStyles((theme) => ({
  gridItem: {
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center"
    }
  }
}));

function ProductHeader({
  setListStyle,
  currentPage,
  handllePage,
  pagination,
  setPagination
}) {
  const classes = useStyle();

  let gridHanldelClick = () => {
    setListStyle("gridView");
  };
  let calendarHanldelClick = () => {
    setListStyle("calendarView");
  };

  return (
    <Box display="flex" flexDirection="row" width="100%" height={0} pt={5}>
      <Box component="span">{Pagination.currentPage} </Box>
      <Grid container xs={12} spacing={2}>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={2}
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
        <Grid container item xs={12} md={12} lg={2}>
          <Box component="span" fontWeight={100}>
            {/* <CurrentPage
              pagination={pagination}
              setPagination={setPagination}
            /> */}
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={12}
          lg={8}
          className={classes.gridItem}
        >
          <MyPagination pagination={pagination} />
          {/* <Pagination
            count={4}
            defaultPage={1}
            siblingCount={1}
            page={currentPage}
            color="primary"
            onChange={handllePage}
          /> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductHeader;
