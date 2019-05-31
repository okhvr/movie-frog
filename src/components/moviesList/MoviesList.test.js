import React from 'react';
import { shallow, render } from 'enzyme';

import MoviesList from './MoviesList';
import MovieCard from '../movieCard/MovieCard';

describe('MoviesList component', () => {
  let movies;

  it('should render without throwing an error', () => {
    movies = [{id: '1'}];
    expect(shallow(<MoviesList movies={movies}/>).contains(
      <div className="flex-container">
        <MovieCard key={movies[0].id} movie={movies[0]}/>
      </div>)).toBe(true);
  });

  it('should render to static HTML', function() {
    movies = [];
    expect(render(<MoviesList movies={movies}/>).text()).toEqual('There is no movies');
  });
});