import React from "react";
import { Checkbox, FormControlLabel, withStyles } from "@material-ui/core";

function MyCheckbox({ label, value, checkStaus }) {
  const BlueCheckbox = withStyles({
    root: {
      color: "#1266f1",
      "&$checked": {
        color: "#1266f1"
      }
    },
    checked: {}
  })((props) => <Checkbox color="default" {...props} />);
  return (
    <>
      <FormControlLabel
        value={value}
        label={label}
        labelPlacement={value}
        checked={checkStaus}
        control={<BlueCheckbox fontSize="small" />}
      />
    </>
  );
}

export default MyCheckbox;
