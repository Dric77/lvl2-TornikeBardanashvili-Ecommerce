import { Box, List, ListItem, makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";

const useStyle = makeStyles({
  fullWidth: {
    width: "100%",
  },
  reiting: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
  stars: {
    color: "#1266f1",
  },
});

function Review() {
  const classes = useStyle();

  let handlleReiting = (e, value) => {
    console.log(value);
  };
  return (
    <List className={classes.fullWidth}>
      <ListItem>
        <Box variant="h3" fontWeight={600}>
          Avg. Customer Review
        </Box>
      </ListItem>
      <ListItem className={classes.reiting} alignItems="flex-start">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Rating
            className={classes.stars}
            name="read-only"
            defaultValue={4}
            precision={0.5}
            onChange={handlleReiting}
            readOnly
          />
          <Box component="span" fontWeight={100} fontSize={14} ml={1}>
            & UP
          </Box>
        </Box>
      </ListItem>
      <ListItem className={classes.reiting} alignItems="flex-start">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Rating
            className={classes.stars}
            name="read-only"
            defaultValue={3}
            precision={0.5}
            onChange={handlleReiting}
            readOnly
          />
          <Box component="span" fontWeight={100} fontSize={14} ml={1}>
            & UP
          </Box>
        </Box>
      </ListItem>
      <ListItem className={classes.reiting} alignItems="flex-start">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Rating
            className={classes.stars}
            name="read-only"
            defaultValue={2}
            precision={0.5}
            onChange={handlleReiting}
            readOnly
          />
          <Box component="span" fontWeight={100} fontSize={14} ml={1}>
            & UP
          </Box>
        </Box>
      </ListItem>
      <ListItem className={classes.reiting} alignItems="flex-start">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Rating
            className={classes.stars}
            name="read-only"
            defaultValue={1}
            precision={0.5}
            onChange={handlleReiting}
            readOnly
          />
          <Box component="span" fontWeight={100} fontSize={14} ml={1}>
            & UP
          </Box>
        </Box>
      </ListItem>
    </List>
  );
}

export default Review;
