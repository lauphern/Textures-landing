import React from "react";
import {
  CssBaseline,
  Grid,
  AppBar,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Tooltip,
  Paper,
  Container,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const imagesList = [
  {
    src: "francesco-tommasini-PsdmADHMbvg-unsplash.jpg",
    credit: "Photo by Francesco Tommasini on Unsplash"
  },
  { src: "dave-IXTG1_Tw2dM-unsplash.jpg", credit: "Photo by Dave on Unsplash" },
  {
    src: "tomas-malik-UAVSczNLrCk-unsplash.jpg",
    credit: "Photo by Tomáš Malík on Unsplash"
  },
  {
    src: "mohammad-ali-berenji-VcnNrujVwzM-unsplash.jpg",
    credit: "Photo by Mohammad Ali Berenji on Unsplash"
  },
  {
    src: "raul-angel-9FvZfRKKfH8-unsplash.jpg",
    credit: "Photo by Raul Angel on Unsplash"
  },
  {
    src: "diego-gonzalez-9wzPn3irQK8-unsplash.jpg",
    credit: "Photo by Diego González on Unsplash"
  },
  {
    src: "alan-scales-1_WMZARl81c-unsplash.jpg",
    credit: "Photo by Alan Scales on Unsplash"
  },
  {
    src: "curioso-photography-ZVzFWb2QjBc-unsplash.jpg",
    credit: "Photo by Curioso Photography on Unsplash"
  },
  {
    src: "eriks-abzinovs-WijyiAvWV8E-unsplash.jpg",
    credit: "Photo by Eriks Abzinovs on Unsplash"
  },
  {
    src: "jade-stephens-LsrMOCtnDe4-unsplash.jpg",
    credit: "Photo by Jade Stephens on Unsplash"
  },
  {
    src: "elizabeth-lies-T9Gsevu_N8Y-unsplash.jpg",
    credit: "Photo by elizabeth lies on Unsplash"
  },
  {
    src: "ivan-bandura-Cdr1ryVJyQA-unsplash.jpg",
    credit: "Photo by Ivan Bandura on Unsplash"
  },
  {
    src: "pawel-czerwinski-UmzGrVna1P0-unsplash.jpg",
    credit: "Photo by Paweł Czerwiński on Unsplash"
  },
  {
    src: "julius-drost-Yq52YU-GrbE-unsplash.jpg",
    credit: "Photo by Julius Drost on Unsplash"
  },
  {
    src: "martin-sanchez-rFh890jKgcs-unsplash.jpg",
    credit: "Photo by Martin Sanchez on Unsplash"
  }
];

const useStyles = makeStyles({
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
  }
});

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AppBar>
              <Typography varian="h6">Menu</Typography>
            </AppBar>
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
        </Grid>
      </div>
    </>
  );
}

export default App;
