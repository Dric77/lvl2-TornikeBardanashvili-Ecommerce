import { createMuiTheme } from "@material-ui/core";
import "typeface-roboto";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF0000"
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
  }
});

console.log(theme.shadows[0]);

export default theme;
