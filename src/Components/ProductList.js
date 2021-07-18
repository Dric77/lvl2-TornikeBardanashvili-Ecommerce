import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import API from "../api.js";
import Cards from "./Cards";
import Loader from "./Loader.js";
import ProductHeader from "./ProductHeader";
import VerticalCards from "./VerticalCards";

const useStyle = makeStyles((theme) => ({
  cardList: {
    justifyContent: "flex-star",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 20
    }
  },
  fullWidth: {
    width: "100% !important"
  }
}));

function ProductList({ priceRange, pagination, setPagination }) {
  const classes = useStyle();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listStyle, setListStyle] = useState("gridView");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    API.getProducts(`products?limit=${pagination.perPage}`)
      .then((el) => setData(el))
      .finally(() => {
        setLoading(false);
        setPagination({
          currentPage: 1,
          totalProduct: data.length,
          perPage: 5,
          totalPage: data.length / 5
        });
      });
  }, []);

  let handllePage = (e, page) => {
    setCurrentPage(page);

    setLoading(true);
    setData([]);

    API.getProducts(`products?limit=${pagination.perPage}`)
      .then((el) => setData(el))
      .finally(() => {
        setLoading(false);
      });
    setPagination({
      ...pagination,
      currentPage: page
    });
  };

  return (
    <Grid container item xs={12} sm={8} lg={8}>
      <Container>
        <Box mb={3}>
          <ProductHeader
            setListStyle={setListStyle}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            handllePage={handllePage}
            pagination={pagination}
            setPagination={setPagination}
          />
        </Box>
        <Grid container spacing={5} className={classes.cardList}>
          <Loader loading={loading}>
            {!!data &&
              data.map((e) =>
                listStyle === "gridView" ? (
                  <Grid item xs={12} sm={8} md={8} lg={4}>
                    <Cards data={e} key={e.id} />
                  </Grid>
                ) : (
                  <Grid item xs={12} className={classes.fullWidth}>
                    <VerticalCards data={e} key={e.id} />
                  </Grid>
                )
              )}
          </Loader>
        </Grid>
        <Box mb={3}>
          <ProductHeader
            setListStyle={setListStyle}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            handllePage={handllePage}
          />
        </Box>
      </Container>
    </Grid>
  );
}

export default ProductList;
