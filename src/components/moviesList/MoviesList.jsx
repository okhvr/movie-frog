import React, { Component } from 'react';
import MovieCard from '../movieCard/MovieCard';

import './style.scss';

export default class MoviesList extends Component {

  render() {
    const {movies} = this.props;
    return (
        <div className="flex-container">
            {movies.length === 0 ?
            <div>There is no movies</div> :
            movies.map(movie =>
            <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
  }
}
