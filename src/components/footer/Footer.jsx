import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  background-color: grey;
  position: relative;
  color: white;
  padding: 10px 30px;
`

const StyledSection = styled.section`
  max-width: 1080px;
  margin: auto;
  position: relative;
  z-index: 2;
`
export default class Footer extends Component {

  render() {
    return (
        <StyledWrapper>
          <StyledSection>
            <span>moviefrogsroulette</span>
          </StyledSection>
        </StyledWrapper>
    );
  }
}
