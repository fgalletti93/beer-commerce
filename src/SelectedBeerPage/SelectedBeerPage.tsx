import { ReactElement } from "react";
import { useEffect, useState } from "react";
import { getBeerInfo } from "../api/api";
import { useParams } from "react-router-dom";
import BeerDetails from "./BeerDetails/BeerDetails";
import './styles/BeerDetails.scss'


const SelectedBeerPage = (): ReactElement => {
  const [selectedBeer, setSelectedBeer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getBeerInfo(id)
      .then((response) => response.json())
      .then((data) => setSelectedBeer(data[0]));
  }, [id]);

  return <BeerDetails beer={selectedBeer} />;
};

export default SelectedBeerPage;
