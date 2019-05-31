import { createSelector } from 'reselect'

const getMovies  = (state)=>state.movies;

export const moviesSelector = createSelector(getMovies, movies => {
  const { data, searchOption, sortOption, query } = movies;
  return { movies: data, searchOption, sortOption, query };
});