import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  Button,
  ListItemText,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { navigationBarStyles } from "./styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useDate from "../components/custom-hooks/useDate";

export default function TopNavigationbar() {
  const [open, setOpen] = useState(false);
  const classes = navigationBarStyles();
  const date = useDate();

  return (
    <>
      <AppBar color="primary" position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            aria-label="menu"
            data-testid="menu-button"
            color="inherit"
            onClick={() => setOpen((prev) => !prev)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Shop Bridge
          </Typography>

          <Typography className={classes.time}>
            {date.toLocaleTimeString()}
          </Typography>
        </Toolbar>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <List className={classes.navOpen}>
            <ListItem
              button
              component={NavLink}
              to="/"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem
              button
              component={NavLink}
              to="/products/add"
              onClick={() => setOpen(false)}
            >
              <ListItemText primary="Add Product" />
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
      <div className={classes.navigationSpace}></div>
    </>
  );
}
