import React from "react";

const ImageList = (props) => {
   const image = props.beers.map((image) => {
     return <img key={image.id} src={image.image_url} alt="" /> ;
   });

  return <div>{image}</div>;
};

export default ImageList;
