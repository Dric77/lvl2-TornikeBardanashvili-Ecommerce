import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "2rem",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    alertMessage: {
      transition: "1s",
    },
  },
}));

export default function SeccessfulMessage({ deleteStatus, setDeleteStatus }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  useEffect(() => {
    let timeout;
    clearTimeout(timeout);
    setTimeout(() => setDeleteStatus(0), 1500);
  }, [deleteStatus]);

  return (
    <div className={classes.root}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert> */}
      {deleteStatus === 200 && (
        <Alert className={classes.alertMessage} severity="success">
          You delete seccesfully user
        </Alert>
      )}
    </div>
  );
}
