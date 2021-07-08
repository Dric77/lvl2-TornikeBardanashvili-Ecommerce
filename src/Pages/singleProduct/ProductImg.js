import { Box, CardMedia, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

const useStyle = makeStyles({
  mb: {
    marginBottom: "1rem"
  },
  fullSize: {
    width: "100%",
    height: "100%"
  },
  fullWidth: {
    width: "100%",
    maxWidth: "100%"
  },
  img: {
    width: "100%",
    height: "30rem",
    backgroundSize: "70%"
  },
  greyBg: {
    backgroundColor: "#E4E4E4",
    borderRadius: ".6rem",
    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 7%), 0 2px 10px 0 rgb(0 0 0 / 7%)"
  },
  imgGroup: {
    width: "25%",
    backgroundColor: "#E4E4E4",
    margin: "1rem 1rem 1rem 0",
    borderRadius: ".4rem",
    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 7%), 0 2px 10px 0 rgb(0 0 0 / 7%)",
    cursor: "pointer",
    transition: "ease-in-out .2s",
    "&:hover": {
      boxShadow: "0 4px 7px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);"
    }
  },
  smallImg: {
    height: "9rem",
    backgroundSize: "60%"
  }
});

function ProductImg({ singleData }) {
  const classes = useStyle();

  const [currentImg, setCurrentImg] = useState(3);

  let handleImg = (activeImg) => {
    setCurrentImg(activeImg);
  };

  return (
    <Grid container item lg={6} md={12} className={classes.fullWidth}>
      <Grid item className={classes.fullSize}>
        <Grid
          container
          item
          lg={6}
          className={classes.fullWidth + " " + classes.greyBg}
        >
          <Grid item lg={12} className={classes.fullSize}>
            <CardMedia
              className={classes.img}
              image={singleData.imgGroup[currentImg]}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Grid container lg={12} wrap="nowrap">
            {singleData.imgGroup.map((img, index) => (
              <Grid key={index} item lg={3} className={classes.imgGroup}>
                <CardMedia
                  onMouseOver={() => handleImg(index)}
                  className={classes.smallImg}
                  image={img}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProductImg;
