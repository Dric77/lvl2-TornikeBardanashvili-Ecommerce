import React from "react";
import { Container, Grid } from "@material-ui/core";
import MyDrawer from "./MyDrawer";
import { Route, Switch } from "react-router";
import { ADMIN } from "../../routes.js";
import { useStyles } from "./AdminStyle";
import Users from "./Users";
import Products from "./Products.js";
import Categories from "./Categories";

function Admin() {
  let classes = useStyles();

  const sideBarMenu = ["products", "users", "categories"];

  return (
    <div>
      <Grid container>
        <Grid item lg={2}>
          <MyDrawer sideBarMenu={sideBarMenu} />
        </Grid>
        <Grid item lg={10} sm={12}>
          <Container className={classes.container}>
            <Switch>
              <Route path={ADMIN + "/products"}>
                <Products />
              </Route>
              <Route path={ADMIN + "/users"}>
                <Users />
              </Route>
              <Route path={ADMIN + "/categories"}>
                <Categories />
              </Route>
            </Switch>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Admin;
