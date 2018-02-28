import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Search from './Search';
import App from './../App/App';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Search component', () => {
  it('should trigger the events using props', () => {
    const appComponent = shallow(<App />);
    const props = {
      onHandleSubmit: jest.fn(),
      onMGLTChange: jest.fn(),
      mglt: 0
    };
    const searchComponent = shallow(<Search {...props} />);
    const spyHandleChange = jest.spyOn(Search.prototype, 'handleChange');

    searchComponent.find('#searchInput').simulate('change', { target: { value: '1000' } });
    searchComponent.find('form').simulate('submit');

    expect(props.onMGLTChange).toHaveBeenCalledWith('1000');
    expect(props.onHandleSubmit).toHaveBeenCalled();
  });
});
