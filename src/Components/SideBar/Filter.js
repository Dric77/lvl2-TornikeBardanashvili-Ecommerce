import {
  Box,
  createMuiTheme,
  InputBase,
  List,
  ListItem,
  makeStyles
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

const useStyle = makeStyles({
  fullWidth: {
    width: "100%"
  },
  searchIcon: {
    cursor: "pointer"
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

function Filter() {
  const classes = useStyle();
  return (
    <List className={classes.fullWidth}>
      <ListItem>
        <Box variant="h3" fontWeight={600}>
          Filters
        </Box>
      </ListItem>
      <ListItem>
        <Box
          className={classes.fullWidth}
          variant="h3"
          fontWeight={600}
          display="flex"
          alignItems="center"
        >
          <Box
            component="span"
            border={1}
            borderColor="grey.500"
            borderRadius={3}
            marginRight={1}
            width="100%"
          >
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
          <SearchIcon className={classes.searchIcon} />
        </Box>
      </ListItem>
    </List>
  );
}

export default Filter;
