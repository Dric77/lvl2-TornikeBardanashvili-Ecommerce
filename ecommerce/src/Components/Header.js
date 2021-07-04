import React, { useEffect, useState } from "react";
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
  },
  bgColor: {
    backgroundColor: "#fff",
    color: "#000",
    transition: "ease .8s"
  }
}));

function Header() {
  const classes = useStyles();

  const [navBarStyle, setNavBarStyle] = useState(false);

  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY >= 60) {
        setNavBarStyle(true);
      } else {
        setNavBarStyle(false);
      }
    };
  });

  return (
    <div>
      <AppBar
        position="fixed"
        className={navBarStyle ? classes.bgColor : classes.noneBg}
      >
        <Toolbar>
          <Grid container direction="row" justify="end" alignItems="center">
            <Grid container item xs={4}>
              Logo
            </Grid>
            <Grid
              container
              item
              xs={8}
              spacing={2}
              justify="flex-end"
              alignItems="center"
            >
              <Grid item>
                <ShoppingCartIcon />
              </Grid>
              <Grid item>
                <Box component="span">Select</Box>
              </Grid>
              <Grid item>
                <Typography variant="h6">News</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Contact</Typography>
              </Grid>
              <Grid item>
                <Button color="inherit">Sing in</Button>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
