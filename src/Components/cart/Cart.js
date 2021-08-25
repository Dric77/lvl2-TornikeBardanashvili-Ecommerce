import {
  Box,
  Button,
  CardMedia,
  Grid,
  List,
  ListItem,
  Popover,
  Typography
} from "@material-ui/core";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import RemoveIcon from "@material-ui/icons/Remove";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectProducts,
  selectTotalCount
} from "../../store/cart/cartSelectors";

const useStyles = makeStyles((theme) => ({
  addedItem: {
    backgroundColor: "#f44336",
    color: "#fff",
    textAlign: "center",
    fontWeight: 600,
    width: 25,
    height: 25,
    borderRadius: "10rem"
  },
  img: {
    width: 105,
    height: 105,
    backgroundSize: "100%"
  },
  removeItem: {
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#ff3d71",
    fontSize: "1rem",
    textAlign: "center",
    margin: "20px 50px",
    borderRadius: "2rem"
  }
}));

function Cart() {
  const classes = useStyles();
  const [totalPrice, setTotalPrice] = useState(0);

  const products = useSelector(selectProducts);
  const totoalCount = useSelector(selectTotalCount);

  return (
    <>
      <Grid item alignItems="center" justify="center" textAlign="center">
        <Box
          component="span"
          display="flex"
          justifyContent="flex"
          alignItems="flex"
        >
          <Box
            component="span"
            mr={1}
            fontSize="18px"
            className={classes.addedItem}
          >
            {totoalCount}
          </Box>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Button {...bindTrigger(popupState)}>
                  <ShoppingCartIcon color="inherit" />
                </Button>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center"
                  }}
                >
                  <Box pt={2}>
                    <List>
                      <ListItem key={0}>
                        <Typography component="h5" variant="h6">
                          Your Products
                        </Typography>
                      </ListItem>
                      {/* {
                        products.map(el => (
                              el.title
                        ))
                      } */}
                      <listItem>
                        <Box component="span">Total:</Box>
                        <Box component="span"> ${totalPrice} </Box>
                      </listItem>
                    </List>
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>
        </Box>
      </Grid>
    </>
  );
}

export default Cart;
