import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  makeStyles,
  withStyles,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  fullWidth: {
    width: "100%",
  },
});

const BlueCheckbox = withStyles({
  root: {
    color: "#1266f1",
    "&$checked": {
      color: "#1266f1",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Size() {
  const classes = useStyle();
  return (
    <List className={classes.fullWidth}>
      <ListItem>
        <Box variant="h3" fontWeight={600}>
          Condition
        </Box>
      </ListItem>
      <ListItem>
        <FormControlLabel
          value="34"
          label="34"
          labelPlacement="34"
          control={<BlueCheckbox fontSize="small" />}
        />
      </ListItem>
      <ListItem>
        <FormControlLabel
          value="36"
          label="36"
          labelPlacement="36"
          control={<BlueCheckbox fontSize="small" />}
        />
      </ListItem>
      <ListItem>
        <FormControlLabel
          value="38"
          label="38"
          labelPlacement="38"
          control={<BlueCheckbox fontSize="small" />}
        />
      </ListItem>
      <ListItem>
        <FormControlLabel
          value="40"
          label="40"
          labelPlacement="40"
          control={<BlueCheckbox fontSize="small" />}
        />
      </ListItem>
    </List>
  );
}

export default Size;
