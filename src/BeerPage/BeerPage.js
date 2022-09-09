import { useEffect, useState } from "react";
import { getBeerInfo } from "../api/api";

const Beer = () => {
  const [selectedBeer, setSelectedBeer] = useState([]);
  const currentPath = window.location.pathname;
  const param = currentPath.slice(1);

  useEffect(() => {
    getBeerInfo(param)
      .then((response) => response.json())
      .then((data) => setSelectedBeer(data));
  }, [param]);
  console.log(selectedBeer)
  const beer = selectedBeer.map((beer) => {
    return (
      <div key={beer.id}>
        <h1>{beer.name}</h1>
        {beer.brewers_tips} <br />
        {beer.description} <br />
        {beer.food_pairing.map((food) => {
            return <p>{food}</p>
        })}
        {/* {beer.ingredients.malt}
        {beer.ingredients.hops}
        {beer.ingredients.yeast} */}
      </div>
    );
  });
  return <div>{beer}</div>;
};

export default Beer;
