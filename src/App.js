import React from "react";
import { Switch, Route } from "react-router-dom";
import { CssBaseline, Grid } from "@material-ui/core";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";

import NavBar from "./components/Navbar";
import Hero from "./pages/Hero";
import Home from "./pages/Home";
import ImageGrid from "./pages/ImageGrid";
import ParrallaxPage from "./pages/Parallax";

import { imagesList } from "./data";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff867c" }
    // secondary: {
    //   main: "#f44336"
    // }
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#ff867c"
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: "#ff867c",
        padding: "5px 10px",
        fontWeight: "bold",
        color: "#fff"
      }
    }
  }
});

const useStyles = makeStyles(theme => ({
  nav: {
    height: "5vh",
    padding: "0 10vw",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white"
  },
  navTitle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    textDecoration: "none",
    color: "white"
  },
  mainMenu: {
    height: "100vh",
    display: "flex",
    justifyContent: "center"
  },
  headerContainer: {
    width: "100vw"
  },
  header: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerImg: {
    width: "50%"
  },
  gridList: {
    width: "100%",
    display: "grid",
    gridTemplateRows: "repeat(7, 200px)",
    gridTemplateColumns: "repeat(4, 1fr)"
  }
}));

function App() {
  const classes = useStyles();
  let imagesCopy = [...imagesList].slice(1, imagesList.length -1);
  let tiles = imagesCopy.slice(0, imagesCopy.length - (imagesCopy.length % 3));

  return (
    <>
      <CssBaseline />
      <div className="App">
        <ThemeProvider theme={theme}>
          <Grid container>
            <NavBar classes={classes} />
            <Switch>
              <Route exact path="/">
                <Home classes={classes} />
              </Route>
              <Route path="/hero">
                <Hero classes={classes} imagesList={imagesList} />
              </Route>
              <Route path="/image-grid">
                <ImageGrid classes={classes} tiles={tiles} />
              </Route>
              <Route path="/parallax">
                <ParrallaxPage classes={classes} imagesList={imagesList} />
              </Route>
            </Switch>
          </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
