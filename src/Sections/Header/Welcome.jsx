import React from "react";
import "./style.css";
const Welcome = ({ element }) => {
  return (
    <main>
      <section className="welcome">
        <div ref={element}></div>
        <div>Welcom into my first page</div>
      </section>
    </main>
  );
};

export default Welcome;
