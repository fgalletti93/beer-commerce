export function getBeers() {
  return fetch(`https://api.punkapi.com/v2/beers`);
}
//((response) => response.json())
//.then((data) => setImages(data));


export function getBeersByName(term) {
  return fetch(`https://api.punkapi.com/v2/beers?beer_name=${term}`)
}