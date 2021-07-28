import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import { NavLink, Link as RouterLink } from "react-router-dom";
import { Box, Card, CardMedia, Grid, Link } from "@material-ui/core";
import { ADMIN, PRODUCT_LIST } from "../../routes.js";
import { useStyles } from "./MyDrawerStyle";
import AuthContext from "../../Components/context/auth-context.js";

function MyDrawer({ sideBarMenu, window }) {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const ctx = useContext(AuthContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {sideBarMenu.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <Link
              underline="none"
              component={NavLink}
              to={ADMIN + "/" + text}
              activeClassName="selected"
            >
              {text.toUpperCase()}
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" noWrap>
              Admin Panel
            </Typography>
            <Box display="flex" alignItems="center">
              {ctx.userData && (
                <>
                  <Typography variant="h6" noWrap>
                    {ctx.userData.name}
                  </Typography>
                  <Box
                    component={CardMedia}
                    image={ctx.userData.avatar}
                    width={50}
                    height={50}
                    ml={2}
                  />
                  <RouterLink to={PRODUCT_LIST}>
                    <Box ml={2} color="secondary.main">
                      {" "}
                      Back to product list{" "}
                    </Box>
                  </RouterLink>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

MyDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default MyDrawer;
