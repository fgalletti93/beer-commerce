const BeerDetails = ({ beer }) => {
  return (
    <div className="container">
      <div className="image">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className="information">
        <h1>{beer.name}</h1>
        <h2>description</h2>
        {beer.description} <br />
        <h3>Brewers tips</h3>
        {beer.brewers_tips} <br />
        <h3>Food pairings</h3>
        {beer.food_pairing?.map((food) => {
          return <p>{food}</p>;
        })}
        <h3>malt</h3>
        {beer.ingredients?.malt.map(({ name, amount }) => {
          return (
            <p>
              {name} {amount.value}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default BeerDetails;
