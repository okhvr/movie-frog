import {
    SEARCH_MOVIES_COMPLETED,
    SEARCH_OPTION_SELECTED,
    SORT_OPTION_SELECTED,
    SEARCH_QUERY_CHANGED,
    SEARCH_MOVIE_COMPLETED,
    CLEAR_MOVIES,
    CLEAR_SEARCH,
} from '../actions/movies';
import { searchOptions, sortOptions } from '../constants';

const initialState = {
    data: [],
    searchOption: searchOptions[0],
    sortOption: sortOptions[0].value,
    query: '',
    movie: null,
};

export default function movies(state = initialState, action) {
    switch (action.type) {
    case CLEAR_MOVIES:
        return {
            ...state,
            data: [],
        };
    case CLEAR_SEARCH:
        return {
            ...state,
            query: '',
        };
    case SEARCH_MOVIES_COMPLETED:
        return {
            ...state,
            data: action.payload,
        };
    case SEARCH_MOVIE_COMPLETED:
        return {
            ...state,
            movie: action.payload,
        };
    case SEARCH_QUERY_CHANGED:
        return {
            ...state,
            query: action.payload,
        };
    case SEARCH_OPTION_SELECTED:
        return {
            ...state,
            searchOption: action.payload,
        };
    case SORT_OPTION_SELECTED:
        return {
            ...state,
            sortOption: action.payload,
        };
    default:
        return state;
    }
}
