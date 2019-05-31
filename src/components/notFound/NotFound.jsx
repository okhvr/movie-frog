import React, { Component } from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
  margin: auto;
`;

export default class NotFound extends Component {

  render() {
    return (
        <StyledH4>Page not found :(</StyledH4>
    );
  }
}
