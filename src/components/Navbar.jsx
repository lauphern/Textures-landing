import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, AppBar, Typography, Link } from "@material-ui/core";

const NavBar = props => {
  return (
    <Grid item xs={12}>
      <AppBar className={props.classes.nav}>
        <Typography variant="caption" align="center">
          <Link
            href="https://github.com/lauphern/Textures-landing.git"
            color="inherit"
            target="_blank"
            rel="noopener"
          >
            Github
          </Link>
        </Typography>
        <Typography variant="h6" align="center">
          <NavLink className={props.classes.navTitle} to="/">
            Textures
          </NavLink>
        </Typography>
        <Typography variant="caption" align="center">
          MaterialUI demo
        </Typography>
      </AppBar>
    </Grid>
  );
};

export default NavBar;
