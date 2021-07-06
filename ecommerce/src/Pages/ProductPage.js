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
    width: "100%",
    height: "42rem"
  },
  overly: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.7)"
  },
  coverContainer: {
    height: 400,
    overflow: "hidden"
  }
}));

function ProductPage() {
  let classes = useStyle();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Box className={classes.coverContainer}>
          <CardMedia
            className={classes.coverImg}
            image={Cover}
            title="Contemplative Reptile"
          >
            <Box className={classes.overly}></Box>
          </CardMedia>
        </Box>
        <Container>
          <Grid container>
            <SideBar />
            <ProductList />
          </Grid>
        </Container>
      </ThemeProvider>
      <Footer />
    </div>
  );
}

export default ProductPage;
