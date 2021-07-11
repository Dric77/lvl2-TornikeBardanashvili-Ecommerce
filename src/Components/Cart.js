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

function Cart({ addedItem, setAddedItem, productCount }) {
  const classes = useStyles();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    getTotalPrice(addedItem);
  }, [addedItem]);

  let getTotalPrice = (item) => {
    //use reduce
    let priceCount = 0;
    item.map((product) => {
      if (!!product.price) {
        let parsedPrice = parseInt(product.price);
        priceCount = priceCount + parsedPrice;
        priceCount = priceCount * productCount;
        setTotalPrice(priceCount);
      } else {
        priceCount = 0;
        setTotalPrice(0);
      }
    });
  };
  let tmp = [];
  let removeItem = (index) => {
    tmp = addedItem
      .slice(0, index)
      .concat(addedItem.slice(index + 1, addedItem.length));
    setAddedItem(tmp);
  };

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
            {productCount}
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
                      {addedItem
                        ? addedItem.map((product, index) => (
                            <ListItem key={index}>
                              <Box component="div" display="flex">
                                <CardMedia
                                  image={product.img}
                                  className={classes.img}
                                />
                                <Box display="flex" flexDirection="column">
                                  <Box
                                    display="flex"
                                    flexDirection="column"
                                    ml={2}
                                  >
                                    <Typography component="h5">
                                      {product.title}
                                    </Typography>
                                    <Typography component="h5">
                                      {product.price}
                                    </Typography>
                                  </Box>
                                  <Box fontSize="1rem" ml={2}>
                                    Quantity: {productCount}
                                  </Box>
                                  <Box
                                    component="div"
                                    className={classes.removeItem}
                                    mt={2}
                                  >
                                    <RemoveIcon
                                      color="inherit"
                                      onClick={() => removeItem(index)}
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </ListItem>
                          ))
                        : null}
                      <ListItem>
                        <Box component="span">Total:</Box>
                        <Box component="span"> ${totalPrice} </Box>
                      </ListItem>
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
