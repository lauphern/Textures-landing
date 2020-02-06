import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Container, ButtonGroup, Button } from "@material-ui/core";

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
        (10 + pageX / 100) +
        "%) translateY(-" +
        (10 + pageY / 100) +
        "%)";
    });
    overlays.forEach(div => {
      div.style.transform =
        "translateX(-" +
        (10 - pageX / 100) +
        "%) translateY(-" +
        (10 - pageY / 100) +
        "%)";
    });
  });
}

const Home = props => {
  useEffect(() => {
    parallaxEffect();
  });
  return (
    <Grid item xs={12}>
      <Container
        disableGutters
        className={`${props.classes.headerContainer} ${props.classes.mainMenu}`}
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
            <NavLink to="/hero">One</NavLink>
            <div></div>
            <div className="overlay"></div>
          </Button>
          <Button className="btn-menu">
            <NavLink to="/image-grid">Two</NavLink>
            <div></div>
            <div className="overlay"></div>
          </Button>
          <Button className="btn-menu">
            <NavLink to="/hero">Three</NavLink>
            <div></div>
            <div className="overlay"></div>
          </Button>
        </ButtonGroup>
      </Container>
    </Grid>
  );
};

export default Home;
