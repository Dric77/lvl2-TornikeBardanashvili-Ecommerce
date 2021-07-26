import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 150,
    maxWidth: 700
  },
  input: {
    width: "100%"
  },
  errorMessage: {
    marginBottom: 25,
    transition: "1s"
  },
  loading: {
    opacity: 0.7
  }
}));
