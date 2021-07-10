import {
  Box,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import React from "react";
import theme from "../CutumTheme";
import Header from "../Components/Header";
import ProductList from "../Components/ProductList";
import Cover from "../Imgs/Cover.jpg";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar/SideBar";

const useStyle = makeStyles(() => ({
  coverImg: {
    height: "400px"
  },
  overly: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.7)",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    fontSize: "1.8rem",
    color: "#fff"
  },
  coverContainer: {
    height: 400,
    overflow: "hidden"
  }
}));

function ProductPage({ data }) {
  let classes = useStyle();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box className={classes.coverContainer}>
          <CardMedia
            className={classes.coverImg}
            image={Cover}
            title="Contemplative Reptile"
          >
            <Box className={classes.overly}>
              <Box
                component="h1"
                variant="h1"
                display="flex"
                alignItems="center"
              >
                SHOP
              </Box>
            </Box>
          </CardMedia>
        </Box>
        <Container>
          <Grid container>
            <SideBar />
            <ProductList data={data} />
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default ProductPage;
