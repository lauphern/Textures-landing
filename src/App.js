import React, { useEffect } from "react";
import {
  CssBaseline,
  Grid,
  GridList,
  GridListTile,
  AppBar,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Tooltip,
  Paper,
  Container,
  Box,
  ButtonGroup,
  Button,
  Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const imagesList = [
  {
    src: "martin-sanchez-rFh890jKgcs-unsplash.jpg",
    credit: "Photo by Martin Sanchez on Unsplash",
    cols: 1,
    rows: 1
  },
  {
    src: "francesco-tommasini-PsdmADHMbvg-unsplash.jpg",
    credit: "Photo by Francesco Tommasini on Unsplash",
    cols: 1,
    rows: 1
  },
  {
    src: "dave-IXTG1_Tw2dM-unsplash.jpg",
    credit: "Photo by Dave on Unsplash",
    cols: 1,
    rows: 1,
    gridColumn: "2 / 4",
    gridRow: "1 / 3"
  },
  {
    src: "tomas-malik-UAVSczNLrCk-unsplash.jpg",
    credit: "Photo by Tomáš Malík on Unsplash",
    cols: 1,
    rows: 1
  },
  {
    src: "mohammad-ali-berenji-VcnNrujVwzM-unsplash.jpg",
    credit: "Photo by Mohammad Ali Berenji on Unsplash",
    cols: 2,
    rows: 1,
    gridColumn: "1 / 2",
    gridRow: "2 / 5"
  },
  {
    src: "raul-angel-9FvZfRKKfH8-unsplash.jpg",
    credit: "Photo by Raul Angel on Unsplash",
    cols: 1,
    rows: 1,
    gridColumn: "2 / 4",
    gridRow: "3 / 4"
  },
  {
    src: "diego-gonzalez-9wzPn3irQK8-unsplash.jpg",
    credit: "Photo by Diego González on Unsplash",
    cols: 1,
    rows: 1,
    gridColumn: "4 / 5",
    gridRow: "2 / 5"
  },
  {
    src: "alan-scales-1_WMZARl81c-unsplash.jpg",
    credit: "Photo by Alan Scales on Unsplash",
    cols: 1,
    rows: 1,
    gridColumn: "1 / 2",
    gridRow: "5 / 6"
  },
  {
    src: "curioso-photography-ZVzFWb2QjBc-unsplash.jpg",
    credit: "Photo by Curioso Photography on Unsplash",
    cols: 1,
    rows: 1,
    gridColumn: "2 / 4",
    gridRow: "4 / 6"
  },
  {
    src: "eriks-abzinovs-WijyiAvWV8E-unsplash.jpg",
    credit: "Photo by Eriks Abzinovs on Unsplash",
    cols: 1,
    rows: 2,
    gridColumn: "4 / 5",
    gridRow: "5 / 6"
  },
  {
    src: "jade-stephens-LsrMOCtnDe4-unsplash.jpg",
    credit: "Photo by Jade Stephens on Unsplash",
    cols: 1,
    rows: 1
  },
  {
    src: "elizabeth-lies-T9Gsevu_N8Y-unsplash.jpg",
    credit: "Photo by elizabeth lies on Unsplash",
    cols: 1,
    rows: 1,
    gridColumn: "2 / 4",
    gridRow: "6 / 8"
  },
  {
    src: "ivan-bandura-Cdr1ryVJyQA-unsplash.jpg",
    credit: "Photo by Ivan Bandura on Unsplash",
    cols: 1,
    rows: 1
  },
  {
    src: "pawel-czerwinski-UmzGrVna1P0-unsplash.jpg",
    credit: "Photo by Paweł Czerwiński on Unsplash",
    cols: 1,
    rows: 1
  },
  {
    src: "julius-drost-Yq52YU-GrbE-unsplash.jpg",
    credit: "Photo by Julius Drost on Unsplash",
    cols: 1,
    rows: 1
  }
];

const useStyles = makeStyles(theme => ({
  nav: {
    height: "5vh",
    padding: "0 10vw",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navTitle: {
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  mainMenu: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
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

function parallaxEffect() {
  let btnGroup = document.getElementsByClassName("btn-group")[0];
  let backgroundImages = document.querySelectorAll(".btn-menu > span > div");
  let overlays = document.querySelectorAll(".overlay");
  btnGroup.addEventListener("mousemove", e => {
    let pageX = e.clientX - window.innerWidth / 2;
    let pageY = e.clientY - window.innerHeight / 2;
    backgroundImages.forEach(div => {
      div.style.transform =
        "translateX(-" +
        (50 + pageX / 25) +
        "%) translateY(-" +
        (50 + pageY / 25) +
        "%)";
    });
    overlays.forEach(div => {
      div.style.transform =
        "translateX(-" +
        (50 - pageX / 25) +
        "%) translateY(-" +
        (50 - pageY / 25) +
        "%)";
    });
  });
}

function App() {
  const classes = useStyles();
  let imagesCopy = [...imagesList].slice(1, imagesList.length);
  let tiles = imagesCopy.slice(0, imagesCopy.length - (imagesCopy.length % 3));
  useEffect(() => {
    parallaxEffect();
  });
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AppBar className={classes.nav}>
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
              <Typography
                className={classes.navTitle}
                variant="h6"
                align="center"
              >
                Textures
              </Typography>
              <Typography variant="caption" align="center">
                MaterialUI demo
              </Typography>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            <Container
              disableGutters
              className={`${classes.headerContainer} ${classes.mainMenu}`}
            >
              <ButtonGroup
                variant="text"
                color="primary"
                aria-label="text primary button group"
                fullWidth
                size="small"
                className="btn-group"
              >
                <Button className="btn-menu">
                  One
                  <div></div>
                  <div className="overlay"></div>
                </Button>
                <Button className="btn-menu">
                  Two
                  <div></div>
                  <div className="overlay"></div>
                </Button>
                <Button className="btn-menu">
                  Three
                  <div></div>
                  <div className="overlay"></div>
                </Button>
              </ButtonGroup>
            </Container>
          </Grid>
          <Grid item xs={12} container className={classes.headerContainer}>
            <Container component="header" className={classes.header}>
              <Tooltip title={imagesList[0].credit}>
                <img
                  className={classes.headerImg}
                  src={imagesList[0].src}
                  alt={imagesList[0].credit}
                />
              </Tooltip>
              <Paper elevation={0}>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </Paper>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <GridList
              cellHeight={160}
              className={classes.gridList}
              cols={3}
              spacing={10}
            >
              {tiles.map(tile => (
                <GridListTile
                  style={{
                    gridColumn: tile.gridColumn || null,
                    gridRow: tile.gridRow || null,
                    width: "100% !important",
                    height: "100% !important"
                  }}
                  key={tile.src}
                  cols={tile.cols || 1}
                  rows={tile.rows || 1}
                >
                  <img src={tile.src} alt={tile.credit} />
                </GridListTile>
              ))}
            </GridList>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;
