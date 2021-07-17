import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Loader from "../../Components/Loader";
import { useState, useEffect } from "react";
import API from "../../api.js";
import { Button, CardMedia, Link as Mlink } from "@material-ui/core";
import Modal from "../../Components/Moadl";
import { Link } from "react-router-dom";
import { SINGLE_PRODUCT } from "../../routes.js";
import AddProductForm from "./AddProductForm.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  img: {
    width: "3rem",
    height: "3rem",
    backgroundSize: "70%".ModalFooter
  },
  imgRow: {
    width: "3rem",
    height: "3rem",
    paddingLeft: 60
  }
});

function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.getProducts("products", setProducts).finally(() => setLoading(false));
    console.log(products);
  }, []);

  let addproduct = () => {
    setOpenModal(true);
    window.scrollTo(0, 0);
  };

  let deleteProduct = (id) => {
    let newProducts = products.filter((el) => el.id != id);
    setProducts(newProducts);
  };

  return (
    <>
      <Modal
        MoadlHeader="add New product"
        ModalFooter="footer"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <AddProductForm
          products={products}
          setProducts={setProducts}
          setOpenModal={setOpenModal}
        />
      </Modal>

      <Loader loading={loading}>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left"></TableCell>
                <TableCell align="left">product Name</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">price</TableCell>
                <TableCell align="left">ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products &&
                products.map((product, index) => (
                  <TableRow key={product.id}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.imgRow}
                    >
                      <CardMedia
                        image={product.img}
                        title="Paella dish"
                        className={classes.img}
                        onClick={() => deleteProduct(product.id)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {product.title}
                    </TableCell>
                    <TableCell align="left">{product.category}</TableCell>

                    <TableCell align="left">{product.price}</TableCell>
                    <TableCell align="left">{product.id}</TableCell>
                    <TableCell>
                      <Mlink
                        component={Link}
                        underline="none"
                        target="_blank"
                        to={SINGLE_PRODUCT.replace(":id", product.id)}
                      >
                        Open Product Page
                      </Mlink>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Loader>
      <Button variant="contained" color="primary" onClick={addproduct}>
        Add New product
      </Button>
    </>
  );
}

export default Products;
