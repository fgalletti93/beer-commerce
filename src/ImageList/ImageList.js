import React from "react";
import './style.scss'

const ImageList = (props) => {
   const image = props.beers.map((image) => {
     return <img className="image" key={image.id} src={image.image_url} alt="" /> ;
   });

  return <div className="image-grid">{image}</div>;
};

export default ImageList;
