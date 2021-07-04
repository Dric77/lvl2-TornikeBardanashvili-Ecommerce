import {
  Box,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  ThemeProvider,
  withWidth
} from "@material-ui/core";
import React from "react";
import theme from "../CutumTheme";
import Header from "../Components/Header";
import ProductList from "../Components/ProductList";
import SideBar from "../Components/SideBar";
import Cover from "../Imgs/Cover.jpg";
import Footer from "../Components/Footer";

const useStyle = makeStyles(() => ({
  coverImg: {
    width: "100%",
    height: "668px"
  },
  coverContainer: {
    height: 400,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,.7)"
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
          />
        </Box>
        <Container>
          <Grid container>
            <SideBar />
            <ProductList />
          </Grid>
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default ProductPage;
