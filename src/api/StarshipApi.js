import axios from 'axios';

const api = "https://swapi.co/api/starships";
let allResults = [];

const search = () => {
  const getContactsPage = url => axios.get(url || api).then(response => {
    allResults = [...allResults, ...response.data.results];

    if (typeof response.data.next === 'string') {
      return getContactsPage(response.data.next);
    } else {
      return allResults;
    }
  });

  return getContactsPage();
};


export {search};