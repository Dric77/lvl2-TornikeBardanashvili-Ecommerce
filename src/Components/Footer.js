import {
  Box,
  Button,
  Container,
  createMuiTheme,
  Grid,
  Link,
  List,
  ListItem,
  makeStyles,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import "typeface-roboto";
import theme from "../CutumTheme";
import MapIcon from "@material-ui/icons/Map";
import React from "react";

const useStyle = makeStyles((theme) => ({
  social: {
    backgroundColor: "#007bff",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center"
    }
  },
  socialTitle: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center"
    }
  },
  socialMediaIcons: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "& > *": {
      padding: "0 5px"
    },
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItems: "center"
    }
  },
  paragraph: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center"
    }
  },
  footerBottom: {
    backgroundColor: "#2E2E2E",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      alignItems: "center"
    }
  },
  mainGrid: {
    justifyContent: "center"
  },
  ul: {
    width: "auto",
    [theme.breakpoints.down("sm")]: {
      "& > *": {
        justifyContent: "center"
      }
    }
  },
  underline: {
    width: "70%",
    backgroundColor: "#6610f2",
    height: 4,
    marginTop: 5
  },
  bottomLine: {
    backgroundColor: "#252525"
  },
  button: {
    fontWeight: 200,
    fontSize: "0.9rem"
  },
  list: {
    paddingBottom: 0,
    paddingTop: 0
  },
  link: {
    color: "#fff"
  }
}));

function Footer() {
  const classes = useStyle();
  return (
    <footer>
      <ThemeProvider theme={theme}>
        <Box component="div" p={0.1} mt={3} className={classes.social}>
          <Container>
            <Grid container>
              <Grid item xs={12} sm={6} xs={12}>
                <Box
                  component="h4"
                  variant="h4"
                  fontFamily="Roboto,sans-serif"
                  fontWeight="small"
                  className={classes.socialTitle}
                >
                  Get Connected with us on social newtworks!
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                xs={12}
                className={classes.socialMediaIcons}
              >
                <FacebookIcon fontSize="small" />
                <TwitterIcon fontSize="small" />
                <GTranslateIcon fontSize="small" />
                <LinkedInIcon fontSize="small" />
                <InstagramIcon fontSize="small" />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box component="div" className={classes.footerBottom}>
          <Container>
            <Grid container className={classes.mainGrid}>
              <Grid item lg={3} md={3} sm={8} xs={12}>
                <List className={classes.ul}>
                  <ListItem>
                    <Box component="h4" color="#fff" fontSize={20}>
                      About me
                      <Box component="div" className={classes.underline}></Box>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      component="p"
                      fontFamily="Roboto,sans-serif"
                      color="#f8f9fa"
                      fontWeight={300}
                      fontSize="1.1rem"
                      lineHeight={1.8}
                      className={classes.paragraph}
                    >
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </Box>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={3} sm={8} xs={12}>
                <List className={classes.ul}>
                  <ListItem>
                    <Box component="h4" color="#fff" fontSize={20}>
                      Products
                      <Box component="div" className={classes.underline}></Box>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                    >
                      <Button color="secondary" className={classes.button}>
                        MDBootstrap
                      </Button>
                    </Box>
                  </ListItem>
                  <ListItem className={classes.list}>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                    >
                      <Button color="secondary" className={classes.button}>
                        MDBootstrap
                      </Button>
                    </Box>
                  </ListItem>
                  <ListItem className={classes.list}>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                    >
                      <Button color="secondary" className={classes.button}>
                        MDBootstrap
                      </Button>
                    </Box>
                  </ListItem>
                  <ListItem className={classes.list}>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                    >
                      <Button color="secondary" className={classes.button}>
                        MDBootstrap
                      </Button>
                    </Box>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={3} sm={8} xs={12}>
                <List className={classes.ul}>
                  <ListItem>
                    <Box component="h4" color="#fff" fontSize={20}>
                      Useful links
                      <Box component="div" className={classes.underline}></Box>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                    >
                      <Button color="secondary" className={classes.button}>
                        Your Account
                      </Button>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                    >
                      <Button color="secondary" className={classes.button}>
                        Your Account
                      </Button>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                    >
                      <Button color="secondary" className={classes.button}>
                        Your Account
                      </Button>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                    >
                      <Button color="secondary" className={classes.button}>
                        Your Account
                      </Button>
                    </Box>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={3} md={3} sm={8} xs={12}>
                <List className={classes.ul}>
                  <ListItem>
                    <Box component="h4" color="#fff" fontSize={20}>
                      Contacts
                      <Box component="div" className={classes.underline}></Box>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                      display="flex"
                      alignItems="center"
                    >
                      <MapIcon color="secondary" />
                      <Button color="secondary" className={classes.button}>
                        New York, Avenue Street 10
                      </Button>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                      display="flex"
                      alignItems="center"
                    >
                      <MapIcon color="secondary" />
                      <Button color="secondary" className={classes.button}>
                        New York, Avenue Street 10
                      </Button>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                      display="flex"
                      alignItems="center"
                    >
                      <MapIcon color="secondary" />
                      <Button color="secondary" className={classes.button}>
                        New York, Avenue Street 10
                      </Button>
                    </Box>
                  </ListItem>
                  <ListItem>
                    <Box
                      component="div"
                      fontFamily="Roboto,sans-serif"
                      fontWeight={400}
                      fontSize="0.9rem"
                      display="flex"
                      alignItems="center"
                    >
                      <MapIcon color="secondary" />
                      <Button color="secondary" className={classes.button}>
                        New York, Avenue Street 10
                      </Button>
                    </Box>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          component="div"
          className={classes.bottomLine}
          color="rgba(255,255,255,.6)"
          width="100%"
          height="50px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          © 2020 Copyright:
          <Link href="#" className={classes.link}>
            MDBootstrap.com
          </Link>
        </Box>
      </ThemeProvider>
    </footer>
  );
}

export default Footer;
