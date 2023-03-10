import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';
import Home from '../screens/Home';

describe('<Home />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
