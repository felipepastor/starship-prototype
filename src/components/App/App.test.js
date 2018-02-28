import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Search from '../Search/Search';
import SearchResults from '../SearchResults/SearchResults';

Enzyme.configure({adapter: new Adapter()});

describe('Testing DOM behaviors', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should load the components correct in the DOM', () => {
    const appComponent = shallow(<App/>);

    expect(appComponent.find(Search).length).toBe(1);
    expect(appComponent.find(SearchResults).length).toBe(1);

  });
});

describe('Testing the functions', () => {
  
});

