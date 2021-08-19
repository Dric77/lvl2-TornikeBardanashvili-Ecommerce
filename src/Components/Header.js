import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Grid,
  makeStyles,
  Select,
  ThemeProvider,
  Toolbar,
} from "@material-ui/core";
import { Link as Mlink } from "@material-ui/core";
import theme from "../CutumTheme";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useLocation } from "react-router-dom";
import { HOME, PRODUCT_LIST } from "../routes.js";
import Cart from "./Cart.js";
import AuthorizationBtns from "./AuthorizationBtns.js";
import AuthorizedUser from "./AuthorizedUser.js";
import { selectLoading, selectLogedin } from "../store/user/userSelectors";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles((theme) => ({
  noneBg: {
    background: "none",
    boxShadow: "none",
  },
  textMainColor: {
    color: "#fff",
  },
  bgColor: {
    backgroundColor: "#fff",
    color: "#343a40",
    transition: "ease .8s",
    height: "auto",
  },
  borderBtn: {
    fontSize: "0.7rem",
    border: "2px solid #ccc",
    padding: "7px 29px",
    borderRadius: "10rem",
  },
  mt: {
    marginTop: 20,
  },
  navContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  burgerMenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "flex-end",
    },
  },
  navBar: {
    alignItems: "center",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      transition: ".5s",
      transform: "translateY(-300px)",
    },
  },
  openNavBar: {
    [theme.breakpoints.down("sm")]: {
      transition: ".5s",
      transform: "translateY(0)",
      flexDirection: "column",
      textAlign: "center",
      fontSize: "1rem",
      paddingBottom: "15px",
    },
  },
  noWrap: {
    flexWrap: "nowrap",
  },
}));

function Header({ addedItem, setAddedItem, productCount }) {
  const classes = useStyles();
  const [navBarStyle, setNavBarStyle] = useState(false);
  const [navBar, setNavBar] = useState(classes.navBar);
  const [navBarOpen, setNavbarOpen] = useState(false);
  const isLogedin = useSelector(selectLogedin);
  const loading = useSelector(selectLoading);

  let { pathname } = useLocation();

  useEffect(() => {
    window.onscroll = (e) => {
      if (window.scrollY >= 60 && pathname === PRODUCT_LIST) {
        setNavBarStyle(true);
      } else {
        setNavBarStyle(false);
      }
    };
  }, []);

  let handlleNavBar = () => {
    if (navBarOpen) {
      setNavBar(classes.navBar);
      setNavbarOpen(false);
    } else {
      setNavBar(classes.openNavBar);
      setNavbarOpen(true);
    }
  };

  let closeNavbar = () => {
    setNavBar(classes.navBar);
    setNavbarOpen(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <ClickAwayListener onClickAway={closeNavbar}>
        <AppBar
            position="fixed"
            className={
              !navBarStyle && pathname === PRODUCT_LIST
                  ? classes.noneBg
                  : classes.bgColor
            }
        >
          <Toolbar className={classes.navContainer}>
            <Grid
                container
                direction="row"
                justify="end"
                className={classes.noWrap}
            >
              <Grid item xs={2}>
                <Box component="span" fontSize="large">
                  <Mlink
                      component={Link}
                      underline="none"
                      color="inherit"
                      to={PRODUCT_LIST}
                  >
                    Logo
                  </Mlink>
                </Box>
              </Grid>
              <Grid
                  container
                  item
                  sm={10}
                  lg={10}
                  xl={10}
                  spacing={2}
                  justify="flex-end"
                  alignItems="center"
                  className={navBar}
              >
                <Cart
                    addedItem={addedItem}
                    setAddedItem={setAddedItem}
                    productCount={productCount}
                />
                <Grid item>
                  <Box component="span">
                    <Select />
                  </Box>
                </Grid>
                <Grid item>
                  <Box variant="h6" fontWeight={200}>
                    News
                  </Box>
                </Grid>
                <Grid item>
                  <Box variant="h6" fontWeight={200}>
                    Contact
                  </Box>
                </Grid>
                <Loader loading={loading}>
                  {isLogedin ? <AuthorizedUser /> : <AuthorizationBtns />}
                </Loader>
              </Grid>
              <Grid
                  item
                  sm={2}
                  xs={2}
                  lg={0}
                  xl={0}
                  className={classes.burgerMenu}
              >
                <MenuIcon fontSize="large" onClick={handlleNavBar} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ClickAwayListener>
    </ThemeProvider>
  );
}

export default Header;
