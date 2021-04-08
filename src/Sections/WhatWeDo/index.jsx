import React from "react";
import Card from "../../Components/Card";
import im1 from "../../images/im1.png";
import im2 from "../../images/im2.png";
import im3 from "../../images/im3.png";
import im4 from "../../images/im4.png";
// import "./style.css";
import { Section, Background } from "./style";

function Services() {
  return (
    <Section>
      <Background>
        <div className="info" id="Services">
          <h6> Services </h6>
          <h2> What We do</h2>
          <p>
            It doesn’t matter how great your product or service is if your copy
            does not captivate your audience.
          </p>
        </div>
        <div className="Cards">
          <div className="card-1">
            <Card
              src={im1}
              className="card"
              title="Research"
              paragraph="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
              learn="Learn more"
            />
          </div>
          <div className="card-1">
            <Card
              src={im2}
              className="card"
              title="Write"
              paragraph="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
              learn="Learn more"
            />
          </div>
          <div className="card-1">
            <Card
              src={im3}
              className="card"
              title="Develop"
              paragraph="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
              learn="Learn more"
            />
          </div>
          <div className="card-1">
            <Card
              src={im4}
              className="card"
              title="Promote"
              paragraph="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
              learn="Learn more"
            />
          </div>
        </div>
      </Background>
    </Section>
  );
}
export default Services;
