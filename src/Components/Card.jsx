import React from "react";

function Card({ src, className, children }) {
  return (
    <div>
      <img src={src} className={className} alt="eman" />
      {children}
    </div>
  );
}
export default Card;
