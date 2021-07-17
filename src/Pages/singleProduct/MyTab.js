import React, { useEffect, useState } from "react";
import {
  Link,
  Route,
  useRouteMatch,
  Switch,
  useLocation,
  generatePath
} from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import { List, ListItem, TableRow } from "@material-ui/core";
import MyTable from "./MyTable";
import Reviews from "./Reviews.js";
import { SINGLE_PRODUCT } from "../../routes.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  tablePanel: {
    background: "none",
    boxShadow: "none"
  },
  stars: {
    color: "#1266f1"
  }
}));

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

export default function MyTab({ singleData, setSingleData }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  let { url } = useRouteMatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.tablePanel}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            label="DESCRIPTION"
            {...a11yProps(0)}
            component={Link}
            to={generatePath(SINGLE_PRODUCT, {
              id: singleData.id
            })}
          />
          <Tab
            label="INFORMATION"
            {...a11yProps(1)}
            component={Link}
            to={
              generatePath(SINGLE_PRODUCT, {
                id: singleData.id
              }) + "/information"
            }
          />
          <Tab
            label="REVIEWS (1)"
            {...a11yProps(2)}
            component={Link}
            to={
              generatePath(SINGLE_PRODUCT, {
                id: singleData.id
              }) + "/review"
            }
          />
        </Tabs>
      </AppBar>

      <Switch>
        <Route
          path={generatePath(SINGLE_PRODUCT, {
            id: singleData.id
          })}
          exact
        >
          <Box>
            <Typography component="h1">Product Description</Typography>
            <Typography component="h6"> {singleData.category} </Typography>
            <Rating
              className={classes.stars}
              name="read-only"
              defaultValue={4}
              precision={0.5}
              readOnly
              className={classes.stars}
            />
            <Typography component="h4"> {singleData.price} $</Typography>
            <Typography component="p"> {singleData.description} </Typography>
          </Box>
        </Route>
        <Route
          path={
            generatePath(SINGLE_PRODUCT, {
              id: singleData.id
            }) + "/information"
          }
        >
          <Box>
            <MyTable />
          </Box>
        </Route>
        <Route
          path={
            generatePath(SINGLE_PRODUCT, {
              id: singleData.id
            }) + "/review"
          }
        >
          <Typography component="h1">Product Description</Typography>
          <Reviews singleData={singleData} setSingleData={setSingleData} />
        </Route>
      </Switch>

      {/* <TabPanel value={value} index={0} dir={theme.direction}>
        <Box>
          <Typography component="h1">Product Description</Typography>
          <Typography component="h6">SHIRTS</Typography>
          <Rating
            className={classes.stars}
            name="read-only"
            defaultValue={4}
            precision={0.5}
            readOnly
            className={classes.stars}
          />
          <Typography component="h4">12.99 $</Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim
            perferendis voluptates laboriosam. Distinctio, officia quis dolore
            quos sapiente tempore alias.
          </Typography>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <Box>
          <MyTable />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <Typography component="h1">Product Description</Typography>
        <Reviews singleData={singleData} setSingleData={setSingleData} />
      </TabPanel> */}
    </div>
  );
}
