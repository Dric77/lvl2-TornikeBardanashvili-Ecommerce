import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    width: 500,
    height: 500,
    backgroundColor: "#000",
  },
}));

function Categories() {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
      <h1>Categories Page</h1>
    </Box>
  );
}

export default Categories;
