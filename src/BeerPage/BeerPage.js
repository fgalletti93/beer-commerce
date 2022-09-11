import { useEffect, useState } from "react";
import { getBeerInfo } from "../api/api";
import { useParams } from "react-router-dom";

const Beer = () => {
  const [selectedBeer, setSelectedBeer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getBeerInfo(id)
      .then((response) => response.json())
      .then((data) => setSelectedBeer(data));
  }, [id]);

  console.log(selectedBeer);
  const beer = selectedBeer.map((beer) => {
    return (
      <div key={beer.id}>
        <img src={beer.image_url} alt={beer.name} />
        <h1>{beer.name}</h1>
        <h2>description</h2>
        {beer.description} <br />
        <h3>Brewers tips</h3>
        {beer.brewers_tips} <br />
        <h3>Food pairings</h3>
        {beer.food_pairing.map((food) => {
          return <p>{food}</p>;
        })}
        <h3>malt</h3>
        {beer.ingredients.malt.map(({ name, amount }) => {
          return (
            <>
              <p>
                {name} {amount.value}
              </p>
            </>
          );
        })}
      </div>
    );
  });
  return <div>{beer}</div>;
};

export default Beer;
