import React, { useEffect, useState } from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
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
  },
  disCountPrice: {
    color: "#ff3d71",
    fontSize: "1.2rem",
    fontWeight: 700
  },
  oldPrice: {
    color: "#9e9e9e",
    textDecoration: "line-through"
  }
});

function MyTable({
  singleData,
  setAddedItem,
  addedItem,
  shopedItemData,
  setShopedItemData,
  productCount,
  setProductCount
}) {
  const classes = useStyle();
  const [selectedValue, setSelectedValue] = useState("small");
  const [radioButton, setRadioButton] = useState("small");
  const [review, setReview] = useState(0);

  useEffect(() => {
    setShopedItemData({
      color: shopedItemData.color,
      quantity: productCount,
      size: radioButton,
      price: singleData.price
    });
  }, [productCount, radioButton, selectedValue]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handlleItem = () => {
    setAddedItem([...addedItem, singleData]);
  };
  let reviewCount = 0;
  const calculateReview = () => {
    singleData.review.forEach((el) => {
      reviewCount = reviewCount + el.reviewStar;
    });
    reviewCount = reviewCount / singleData.review.length;
  };

  calculateReview();

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
          defaultValue={reviewCount}
          precision={0.5}
          readOnly
        />
      </Grid>
      <Grid item lg={12}>
        {singleData.disCountPrice ? (
          <Typography className={classes.disCountPrice}>
            {singleData.disCountPrice}{" "}
          </Typography>
        ) : null}
        <Typography
          component="h6"
          className={singleData.disCountPrice ? classes.oldPrice : null}
        >
          {" "}
          ${singleData.price}{" "}
        </Typography>
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
            <Quantity value={productCount} setValue={setProductCount} />
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
              <Button
                variant="contained"
                color="secondary"
                onClick={handlleItem}
              >
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
