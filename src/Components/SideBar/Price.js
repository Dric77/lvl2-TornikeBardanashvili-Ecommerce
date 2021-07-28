import {
  Box,
  Checkbox,
  createMuiTheme,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  makeStyles,
  RadioGroup,
  Slider,
  TextField,
  ThemeProvider,
  withStyles
} from "@material-ui/core";
import React, { useState } from "react";
import RadioButton from "../RadioButton.js";

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
  },
  slider: {
    width: "70%"
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

function Price() {
  const classes = useStyle();
  const [value, setValue] = useState();
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: value
  });
  const [selectedValue, setSelectedValue] = useState();

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  return (
    <List className={classes.fullWidth}>
      <ListItem>
        <Box variant="h3" fontWeight={600} pt={3}>
          Price
        </Box>
      </ListItem>
      <ListItem>
        <List>
          <ListItem>
            <RadioButton
              label="UNDER $25"
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </ListItem>
          <ListItem>
            <RadioButton
              label="$25 to 50$"
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </ListItem>
          <ListItem>
            <RadioButton
              label="$50 to $100"
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </ListItem>
          <ListItem>
            <RadioButton
              label="$100 to $200"
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </ListItem>
          <ListItem>
            <RadioButton
              label="$200 ABOVE"
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </ListItem>
        </List>
      </ListItem>
      <ThemeProvider theme={theme}>
        <ListItem>
          <TextField
            id="minPrice"
            label="$ Min"
            variant="outlined"
            value={priceRange.min}
          ></TextField>
          -
          <TextField
            id="maxPrice"
            label="$ Max"
            variant="outlined"
            value={priceRange.max}
          ></TextField>
        </ListItem>
        <ListItem>
          <Box variant="h3" fontWeight={600} pt={3}>
            Price
          </Box>
        </ListItem>
        <ListItem>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs className={classes.fullWidth}>
              <Box component="span">0</Box>
              <Box component="span">
                <Slider
                  className={classes.slider}
                  defaultValue={50}
                  max={500}
                  value={value}
                  onChange={handleSliderChange}
                />
              </Box>
              <Box component="span">{500 + "$"}</Box>
            </Grid>
          </Grid>
        </ListItem>
      </ThemeProvider>
    </List>
  );
}

export default Price;
