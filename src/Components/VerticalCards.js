import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  createMuiTheme,
  makeStyles,
  Typography
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles({
  card: {
    height: "auto",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    boxShadow: "none",
    borderRadius: "5px"
  },
  root: {
    maxWidth: "100%",
    width: "100%",
    height: 300,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  media: {
    height: "95%",
    margin: "14px",
    width: "auto",
    backgroundSize: "100%",
    transition: "ease 0.2s",
    "&:hover": {
      transform: "scale(1.1)"
    }
  },
  imgBg: {
    width: "100%",
    height: "100%",
    backgroundColor: "#e4e4e4",
    overflow: "hidden",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "#4f4f4f"
  },
  title: {
    fontSize: "2rem",
    textTransform: "uppercase"
  }
});

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto,sans-serif"
  },
  pallete: {
    main: {
      error: {
        color: "#dc3545"
      }
    }
  }
});

function VerticalCards({ data }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Card className={classes.card}>
        <CardActionArea className={classes.root}>
          <Box className={classes.imgBg}>
            <CardMedia
              component="img"
              className={classes.media}
              image={data.img}
              title="Contemplative Reptile"
            />
            <ThemeProvider theme={theme}>
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  component="h1"
                  className={classes.title}
                >
                  {data.title}
                </Typography>
                {!!data.disCountPrice ? (
                  <Box
                    display="flex"
                    flexDirection="column"
                    gutterBottom
                    component="strong"
                  >
                    <Box
                      component="span"
                      fontSize="1.3rem"
                      mb={0.5}
                      color="error"
                    >
                      {" "}
                      ${data.disCountPrice}
                    </Box>
                    <Box component="span" fontSize="1rem">
                      {" "}
                      ${data.price}
                    </Box>
                  </Box>
                ) : (
                  <Box fontSize="1.3rem" gutterBottom component="strong">
                    ${data.price}
                  </Box>
                )}
              </CardContent>
            </ThemeProvider>
          </Box>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  );
}

export default VerticalCards;
