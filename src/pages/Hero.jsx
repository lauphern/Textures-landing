import React from "react";
import {
  Grid,
  Typography,
  Tooltip,
  Container,
  Box
} from "@material-ui/core";

const Hero = props => {
  return (
    <Grid item xs={12} container className={props.classes.headerContainer}>
      <Tooltip title={props.imagesList[16].credit} placement="right">
        <Container
          disableGutters
          maxWidth={false}
          component="header"
          className={props.classes.header}
        >
          <Typography variant="subtitle1">
            "But I don't want comfort. I want God, I want poetry, I want real
            danger, I want freedom, I want goodness. I want sin."
            <br /> "In fact," said Mustapha Mond, "you're claiming the right to
            be unhappy."
            <br />
            "All right then," said the Savage defiantly, "I'm claiming the right
            to be unhappy." <br />
            <Box fontWeight="fontWeightBold">-Brave New World</Box>
          </Typography>
        </Container>
      </Tooltip>
    </Grid>
  );
};

export default Hero;
