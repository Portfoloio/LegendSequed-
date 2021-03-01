import React from "react";
import "./style.css";
const Welcome = ({ element }) => {
  return (
    <section id="welcome">
      <div ref={element}></div>
      <div>Welcome into my first page</div>
    </section>
  );
};

export default Welcome;
