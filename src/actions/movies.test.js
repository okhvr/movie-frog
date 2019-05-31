import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import {
    SORT_OPTION_SELECTED,
    sortOptionSelectedActionCreatorAsync,
    SEARCH_MOVIES_LOADING,
    SEARCH_MOVIES_COMPLETED,
    SEARCH_MOVIES_FAILED,
    searchQueryChangedActionCreatorAsync,
    SEARCH_QUERY_CHANGED,
    searchOptionSelectedActionCreatorAsync,
    SEARCH_OPTION_SELECTED,
    CLEAR_MOVIES,
    clearMoviesActionCreator,
    CLEAR_SEARCH,
    clearSearchQueryActionCreator,
    SEARCH_MOVIE_COMPLETED,
    searchMovieActionCreatorAsync,
} from './movies';

const mockStore = configureMockStore([thunk]);
const baseUrl = 'https://reactjs-cdp.herokuapp.com';
const mock = new MockAdapter(axios);

describe('ActionsCreators', () => {
    let store;
    const option = {
        bla: 123,
    };
    const query = 'test';
    const initialState = {
        movies: {
            searchOption: 'foo',
            sortOption: 'bar',
            query: '',
        },
    };

    beforeEach(() => {
        store = mockStore(initialState);
    });

    describe('searchQueryChangedActionCreatorAsync', () => {
        it('should dispatch SEARCH_QUERY_CHANGED, SEARCH_MOVIES_LOADING, SEARCH_MOVIES_COMPLETED with passed payload on success', async () => {
            const movies = ['movie1', 'movie2'];
            mock.onGet(`${baseUrl}/movies`).reply(200, { data: movies });
            await store.dispatch(searchQueryChangedActionCreatorAsync(query));
            expect(store.getActions()).toContainEqual({
                type: SEARCH_QUERY_CHANGED,
                payload: query,
            });
            expect(store.getActions()).toContainEqual({ type: SEARCH_MOVIES_LOADING });
            expect(store.getActions()).toContainEqual({
                type: SEARCH_MOVIES_COMPLETED,
                payload: movies,
            });
        });

        it('should dispatch SEARCH_QUERY_CHANGED, SEARCH_MOVIES_LOADING, SEARCH_MOVIES_FAILED on error', async () => {
            mock.onGet(`${baseUrl}/movies`).reply(500);
            await store.dispatch(searchQueryChangedActionCreatorAsync(query));
            expect(store.getActions()).toContainEqual({
                type: SEARCH_QUERY_CHANGED,
                payload: query,
            });
            expect(store.getActions()).toContainEqual({ type: SEARCH_MOVIES_LOADING });
            expect(store.getActions()).toContainEqual(expect.objectContaining({
                type: SEARCH_MOVIES_FAILED,
            }));
        });
    });

    describe('searchOptionSelectedActionCreatorAsync', () => {
        it('should dispatch SEARCH_OPTION_SELECTED, SEARCH_MOVIES_LOADING, SEARCH_MOVIES_COMPLETED with passed payload on success', async () => {
            const movies = ['movie1', 'movie2'];
            mock.onGet(`${baseUrl}/movies`).reply(200, { data: movies });
            await store.dispatch(searchOptionSelectedActionCreatorAsync(option));
            expect(store.getActions()).toContainEqual({
                type: SEARCH_OPTION_SELECTED,
                payload: option,
            });
            expect(store.getActions()).toContainEqual({ type: SEARCH_MOVIES_LOADING });
            expect(store.getActions()).toContainEqual({
                type: SEARCH_MOVIES_COMPLETED,
                payload: movies,
            });
        });

        it('should dispatch SEARCH_OPTION_SELECTED, SEARCH_MOVIES_LOADING, SEARCH_MOVIES_FAILED on error', async () => {
            mock.onGet(`${baseUrl}/movies`).reply(500);

            await store.dispatch(searchOptionSelectedActionCreatorAsync(option));

            expect(store.getActions()).toContainEqual({
                type: SEARCH_OPTION_SELECTED,
                payload: option,
            });
            expect(store.getActions()).toContainEqual({ type: SEARCH_MOVIES_LOADING });
            expect(store.getActions()).toContainEqual(expect.objectContaining({
                type: SEARCH_MOVIES_FAILED,
            }));
        });
    });

    describe('sortOptionSelectedActionCreatorAsync', () => {
        it('should dispatch SORT_OPTION_SELECTED, SEARCH_MOVIES_LOADING, SEARCH_MOVIES_COMPLETED with passed payload on success', async () => {
            const movies = ['movie1', 'movie2'];
            mock.onGet(`${baseUrl}/movies`).reply(200, { data: movies });

            await store.dispatch(sortOptionSelectedActionCreatorAsync(option));

            expect(store.getActions()).toContainEqual({
                type: SORT_OPTION_SELECTED,
                payload: option,
            });
            expect(store.getActions()).toContainEqual({ type: SEARCH_MOVIES_LOADING });
            expect(store.getActions()).toContainEqual({
                type: SEARCH_MOVIES_COMPLETED,
                payload: movies,
            });
        });

        it('should dispatch SORT_OPTION_SELECTED, SEARCH_MOVIES_LOADING, SEARCH_MOVIES_FAILED on error', async () => {
            mock.onGet(`${baseUrl}/movies`).reply(500);

            await store.dispatch(sortOptionSelectedActionCreatorAsync(option));

            expect(store.getActions()).toContainEqual({
                type: SORT_OPTION_SELECTED,
                payload: option,
            });
            expect(store.getActions()).toContainEqual({ type: SEARCH_MOVIES_LOADING });
            expect(store.getActions()).toContainEqual(expect.objectContaining({
                type: SEARCH_MOVIES_FAILED,
            }));
        });
    });

    describe('searchMovieActionCreatorAsync', () => {
        it('should dispatch SEARCH_MOVIES_LOADING, SEARCH_MOVIES_COMPLETED, SEARCH_MOVIE_COMPLETED with passed payload on success', async () => {
            const movies = [{ genres: 'movie1' }, { genres: 'movie2' }];
            const id = 5;
            const movie = { id, genres: ['a', 'b'] };
            mock.onGet(`${baseUrl}/movies`).reply(200, { data: movies });
            mock.onGet(`${baseUrl}/movies/${id}`).reply(200, movie);
            await store.dispatch(searchMovieActionCreatorAsync(id));

            expect(store.getActions()).toContainEqual({ type: SEARCH_MOVIES_LOADING });
            expect(store.getActions()).toContainEqual({
                type: SEARCH_MOVIES_COMPLETED,
                payload: movies,
            });
            expect(store.getActions()).toContainEqual({
                type: SEARCH_MOVIE_COMPLETED,
                payload: movie,
            });
        });
    });

    describe('clearMoviesActionCreator', () => {
        it('should create correct action', () => {
            const expectedAction = { type: CLEAR_MOVIES };
            expect(clearMoviesActionCreator()).toEqual(expectedAction);
        });
    });

    describe('clearSearchQueryActionCreator', () => {
        it('should create correct action', () => {
            const expectedAction = { type: CLEAR_SEARCH };
            expect(clearSearchQueryActionCreator()).toEqual(expectedAction);
        });
    });
});
