import { Box, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Children } from "react";

const useStyle = makeStyles((theme) => ({
  modalOpen: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#c5c5c559",
    position: "fixed",
    zIndex: 1000,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modalclose: {
    display: "none"
  },
  moadlHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#4285f4",
    color: "#fff",
    marginBottom: 5
  },
  modalContainer: {
    maxWidth: 400,
    minWidth: 250,
    width: 400,
    height: "auto",
    backgroundColor: "#fff"
  },
  modalContent: {
    display: "flex",
    justifyContent: "center",
    padding: 10
  },
  modalFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#4285f4",
    color: "#fff",
    marginBottom: 5
  }
}));

function Moadl({
  MoadlHeader,
  ModalFooter,
  children,
  openModal,
  setOpenModal
}) {
  const classes = useStyle();

  let closeModal = () => {
    setOpenModal(false);
  };

  return (
    <Box className={openModal ? classes.modalOpen : classes.modalclose}>
      <Grid container className={classes.modalContainer}>
        <Grid item lg={12} className={classes.moadlHeader}>
          {MoadlHeader}
          <Button onClick={closeModal} color="secondary">
            X
          </Button>
        </Grid>
        <Grid item lg={12} className={classes.modalContent}>
          {" "}
          {children}{" "}
        </Grid>
        <Grid item lg={12} className={classes.modalFooter}>
          {ModalFooter}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Moadl;
