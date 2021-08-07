import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Route, useHistory, useLocation } from "react-router";
import API from "../api.js";
import { PRODUCT_LIST } from "../routes.js";
import { serialize } from "../serializers/serialize.js";
import Cards from "./Cards";
import Loader from "./Loader.js";
import ProductHeader from "./ProductHeader";
import VerticalCards from "./VerticalCards";

const useStyle = makeStyles((theme) => ({
  cardList: {
    justifyContent: "flex-star",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  fullWidth: {
    width: "100% !important",
  },
}));

function ProductList({ currentPage, setCurrentPage }) {
  const classes = useStyle();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [listStyle, setListStyle] = useState("gridView");
  // const [currentPage, setCurrentPage] = useState(1);
  let [pagination, setPagination] = useState({
    page: "",
    last_page: "",
    per_page: "",
    from: "",
    to: "",
    total: "",
  });

  const history = useHistory();

  useEffect(() => {
    window.scroll(0, 0);
  }, [currentPage]);

  let handllePage = (e, page) => {
    setCurrentPage(page);
    setLoading(true);
    history.push(PRODUCT_LIST.replace("1", page));
    API.getAllData(`products?page=${page}`)
      .then((el) => {
        setPagination({
          page: el.page,
          last_page: el.last_page,
          per_page: el.per_page,
          from: el.from,
          to: el.to,
          total: el.total,
        });
        let serilizedProducts = el.data.map((product) => serialize(product));
        setData([]);
        setData(serilizedProducts);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    API.getAllData("products")
      .then((el) => {
        setPagination({
          page: el.page,
          last_page: el.last_page,
          per_page: el.per_page,
          from: el.from,
          to: el.to,
          total: el.total,
        });
        let serilizedProducts = el.data.map((product) => serialize(product));
        setData(serilizedProducts);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Grid container item xs={12} sm={8} lg={8}>
      <Container>
        <Box mb={3}>
          <ProductHeader
            setListStyle={setListStyle}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            handllePage={handllePage}
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
            pagination={pagination}
          />
        </Box>
      </Container>
    </Grid>
  );
}

export default ProductList;
