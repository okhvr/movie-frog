import movies from "./movies";
import { CLEAR_MOVIES, CLEAR_SEARCH, SEARCH_MOVIE_COMPLETED, SEARCH_QUERY_CHANGED, SEARCH_OPTION_SELECTED, SORT_OPTION_SELECTED, SEARCH_MOVIES_COMPLETED } from "../actions/movies";

describe('reducers', () => {
    const state = {
        data: [],
        searchOption: 'title',
        sortOption: 'release_date',
        query: '',
        movie: null,
    };

    it('should clear movies', () => {    
        expect(movies(undefined, {
            type: CLEAR_MOVIES
        })).toEqual(state);
    });

    it('should clear search', () => {
        expect(movies(undefined, {
            type: CLEAR_SEARCH
        })).toEqual(state);
    });

    it('should handle SEARCH_MOVIES_COMPLETED', () => {
        const moviesArray = ['1', '2', '3'];
        const expectedState = {...state, data: moviesArray};
        expect(movies(undefined, {
            type: SEARCH_MOVIES_COMPLETED,
            payload: moviesArray
        })).toEqual(expectedState);
    });

    it('should handle SEARCH_MOVIE_COMPLETED', () => {
        const movie = {id: 3};
        const expectedState = {...state, movie};
        expect(movies(undefined, {
            type: SEARCH_MOVIE_COMPLETED,
            payload: movie
        })).toEqual(expectedState);
    });

    it('should handle SEARCH_QUERY_CHANGED', () => {
        const query = 'test';
        const expectedState = {...state, query};
        expect(movies(undefined, {
            type: SEARCH_QUERY_CHANGED,
            payload: query
        })).toEqual(expectedState);
    });

    it('should handle SEARCH_OPTION_SELECTED', () => {
        const searchOption = 'searchOption';
        const expectedState = {...state, searchOption};
        expect(movies(undefined, {
            type: SEARCH_OPTION_SELECTED,
            payload: searchOption
        })).toEqual(expectedState);
    });

    it('should handle SORT_OPTION_SELECTED', () => {
        const sortOption = 'sortOption';
        const expectedState = {...state, sortOption};
        expect(movies(undefined, {
            type: SORT_OPTION_SELECTED,
            payload: sortOption
        })).toEqual(expectedState);
    });

    it('should return default state on random action ', () => {
        expect(movies(undefined, {
            type: 'RANDOM_ACTION'
        })).toEqual(state);
    });
});