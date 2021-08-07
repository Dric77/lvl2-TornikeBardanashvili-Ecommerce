import {
  Box,
  createMuiTheme,
  List,
  ListItem,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  fullWidth: {
    width: "100%",
  },
});

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto,sans-serif",
  },
});

function Categories() {
  const classes = useStyle();
  return (
    <List className={classes.fullWidth}>
      <ListItem>
        <Box variant="h3" fontWeight={600} pt={3}>
          Subcategories
        </Box>
      </ListItem>
      <ListItem button>
        <Box variant="h3" fontWeight={100} p={0} m={0}>
          RETURN TO CLOTHING, SHOES, ACCESSORIES
        </Box>
      </ListItem>
      <ListItem button>
        <Box variant="h3" fontWeight={100} p={0} m={0}>
          DRESSES
        </Box>
      </ListItem>
      <ListItem button>
        <Box variant="h3" fontWeight={100} p={0} m={0}>
          TOPS, TEES & BLOUSES
        </Box>
      </ListItem>
      <ListItem button>
        <Box variant="h3" fontWeight={100} p={0} m={0}>
          SWEATERS
        </Box>
      </ListItem>
      <ListItem button>
        <Box variant="h3" fontWeight={100} p={0} m={0}>
          FASHION HOODIES & SWEATSHIRTS
        </Box>
      </ListItem>
      <ListItem button>
        <Box variant="h3" fontWeight={100} p={0} m={0}>
          JEANS
        </Box>
      </ListItem>
    </List>
  );
}

export default Categories;
