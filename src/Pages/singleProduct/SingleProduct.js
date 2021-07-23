import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ProductDes from "./ProductDes.js";
import MyTab from "./MyTab";
import { useLocation, useParams } from "react-router";
import ProductImg from "./ProductImg.js";
import API from "../../api.js";
import Loader from "../../Components/Loader.js";
import { serilizeSingleProduct } from "../../serializers/serilizeSingleProduct.js";

const useStyle = makeStyles((theme) => ({
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
  loading: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function SingleProduct({
  setAddedItem,
  addedItem,
  shopedItemData,
  setShopedItemData,
  productCount,
  setProductCount
}) {
  const classes = useStyle();
  const { pathname } = useLocation();

  const [value, setValue] = useState(2);
  const [selectProduct, setSelectProduct] = useState();
  const [singleData, setSingleData] = useState();
  const [loading, setLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    API.getAllData(`products/${id}`, "GET")
      .then((product) => {
        let serilizedProduct = serilizeSingleProduct(product);
        setSingleData(serilizedProduct);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Loader loading={loading}>
      {!!singleData && (
        <Container className={loading && classes.loading}>
          <Loader loading={loading}>
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
                  productCount={productCount}
                  setProductCount={setProductCount}
                />
                <Grid xs={12}>
                  <MyTab
                    singleData={singleData}
                    setSingleData={setSingleData}
                  />
                </Grid>
              </Grid>
            </Box>
          </Loader>
        </Container>
      )}
    </Loader>
  );
}

export default SingleProduct;
