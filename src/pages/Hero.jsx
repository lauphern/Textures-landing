import React from "react";
import { Grid, Typography, Tooltip, Paper, Container } from "@material-ui/core";

const Hero = props => {
  return (
    <Grid item xs={12} container className={props.classes.headerContainer}>
      <Container component="header" className={props.classes.header}>
        <Tooltip title={props.imagesList[0].credit}>
          <img
            className={props.classes.headerImg}
            src={props.imagesList[0].src}
            alt={props.imagesList[0].credit}
          />
        </Tooltip>
        <Paper elevation={0}>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </Paper>
      </Container>
    </Grid>
  );
};

export default Hero;
