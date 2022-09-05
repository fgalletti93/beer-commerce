import React from "react";
import "./style.scss";
import selected from "../assets/AdobeStock_303721216.png";
import defaultImg from "../assets/defaultBeer.jpeg"

const ImageList = ({ beers }) => {
  const card = beers.map((card) => {
    return (
      <div className="card" key={card.id}>
        <div className="card-content">
          <img className="image" src={card.image_url || defaultImg} alt={card.abv} />
          <div className="text-content">
            <h1 className="title" data-testid="title">
              {card.name}
            </h1>
            <p className="info">{card.tagline}</p>
          </div>
        </div>
        <img src={selected} alt="selected" className="selected" />
      </div>
    );
  });

  return <div className="image-container">{card}</div>;
};

export default ImageList;


//on click image, abrir outra pagina usando react router DOM 
//adicionar  || para image source para ter imagem default quando image_url vier null 