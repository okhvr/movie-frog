import { getMovies, getMovie } from '../api';

export const SEARCH_MOVIES_LOADING = 'SEARCH_MOVIES_LOADING';
export const SEARCH_MOVIES_COMPLETED = 'SEARCH_MOVIES_COMPLETED';
export const SEARCH_MOVIES_FAILED = 'SEARCH_MOVIES_FAILED';
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

export const searchActionCreatorAsync = () => (dispatch, getState) => {
    const state = getState().movies;
    const params = {
        sortBy: state.sortOptions.find(o => o.selected).value,
        searchBy: state.searchOptions.find(o => o.selected).name,
        search: state.query,
    };
    dispatch(searchLoadingActionCreator());
    return getMovies(params).then(
        movies => dispatch(searchCompletedActionCreator(movies)),
        error => dispatch(searchFailedActionCreator(error)),
    );
};

const searchQueryChangedActionCreator = query => ({
    type: SEARCH_QUERY_CHANGED,
    payload: query,
});

export const searchQueryChangedActionCreatorAsync = query => (dispatch) => {
    dispatch(searchQueryChangedActionCreator(query));
    return dispatch(searchActionCreatorAsync());
};

const searchOptionSelectedActionCreator = option => ({
    type: SEARCH_OPTION_SELECTED,
    payload: option,
});

export const searchOptionSelectedActionCreatorAsync = query => (dispatch) => {
    dispatch(searchOptionSelectedActionCreator(query));
    return dispatch(searchActionCreatorAsync());
};

const sortOptionSelectedActionCreator = option => ({
    type: SORT_OPTION_SELECTED,
    payload: option,
});

export const sortOptionSelectedActionCreatorAsync = option => (dispatch) => {
    dispatch(sortOptionSelectedActionCreator(option));
    return dispatch(searchActionCreatorAsync());
};

export const searchMovieActionCreator = movie => ({
    type: SEARCH_MOVIE_COMPLETED,
    payload: movie,
});

export const searchMovieActionCreatorAsync = id => dispatch => getMovie(id).then(
    movie => dispatch(searchMovieActionCreator(movie)),
);
