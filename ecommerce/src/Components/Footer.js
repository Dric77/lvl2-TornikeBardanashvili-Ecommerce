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
import "typeface-roboto";
import theme from "../CutumTheme";
import MapIcon from "@material-ui/icons/Map";
import React from "react";

const useStyle = makeStyles({
  social: {
    backgroundColor: "#007bff",
    color: "#fff"
  },
  footerBottom: {
    backgroundColor: "#2E2E2E"
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
});

function Footer() {
  const classes = useStyle();
  return (
    <footer>
      <ThemeProvider theme={theme}>
        <Box component="div" p={0.1} className={classes.social}>
          <Container>
            <Box
              component="h4"
              variant="h4"
              fontFamily="Roboto,sans-serif"
              fontWeight="small"
            >
              Get Connected with us on social newtworks!
            </Box>
          </Container>
        </Box>
        <Box component="div" className={classes.footerBottom}>
          <Container>
            <Grid container lg={12}>
              <Grid item lg={3}>
                <List>
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
                    >
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </Box>
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={3}>
                <List>
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
              <Grid item lg={3}>
                <List>
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
              <Grid item lg={3}>
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
