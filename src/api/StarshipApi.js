import axios from 'axios';

const api = "https://swapi.co/api/starships";
let allResults = [];

const search = () => {
  const getStarShipsPage = url => axios.get(url || api).then(response => {
    allResults = [...allResults, ...response.data.results];

    if (typeof response.data.next === 'string') {
      return getStarShipsPage(response.data.next);
    } else {
      return allResults;
    }
  });

  return getStarShipsPage();
};


export {search};