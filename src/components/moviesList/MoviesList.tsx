import { Component } from 'react';
import * as React from 'react';
import MovieCard from '../movieCard/MovieCard';
import styled from 'styled-components';
import { MovieType } from '../../types';


type MyProps = {
  movies: MovieType[],
};

const StyledContainer = styled.div.attrs({
  className: "flex-container",
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default class MoviesList extends Component {
  props:MyProps;

  render() {
    const {movies} = this.props;
    return (
        <StyledContainer>
            {movies.length === 0 ?
            <div>There is no movies</div> :
            movies.map(movie =>
            <MovieCard key={movie.id} movie={movie}/>)}
        </StyledContainer>
    );
  }
}
