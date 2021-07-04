import { createMuiTheme } from "@material-ui/core";
import Fonts from "./Fonts/FontFamily";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF0000"
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
  }
});

console.log(theme.shadows[0]);

export default theme;
