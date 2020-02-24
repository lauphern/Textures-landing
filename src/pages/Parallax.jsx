import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import React from "react";
import { Grid, Paper } from "@material-ui/core";

const quotes = [
  { offset: 0.3, speed: 0.1, text: "you tell me to quiet down cause" },
  { offset: 0.36, speed: 0.5, text: "my opinions make me less beautiful" },
  {
    offset: 0.42,
    speed: 1,
    text: "but i was not made with a fire in my belly"
  },
  { offset: 0.48, speed: 0.5, text: "so i could be put out" },
  {
    offset: 0.54,
    speed: 0.1,
    text: "i was not made with a lightness on my tongue"
  },
  { offset: 0.6, speed: 0.5, text: "so i could be easy to swallow" },
  { offset: 0.66, speed: 1, text: "i was made heavy" },
  { offset: 0.72, speed: 0.5, text: "half blade and half silk" },
  { offset: 0.78, speed: 0.1, text: "difficult to forget and not easy" },
  { offset: 0.84, speed: 0.5, text: "for the mind to follow" },
  { offset: 0.9, speed: 1, text: "- rupi kaur" }
];

const TextLayer = props => {
  return (
    <ParallaxLayer
      offset={props.offset}
      speed={props.speed}
      style={{ zIndex: 1 }}
    >
      <Paper
        elevation={3}
        style={{ display: "inline", float: "right", marginRight: "15vw" }}
      >
        <em>{props.children}</em>
      </Paper>
    </ParallaxLayer>
  );
};

const ParallaxPage = props => {
  return (
    <Grid item xs={12} container>
      <Parallax
        pages={1.5}
        style={{
          backgroundImage: `url(${props.imagesList[15].src})`,
          backgroundSize: "cover"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0
          }}
        ></div>
        {quotes.map(q => (
          <TextLayer offset={q.offset} speed={q.speed}>
            {q.text}
          </TextLayer>
        ))}
        <ParallaxLayer offset={0.1} speed={1.5}>
          <img
            src={props.imagesList[10].src}
            alt={props.imagesList[10].credit}
            style={{ marginLeft: "15vw" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.7} speed={2}>
          <img
            src={props.imagesList[5].src}
            alt={props.imagesList[5].credit}
            style={{ float: "right", marginRight: "10vw" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={2.5}>
          <img
            src={props.imagesList[2].src}
            alt={props.imagesList[2].credit}
            style={{ marginLeft: "5vw" }}
          />
        </ParallaxLayer>
      </Parallax>
    </Grid>
  );
};

export default ParallaxPage;
