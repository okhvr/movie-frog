import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';
import { BrowserRouter } from "react-router-dom";

describe('Header component', () => {
  it('should match with snapshot', () => {
    const component = renderer.create(
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});