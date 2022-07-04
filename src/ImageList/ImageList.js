import React from "react";
import "./style.scss";

const ImageList = (props) => {
  const card = props.beers.map((card) => {
    return (
      <div className="card">
        <img className="image" key={card.id} src={card.image_url} alt={card.abv} />
        <div className="text-content">
        <h1 className="title">{card.name}</h1>
        <p className="info">{card.tagline}</p>
        </div>
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
