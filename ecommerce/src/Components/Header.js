import React from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import shadows from "@material-ui/core/styles/shadows";

const useStyles = makeStyles((theme) => ({
  noneBg: {
    background: "none",
    boxShadow: "none"
  },
  textMainColor: {
    color: "#fff"
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" className={classes.noneBg}>
        <Toolbar>
          <Grid container direction="row" justify="end" alignItems="center">
            <Grid container item xs={4}>
              Logo
            </Grid>
            <Grid container item xs={8} justify="flex-end" alignItems="center">
              <ShoppingCartIcon />
              <Box component="span">Select</Box>
              <Typography variant="h6">News</Typography>
              <Typography variant="h6">Contact</Typography>
              <Button color="inherit">Sing in</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
