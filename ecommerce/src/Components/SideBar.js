import {
  Box,
  Button,
  Checkbox,
  Container,
  createMuiTheme,
  FormControlLabel,
  Grid,
  Input,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Slider,
  TextField,
  ThemeProvider,
  Typography,
  withStyles
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import Rating from "@material-ui/lab/Rating";
import Fonts from "../Fonts/FontFamily";
import React from "react";
import { green } from "@material-ui/core/colors";

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

const BlueCheckbox = withStyles({
  root: {
    color: "#1266f1",
    "&$checked": {
      color: "#1266f1"
    }
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

let handlleReiting = (e, value) => {
  console.log(value);
};

function SideBar() {
  const classes = useStyle();
  const [value, setValue] = React.useState(30);

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <>
      <Grid
        container
        item
        xs={12}
        sm={8}
        lg={4}
        direction="column"
        alignItems="flex-end"
      >
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
              <SearchIcon />
            </Box>
          </ListItem>
        </List>

        <List className={classes.fullWidth}>
          <ListItem>
            <Box variant="h3" fontWeight={600}>
              Condition
            </Box>
          </ListItem>
          <ListItem>
            <FormControlLabel
              value="new"
              control={<BlueCheckbox fontSize="small" />}
              label="NEW"
              labelPlacement="NEW"
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              value="collectible"
              control={<BlueCheckbox fontSize="small" />}
              label="COLLECTIBLE"
              labelPlacement="COLLECTIBLE"
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              value="renewed"
              control={<BlueCheckbox fontSize="small" />}
              label="COLLECTIBLE"
              labelPlacement="RENEWED"
            />
          </ListItem>
        </List>
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
                name="half-rating"
                defaultValue={4}
                precision={0.5}
                onChange={handlleReiting}
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
                name="half-rating"
                defaultValue={4}
                precision={0.5}
                onChange={handlleReiting}
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
                name="half-rating"
                defaultValue={4}
                precision={0.5}
                onChange={handlleReiting}
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
                name="half-rating"
                defaultValue={4}
                precision={0.5}
                onChange={handlleReiting}
              />
              <Box component="span" fontWeight={100} fontSize={14} ml={1}>
                & UP
              </Box>
            </Box>
          </ListItem>
        </List>

        <List className={classes.fullWidth}>
          <ListItem>
            <Box variant="h3" fontWeight={600} pt={3}>
              Price
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <FormControlLabel
                value="under"
                control={
                  <BlueCheckbox
                    icon={<RadioButtonUncheckedIcon fontSize="small" />}
                    checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  />
                }
                label="UNDER $25"
                labelPlacement="UNDER $25"
              />
              <Box component="span"></Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <FormControlLabel
                value="under"
                control={
                  <BlueCheckbox
                    icon={<RadioButtonUncheckedIcon fontSize="small" />}
                    checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  />
                }
                label="UNDER $25"
                labelPlacement="UNDER $25"
              />
              <Box component="span"></Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <FormControlLabel
                value="under"
                control={
                  <BlueCheckbox
                    icon={<RadioButtonUncheckedIcon fontSize="small" />}
                    checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  />
                }
                label="UNDER $25"
                labelPlacement="UNDER $25"
              />
              <Box component="span"></Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <FormControlLabel
                value="under"
                control={
                  <BlueCheckbox
                    icon={<RadioButtonUncheckedIcon fontSize="small" />}
                    checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  />
                }
                label="UNDER $25"
                labelPlacement="UNDER $25"
              />
              <Box component="span"></Box>
            </Box>
          </ListItem>
          <ListItem>
            <Box>
              <FormControlLabel
                value="under"
                control={
                  <BlueCheckbox
                    icon={<RadioButtonUncheckedIcon fontSize="small" />}
                    checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                  />
                }
                label="UNDER $25"
                labelPlacement="UNDER $25"
              />
              <Box component="span"></Box>
            </Box>
          </ListItem>
          <ThemeProvider theme={theme}>
            <ListItem>
              <TextField
                id="minPrice"
                label="$ Min"
                variant="outlined"
              ></TextField>
              -
              <TextField
                id="minPrice"
                label="$ Min"
                variant="outlined"
              ></TextField>
            </ListItem>
            <ListItem>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                  <Slider
                    value={typeof value === "number" ? value : 0}
                    onChange={handleSliderChange}
                  />
                </Grid>
              </Grid>
            </ListItem>
          </ThemeProvider>
        </List>
      </Grid>
    </>
  );
}

export default SideBar;
