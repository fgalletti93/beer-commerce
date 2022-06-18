export function getBeers(params) {
  return fetch(`https://api.punkapi.com/v2/beers${params}`);
}
//((response) => response.json())
//.then((data) => setImages(data));


export function getBeersByName(term) {
  return fetch(`https://api.punkapi.com/v2/beers?beer_name=${term}`)
}

export function getBeersByQuantifiers(quantifier, range) {
  return fetch(`https://api.punkapi.com/v2/beers?${quantifier}=${range}`)
}

