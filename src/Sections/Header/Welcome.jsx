import React from "react";
import "./style.css";
import { images1 } from "./Data";
import { Button } from "../../Components/Buttons/Outlined";
import { H2, H3, P } from "../../Components/Typography";
// import draw from "../../images/drawkit-grape-animation-1-NO-LOOP.json";
const Data = {
  p1:
    " Front-End developer for more than 2 years. My background is IT education and self-taught web development skills.",
  p2: "Let's create something extraordinary!",
  h3: " I am full Stack Developer  ",
};

const Welcome = () => {
  return (
    <section id="Home">
      <div className="Hero--info">
        <H3 className="h3-fullStack"> {Data.h3} </H3>
        <H2 className="name-h2">
          Hi, My name is <br /> <span> Eman Ibrahim </span>
        </H2>
        <P>{Data.p1}</P>
        <P> {Data.p2} </P>
        <div className="btns">
          <Button className="fill-btn"> My Work </Button>
          <Button className="primary-btn"> let's Talk </Button>
        </div>
      </div>

      <div className="Lottie-player">
        <lottie-player
          src="https://assets2.lottiefiles.com/packages/lf20_dmjzjtx7.json"
          backgroundColor="transparent"
          speed="1"
          loop
          // controls
          autoplay
          className="Lottie-player"
        ></lottie-player>
      </div>
      <div className="icons-logo">
        <H2 className="Expert-h2">Trusted by Experts AT </H2>
        <div className="images">
          {images1.map((image, id) => (
            <img
              key={id}
              src={`/imgs/${image.imageName}`}
              alt={image.imageName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
