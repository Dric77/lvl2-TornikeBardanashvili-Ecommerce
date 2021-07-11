import { Box, Grid, List, ListItem, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { PRODUCT_LIST } from "../routes.js";

function Home() {
  return (
    <Box height="100vh">
      <Grid container>
        <Grid item xs={12}>
          <Box mt={10}>
            <List>
              <ListItem alignItems="center">
                <Box
                  display="flex"
                  width="100%"
                  textAlign="center"
                  justifyContent="center"
                >
                  <Typography component="h3" variant="h3">
                    Home Page
                  </Typography>
                </Box>
              </ListItem>
              <ListItem>
                <Link to={PRODUCT_LIST}>Product List</Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
