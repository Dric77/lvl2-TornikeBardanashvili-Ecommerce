import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    margin: " 60px 0",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Loader({ loading, children }) {
  const classes = useStyles();

  if (!!loading) {
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }
  return children;
}
