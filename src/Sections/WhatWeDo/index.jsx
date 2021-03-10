import React from "react";
import Card from "../../Components/Card";
import im1 from "../../images/im1.png";
import im2 from "../../images/im2.png";
import im3 from "../../images/im3.png";
import im4 from "../../images/im4.png";
import "./style.css";
const Data = {
  h1: ["Research", "Write", "Develope", "Promote"],
  p: [
    "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
    "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  ],
};
function Services() {
  return (
    <section className="services" id="Services">
      <div className="info">
        <h6> Services </h6>
        <h2> What We do</h2>
        <p>
          It doesn’t matter how great your product or service is if your copy
          does not captivate your audience.
        </p>
      </div>
      <div className="Cards">
        <div className="card-1">
          <Card src={im1} className="card">
            <h1 className="Title"> {Data.h1[0]} </h1>
            <p className="description"> {Data.p[0]}</p>
            <p id="Learn-more">Learn more</p>
          </Card>
        </div>
        <div className="card-1">
          <Card src={im2} className="card">
            <h1 className="Title"> {Data.h1[1]} </h1>
            <p className="description"> {Data.p[1]}</p>
            <p id="Learn-more">Learn more</p>
          </Card>
        </div>
        <div className="card-1">
          <Card src={im3} className="card">
            <h1 className="Title"> {Data.h1[2]} </h1>
            <p className="description"> {Data.p[2]}</p>
            <p id="Learn-more">Learn more</p>
          </Card>
        </div>
        <div className="card-1">
          <Card src={im4} className="card">
            <h1 className="Title"> {Data.h1[3]} </h1>
            <p className="description"> {Data.p[3]}</p>
            <p id="Learn-more">Learn more</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
export default Services;
