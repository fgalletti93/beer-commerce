import { useEffect, useState } from "react";
import { getBeerInfo } from "../api/api";
import { useParams } from "react-router-dom";
import BeerDetails from "./BeerDetails/BeerDetails";

const SelectedBeerPage = () => {
  const [selectedBeer, setSelectedBeer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getBeerInfo(id)
      .then((response) => response.json())
      .then((data) => setSelectedBeer(data));
  }, [id]);

  const beer = selectedBeer.map((beerDetails) => {
    return <BeerDetails beer={beerDetails} key={beerDetails.id} />;
  });
  
  return <div>{beer}</div>;
};

export default SelectedBeerPage;
