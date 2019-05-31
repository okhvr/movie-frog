import { createSelector } from 'reselect';

const getMovies  = state => state.movies;

export const movieSelector = createSelector(getMovies, (movies) => {
    const { data, movie } = movies;
    return { movie, movies: data };
});
