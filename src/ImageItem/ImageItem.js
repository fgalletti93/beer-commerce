import { Link } from "react-router-dom";
import selected from "../assets/AdobeStock_303721216.png";
import defaultImg from "../assets/defaultBeer.jpeg";


const ImageItem = ({ card }) => {

  return (
    <Link to={`/beers/${card.id}`} className="card">
      <div className="card-content">
        <img
          className="image"
          src={card.image_url || defaultImg}
          alt={card.abv}
        />
        <div className="text-content">
          <h1 className="title" data-testid="title">
            {card.name}
          </h1>
          <p className="info">{card.tagline}</p>
        </div>
      </div>
      <img src={selected} alt="selected" className="selected" />
    </Link>
  );
};

export default ImageItem;
