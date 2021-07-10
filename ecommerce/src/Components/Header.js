import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  ThemeProvider,
  Toolbar,
  Typography
} from "@material-ui/core";
import theme from "../CutumTheme";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

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
    color: "#343a40",
    transition: "ease .8s"
  },
  borderBtn: {
    fontSize: "0.7rem",
    border: "2px solid #ccc",
    padding: "7px 29px",
    borderRadius: "10rem"
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
    <ThemeProvider theme={theme}>
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
                <Box variant="h6" fontWeight={200}>
                  Contact
                </Box>
              </Grid>
              <Grid item>
                <Button color="inherit" className={classes.borderBtn}>
                  Sing in
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
