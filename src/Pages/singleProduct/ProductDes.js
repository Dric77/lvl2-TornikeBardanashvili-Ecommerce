import React, { Component, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  InputLabel,
  makeStyles,
  Radio,
  TextField,
  Typography
} from "@material-ui/core";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import Rating from "@material-ui/lab/Rating";
import Quantity from "../../Components/Quantity.js";
import RadioButtons from "../../Components/RadioButton.js";

const useStyle = makeStyles({
  mb: {
    marginBottom: "1rem"
  },
  emptyGrid: {
    height: "5rem"
  },
  reiting: {
    display: "flex",
    flexDirection: "column",
    cursor: "pointer"
  },
  stars: {
    color: "#1266f1"
  },
  title: {
    color: "#4f4f4f"
  },
  radioButton: {
    fontSize: "10px"
  },
  brBottom: {
    borderBottom: ".5px solid #4f4f4f2e"
  }
});

function MyTable({ singleData }) {
  const classes = useStyle();

  const [selectedValue, setSelectedValue] = useState("small");
  const [radioButton, setRadioButton] = useState("small");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Grid container item lg={6} md={12} spacing={2}>
      <Grid item lg={12}>
        <Typography component="h3" variant="h6" className={classes.title}>
          {singleData.title}
        </Typography>
      </Grid>
      <Grid item lg={12}>
        <Box>SHIRTS</Box>
      </Grid>
      <Grid item lg={12}>
        <Rating
          className={classes.stars}
          name="read-only"
          defaultValue={singleData.review}
          precision={0.5}
          readOnly
        />
      </Grid>
      <Grid item lg={12}>
        <Typography component="h6"> ${singleData.price} </Typography>
      </Grid>
      <Grid item lg={12}>
        <Typography component="p" className={classes.mb}>
          <Box component="span" fontWeight={300}>
            {singleData.description}
          </Box>
        </Typography>
      </Grid>
      <Grid item lg={12} className={classes.brBottom}>
        <Grid container item className={classes.mb}>
          <Grid lg={4}>
            <Typography component="h3">
              <Box component="span" fontWeight={500}>
                Model
              </Box>
            </Typography>
          </Grid>
          <Grid lg={8}>
            <Typography component="h6">
              <Box component="span" fontWeight={300}>
                {singleData.model}
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid container item className={classes.mb}>
          <Grid lg={4}>
            <Typography component="h3">
              <Box component="span" fontWeight={500}>
                Color
              </Box>
            </Typography>
          </Grid>
          <Grid lg={8}>
            <Typography component="h6">
              <Box component="span" fontWeight={300}>
                {singleData.color}
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Grid container item className={classes.mb}>
          <Grid lg={4}>
            <Typography component="h3">
              <Box component="span" fontWeight={500}>
                Delivery
              </Box>
            </Typography>
          </Grid>
          <Grid lg={8}>
            <Typography component="h6">
              <Box component="span" fontWeight={300}>
                {singleData.delivery}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item spacing={3}>
        <Grid item lg={4}>
          <Box display="flex" flexDirection="column">
            <Typography component="h6">Quantity</Typography>
            <Quantity />
          </Box>
        </Grid>
        <Grid item lg-={8}>
          <Box display="flex" flexDirection="column">
            <Typography component="h6">Select Size</Typography>
            <Box display="flex">
              <RadioButtons
                label="small"
                selectedValue={radioButton}
                setSelectedValue={setRadioButton}
                className={classes.radioButton}
              />
              <RadioButtons
                label="Medium"
                selectedValue={radioButton}
                setSelectedValue={setRadioButton}
              />
              <RadioButtons
                label="Large"
                selectedValue={radioButton}
                setSelectedValue={setRadioButton}
              />
            </Box>
          </Box>
        </Grid>
        <Grid container item lg={12}>
          <Grid item lg={2}>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </Grid>
          <Grid item lg={6}>
            <Box ml={1}>
              <Button variant="contained" color="secondary">
                ADD TO CART
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid lg={12} className={classes.emptyGrid}></Grid>
      </Grid>
    </Grid>
  );
}

export default MyTable;
