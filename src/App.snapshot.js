import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App Snapshot', () => {
  test('renders', () => {
    const component = shallow(<App />);
    //let tree = component.toJSON();
    expect(component).toMatchSnapshot();
  });
});
