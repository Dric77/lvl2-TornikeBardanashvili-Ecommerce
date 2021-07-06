import {
  Box,
  Checkbox,
  createMuiTheme,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  makeStyles,
  Slider,
  TextField,
  ThemeProvider,
  withStyles
} from "@material-ui/core";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import React, { useState } from "react";

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

  const [value, setValue] = useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
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
          <TextField id="minPrice" label="$ Min" variant="outlined"></TextField>
          -
          <TextField id="minPrice" label="$ Min" variant="outlined"></TextField>
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
                  value={typeof value === "number" ? value : 0}
                  onChange={handleSliderChange}
                />
              </Box>
              <Box component="span">{value + "$"}</Box>
            </Grid>
          </Grid>
        </ListItem>
      </ThemeProvider>
    </List>
  );
}

export default Price;
