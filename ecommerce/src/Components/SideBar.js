import {
  Box,
  Button,
  Checkbox,
  createMuiTheme,
  FormControlLabel,
  Grid,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Fonts from "../Fonts/FontFamily";
import React from "react";

function SideBar() {
  return (
    <>
      <Grid container item xs={4} direction="column" alignItems="flex-end">
        <List>
          <ListItem>
            <Box variant="h3" fontWeight={600} pt={3}>
              Tittle
            </Box>
          </ListItem>
          <ListItem button>
            <Box variant="h3" fontWeight={100} p={0} m={0}>
              item
            </Box>
          </ListItem>
          <ListItem button>
            <Box variant="h3" fontWeight={100} p={0} m={0}>
              item
            </Box>
          </ListItem>
          <ListItem button>
            <Box variant="h3" fontWeight={100} p={0} m={0}>
              item
            </Box>
          </ListItem>
          <ListItem button>
            <Box variant="h3" fontWeight={100} p={0} m={0}>
              item
            </Box>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <Box variant="h3" fontWeight={600}>
              Tittle
            </Box>
          </ListItem>
          <ListItem>
            <Box
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
              >
                <InputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Box>
              <SearchIcon />
            </Box>
          </ListItem>
        </List>

        <List>
          <ListItem>
            <Box variant="h3" fontWeight={600}>
              Tittle
            </Box>
          </ListItem>
          <ListItem>
            <FormControlLabel
              value="new"
              control={<Checkbox color="secondary" />}
              label="End"
              labelPlacement="NEW"
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              value="new"
              control={<Checkbox color="secondary" />}
              label="End"
              labelPlacement="NEW"
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              value="new"
              control={<Checkbox color="secondary" />}
              label="End"
              labelPlacement="NEW"
            />
          </ListItem>
        </List>
      </Grid>
    </>
  );
}

export default SideBar;
