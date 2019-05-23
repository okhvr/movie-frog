import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from './NotFound';

describe('Footer component', () => {
  it('should render correctly', () => {
    const component = renderer.create(
        <NotFound/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});