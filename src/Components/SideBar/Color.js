import {
  Checkbox,
  Box,
  FormControlLabel,
  List,
  ListItem,
  makeStyles,
  withStyles
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import React, { useState } from "react";

const useStyle = makeStyles({
  fullWidth: {
    width: "100%"
  },
  colorCircle: {
    width: "100%",
    height: "100%"
  },
  colorBorder: {
    border: "1px solid #000",
    borderRadius: "50%"
  }
});

function Color() {
  const classes = useStyle();

  const [colors, setColors] = useState([
    {
      title: "Black",
      code: "#000"
    }
  ]);
  const [selected, setSelected] = useState(true);
  return (
    <List className={classes.fullWidth}>
      <ListItem>
        <Box variant="h3" fontWeight={600}>
          Color
        </Box>
      </ListItem>
      <ListItem>
        <List>
          {colors.map((e) => (
            <ListItem>{e.code}</ListItem>
          ))}
        </List>
      </ListItem>
    </List>
  );
}

export default Color;
