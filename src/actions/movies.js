import { getMovies, getMovie } from '../api';

export const SEARCH_MOVIES_LOADING = 'SEARCH_MOVIES_LOADING';
export const SEARCH_MOVIES_COMPLETED = 'SEARCH_MOVIES_COMPLETED';
export const SEARCH_MOVIES_FAILED = 'SEARCH_MOVIES_FAILED';

export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const SEARCH_QUERY_CHANGED = 'SEARCH_QUERY_CHANGED';
export const SEARCH_OPTION_SELECTED = 'SEARCH_OPTION_SELECTED';
export const SORT_OPTION_SELECTED = 'SORT_OPTION_SELECTED';

export const SEARCH_MOVIE_COMPLETED = 'SEARCH_MOVIE_COMPLETED';

const searchLoadingActionCreator = () => ({
    type: SEARCH_MOVIES_LOADING,
});

const searchCompletedActionCreator = movies => ({
    type: SEARCH_MOVIES_COMPLETED,
    payload: movies,
});

const searchFailedActionCreator = error => ({
    type: SEARCH_MOVIES_FAILED,
    payload: error,
});

const searchActionCreatorAsync = params => (dispatch) => {
    dispatch(searchLoadingActionCreator());
    return getMovies(params).then(
        movies => dispatch(searchCompletedActionCreator(movies)),
        error => dispatch(searchFailedActionCreator(error)),
    );
};

const searchDefaultActionCreatorAsync = () => (dispatch, getState) => {
    const state = getState().movies;
    const params = {
        sortBy: state.sortOption,
        searchBy: state.searchOption,
        search: state.query,
        sortOrder: 'desc',
    };
    return dispatch(searchActionCreatorAsync(params));
};

const searchQueryChangedActionCreator = query => ({
    type: SEARCH_QUERY_CHANGED,
    payload: query,
});

export const searchQueryChangedActionCreatorAsync = query => (dispatch) => {
    dispatch(searchQueryChangedActionCreator(query));
    return dispatch(searchDefaultActionCreatorAsync());
};

export const searchOptionSelectedActionCreator = option => ({
    type: SEARCH_OPTION_SELECTED,
    payload: option,
});

export const searchOptionSelectedActionCreatorAsync = query => (dispatch) => {
    dispatch(searchOptionSelectedActionCreator(query));
    return dispatch(searchDefaultActionCreatorAsync());
};

export const sortOptionSelectedActionCreator = option => ({
    type: SORT_OPTION_SELECTED,
    payload: option,
});

export const sortOptionSelectedActionCreatorAsync = option => (dispatch) => {
    dispatch(sortOptionSelectedActionCreator(option));
    return dispatch(searchDefaultActionCreatorAsync());
};

export const searchMovieActionCreator = movie => ({
    type: SEARCH_MOVIE_COMPLETED,
    payload: movie,
});

export const searchMovieActionCreatorAsync = id => dispatch => getMovie(id).then(
    (movie) => {
        dispatch(searchActionCreatorAsync({ filter: movie.genres.join(',') }));
        dispatch(searchMovieActionCreator(movie));
    },
);

export const clearMoviesActionCreator = () => ({
    type: CLEAR_MOVIES,
});

export const clearSearchQueryActionCreator = () => ({
    type: CLEAR_SEARCH,
});
