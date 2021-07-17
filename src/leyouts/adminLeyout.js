import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import React from "react";

function AdminLeyout({ children }) {
  return (
    <>
      <header>header</header>
      {children}
      <footer>
        <h1>Admi nFooter</h1>
      </footer>
    </>
  );
}

export default AdminLeyout;
