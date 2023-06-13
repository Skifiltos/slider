import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";

const Slider = () => {
 
  const [recensioni, setRecensioni] = useState(data);
  const [active, setActive] = useState(0);

  // passa alla prossima slide
  const prossimaSlide = () => {
    setActive((prevValue) => {
      if (prevValue + 1 > recensioni.length - 1) {
        return 0;
      }
      
      return prevValue + 1;

    });
  };

  // passa alla precedente slide
  const precedenteSlide = () => {
    setActive((prevValue) => {
      if (prevValue - 1 < 0) {
       
        return recensioni.length - 1;
      }

      return prevValue - 1;
    });
  };

  return (
    <div className="container slider">
      {/* il metodo map prende una callbackfunction che può 
      accettare 3 parametri. 
      il primo parametro è definibile come si vuole e 
      rappresenta il singolo elemento, in questo caso
      quello che noi passiamo al nostro componente.
      il secondo l'index ovvero la posizione che occupa l'elemento all'interno
      del nostro array.
      il terzo parametro è direttamente il nostro intero array.
      in questo caso prendiamo solo due parametri */}
     {recensioni.map((recensione, index) => {
      
      let positionClass  = "";
        
      if (index === active) {
        positionClass = "active";
      }

      else if(index + 1  === active || 
        (active === 0 && index === recensioni.length - 1)
        ) {
        positionClass = "prev";
      }

      else {
        positionClass = "next";
      }

      return (
        <Slide key={recensione.id} {...recensione} classes={positionClass} />
     );

     })}
      
  
  <div className="btn-group slider-btn-group">
      <button className="btn btn-slider prev-slider" onClick={precedenteSlide}>{" "}prev</button>
      <button className="btn btn-slider next-slider" onClick={prossimaSlide}>next</button>
    </div>
  </div>
  );
};

export default Slider;
