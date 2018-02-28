import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAxios from 'jest-mock-axios';

import App from './App';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';
import Loading from '../Loading/Loading';
import * as StarShipsAPI from '../../api/StarshipApi'

import { StarShipsMock } from '../../fixtures/starships'

Enzyme.configure({ adapter: new Adapter() });

describe('Testing App component', () => {
  afterEach(() => {
    // mockAxios.reset();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should load the components correct in the DOM', () => {
    const appComponent = shallow(<App />);

    expect(appComponent.find(Search).length).toBe(1);
    expect(appComponent.find(SearchResults).length).toBe(1);
    expect(appComponent.find(Loading).length).toBe(0);

    appComponent.setState({ loading: true });

    expect(appComponent.find(Loading).length).toBe(1);
  });

  it('should evaluate the function calculateConsumableXMGLT', () => {
    const appComponent = shallow(<App />);

    appComponent.setState({
      mglt: 1000000
    })

    appComponent.instance().calculateConsumableXMGLT(StarShipsMock);

    expect(appComponent.state().availableStartShips.length).toBe(2);
    expect(parseInt(appComponent.state().availableStartShips[0].stopsToResupply)).toBe(3)
    expect(parseInt(appComponent.state().availableStartShips[1].stopsToResupply)).toBe(74)
  });

  it('should check the api async call', () => {
    const appComponent = shallow(<App />);
    const props = {
      onHandleSubmit: appComponent.instance().handleMGLTSubmit
    };
    const searchComponent = shallow(<Search {...props} />);

    const catchFn = jest.fn();
    const thenFn = jest.fn();

    searchComponent.find('form').simulate('submit');

    expect(mockAxios.get).toHaveBeenCalledWith('https://swapi.co/api/starships');
    expect(catchFn).not.toHaveBeenCalled();
  });
});
