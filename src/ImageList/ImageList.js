import React from "react";
import "./style.scss";
import ImageItem from "../ImageItem/ImageItem";

const ImageList = ({ beers }) => {
  const renderedList = beers.map((card) => {
    return (
    <ImageItem key={card.id} card={card} />
    )
  });

  return <div className="image-container">{renderedList}</div>;
};

export default ImageList;
