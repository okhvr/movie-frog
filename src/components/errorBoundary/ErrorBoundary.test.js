import ErrorBoundary from "./ErrorBoundary";
import React from 'react';
import { shallow } from 'enzyme';
import Footer from "../footer/Footer";

describe('ErrorBoundary component', () => {
  it('should catch errors', () => {
    const wrapper = shallow(<ErrorBoundary><Footer/></ErrorBoundary>);
    const error = new Error('hi!');
    wrapper.find(Footer).simulateError(error);

    expect(wrapper.text()).toBe('Something went wrong.');
  });
});