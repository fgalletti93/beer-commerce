import React from "react";
import "./style.scss";
import selected from '../assets/AdobeStock_303721216.png'

const ImageList = (props) => {
  const card = props.beers.map((card) => {
    return (
      <div className="card" key={card.id}>
        <img className="image" src={card.image_url} alt={card.abv} />
        <div className="text-content">
        <h1 className="title" data-testid="title">{card.name}</h1>
        <p className="info">{card.tagline}</p>
        </div>
        <img src={selected} alt="selected" className="selected" />
      </div>
    );
  });


  return (
    <div className="image-container">
      {card}
    </div>
  );
};

export default ImageList;
