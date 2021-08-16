import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: 150,
    maxWidth: 700,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    zIndex: 1000,
    position: "absolute",
  },
  input: {
    width: "100%",
  },
  form: {
    marginTop: 100,
  },
  avatar: {
    height: 200,
    width: 500,
    backgroundSize: "30%",
    marginBottom: 25
  },
  uploadInput: {

  }
}));
