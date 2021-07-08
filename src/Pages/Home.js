import { Box, Grid, List, ListItem } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { PRODUCT_LIST } from "../routes.js";

function Home() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box mt={10}>
            <List>
              <ListItem>
                <Link to={PRODUCT_LIST}>Product List</Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
