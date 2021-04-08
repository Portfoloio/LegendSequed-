import React from "react";

function Card({ src, className, title, paragraph, learn }) {
  return (
    <div>
      <img src={src} className={className} alt="eman" />
      <div>
        <h1 className="title"> {title} </h1>
        <p className="description"> {paragraph} </p>
        <p id="Learn-more"> {learn}</p>
      </div>
    </div>
  );
}
export default Card;
