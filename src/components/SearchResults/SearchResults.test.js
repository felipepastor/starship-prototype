import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App/App';
import SearchResults from './SearchResults';
import SearchResultsNoItem from '../SearchResultsItem/SearchResultsNoItem';
import SearchResultsItem from '../SearchResultsItem/SearchResultsItem';

import { StarShipsMock } from '../../fixtures/starships'

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Search Results component', () => {
  it('should load the SearchResultsNoItem', () => {
    const props = {
      starships: []
    };
    const searchResultsComponent = shallow(<SearchResults {...props} />);

    expect(searchResultsComponent.find(SearchResultsNoItem).length).toBe(1);
    expect(searchResultsComponent.find(SearchResultsItem).length).toBe(0);

    const searchResultsNoItem = shallow(<SearchResultsNoItem />);

    expect(searchResultsNoItem.find('li').length).toBe(1);
  });

  it('should load the SearchResultsItem', () => {
    const props = {
      starships: StarShipsMock
    };
    
    const appComponent = shallow(<App />);

    const searchResultsComponent = shallow(<SearchResults {...props} />);

    expect(searchResultsComponent.find(SearchResultsItem).length).toBe(3);
    expect(searchResultsComponent.find(SearchResultsNoItem).length).toBe(0);

  });
});
