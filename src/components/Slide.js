import React from "react";

  const Slide = ({autore, rencesione, voto, classes}) => {
  return (
    <article className={`slide ${classes}`}>
      <div className="review">
        <h4>{autore}</h4>
        <p>{rencesione}</p>
        <div className="star-container">{voto}</div>
      </div>
    </article>
  );
};

export default Slide; 
