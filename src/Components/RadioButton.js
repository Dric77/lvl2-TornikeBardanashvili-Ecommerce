import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { FormControlLabel } from "@material-ui/core";

const GreenRadio = withStyles({
  root: {
    color: "#2a76f2",
    "&$checked": {
      color: "#2a76f2"
    }
  },
  checked: {}
})((props) => <Radio color="default" size="small" {...props} />);

export default function RadioButton({
  label,
  selectedValue,
  setSelectedValue
}) {
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <FormControlLabel
        label={label}
        control={
          <GreenRadio
            checked={selectedValue === label}
            onChange={handleChange}
            value={label}
            name={label}
            inputProps={{ "aria-label": label }}
          />
        }
      />
    </div>
  );
}
