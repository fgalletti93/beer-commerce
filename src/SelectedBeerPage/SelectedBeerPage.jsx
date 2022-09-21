import { useEffect, useState } from "react";
import { getBeerInfo } from "../api/api";
import { useParams } from "react-router-dom";
import BeerDetails from "./BeerDetails/BeerDetails";
import './styles/BeerDetails.scss'

const SelectedBeerPage = () => {
  const [selectedBeer, setSelectedBeer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getBeerInfo(id)
      .then((response) => response.json())
      .then((data) => setSelectedBeer(data[0]));
  }, [id]);

  console.log(selectedBeer);

  return <BeerDetails beer={selectedBeer} />;
};

export default SelectedBeerPage;
