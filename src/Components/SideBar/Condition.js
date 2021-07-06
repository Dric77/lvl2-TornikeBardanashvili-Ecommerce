import {
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  makeStyles,
  withStyles
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  fullWidth: {
    width: "100%"
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

function Condition() {
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
  );
}

export default Condition;
