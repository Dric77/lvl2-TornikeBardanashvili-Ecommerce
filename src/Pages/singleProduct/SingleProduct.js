import {
  AppBar,
  Box,
  CardMedia,
  Container,
  Grid,
  makeStyles
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ProductDes from "./ProductDes.js";
import MyTab from "./MyTab";
import { useLocation, useParams } from "react-router";
import ProductImg from "./ProductImg.js";

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
  }
});

function SingleProduct({
  data,
  setAddedItem,
  addedItem,
  shopedItemData,
  setShopedItemData
}) {
  const classes = useStyle();
  const { pathname } = useLocation();

  const [value, setValue] = useState(2);
  const [selectProduct, setSelectProduct] = useState();
  // const [singleData, setSingleData] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(shopedItemData);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // useEffect(() => {
  //   let getSingleData = () => {
  //     let parsedId = parseInt(id);
  //     data.map((e) => {
  //       if (parsedId === e.id) {
  //         setSingleData();
  //       }
  //     });
  //   };
  // }, []);

  let singleData = {};

  let { id } = useParams();

  let getSingleData = () => {
    let parsedId = parseInt(id);
    data.map((e) => {
      if (parsedId === e.id) {
        singleData = e;
      }
    });
  };

  getSingleData();

  return (
    <>
      <Container>
        <Box
          component="h1"
          fontFamily="roboto"
          fontSize="2rem"
          textAlign="center"
          color="#4f4f4f"
          mt={10}
        >
          Product Page
        </Box>
        <Box mt={10}>
          <Grid container spacing={3}>
            <ProductImg
              singleData={singleData}
              setSelectProduct={setSelectProduct}
              setShopedItemData={setShopedItemData}
              shopedItemData={shopedItemData}
            />
            <ProductDes
              setAddedItem={setAddedItem}
              addedItem={addedItem}
              singleData={singleData}
              setSelectProduct={setSelectProduct}
              setShopedItemData={setShopedItemData}
              shopedItemData={shopedItemData}
            />
            <Grid xs={12}>
              <MyTab singleData={singleData} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default SingleProduct;
