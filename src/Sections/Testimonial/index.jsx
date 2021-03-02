import peopleData from "./DataSlider";
import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

import "./style.css";

function Testimonial() {
  const [people] = useState(peopleData);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section>
      <h3> Testimonial </h3>
      <h1> In their own worlds </h1>
      <div className="people-center">
        {people.map((person, personIndex) => {
          const { id, image, title, description, name } = person;
          let pos = "next";
          if (personIndex === index) {
            pos = "active";
          }
          if (
            personIndex === index - 1 &&
            index === 0 &&
            personIndex === people.length - 1
          ) {
            pos = "last";
          }
          return (
            <article className={pos} key={id}>
              <FaQuoteLeft className="icon" />
              <img src={image} alt=" Eman" className="personImg" />
              <p className="description"> {description} </p>
              <p className="name">{name}</p>
              <p className="title"> {title}</p>
            </article>
          );
        })}
        <button
          className="prevSlide"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="nextSlide"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
export default Testimonial;
