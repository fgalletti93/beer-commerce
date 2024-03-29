export const getBeers = () => {
  return fetch(`https://api.punkapi.com/v2/beers?per_page=80`);
}

export const getBeerInfo = (cardId) => {
  return fetch(`https://api.punkapi.com/v2/beers/${cardId}`);
}


export const getBeersByCustomSearch = (term) => {
  let queryStrg = "";
  let connector = "&";
  const keys = Object.keys(term);
  keys.forEach((label, index) => {
    const labelNumber = term[label] !== "0";
    if(term[label] && label !== 'order' && labelNumber) { 
      let param = `${label}=${term[label]}`;
      if (index < keys.length - 1) {
        param += `${connector}`
      }
      queryStrg += param;
    } 
  });
  return fetch(`https://api.punkapi.com/v2/beers?per_page=50&${queryStrg}`);
}

