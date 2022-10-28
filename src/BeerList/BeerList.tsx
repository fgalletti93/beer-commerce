import React from "react";
import "./style.scss";
import BeerCard from "../BeerCard/BeerCard";

const BeerList = ({ beers }) => {
  const renderedList = beers.map((card) => {
    return (
    <BeerCard key={card.id} card={card} />
    )
  });

  return <div className="image-container">{renderedList}</div>;
};

export default BeerList;
