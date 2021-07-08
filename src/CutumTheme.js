import { createMuiTheme } from "@material-ui/core";
import "typeface-roboto";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4285f4"
    },
    secondary: {
      main: "#f8f9fa"
    },
    shadows: "none"
  },
  props: {
    MuiCheckbox: {
      color: "primary"
    }
  },
  overrides: {
    MuiTimeline: {
      root: {
        backgroundColor: "#000"
      }
    }
  },
  typography: {
    fontFamily: "Roboto,sans-serif"
  },
  box: {
    fontFamily: "Roboto,sans-serif"
  }
});

export default theme;
