import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './MoviesScene';

describe('MoviesScene wrapper component', () => {
    const movies = [
        {
            genres: ["Action"],
            id: 1,
        },
        {
            genres: ["Test"],
            id: 2,
        }
    ];

    const searchOption = 1;
    const  sortOption =  { name: 'a'};
    const query = 'test';

    const initialState = {
        movies: {
            data: movies,
            searchOption,
            sortOption,
            query
        }
    };

    it('mapStateToProps should return appropriate props', () => {
        const expectedResult = { movies, searchOption, sortOption, query };
        const receivedResult = mapStateToProps(initialState);
        expect(receivedResult).toEqual(expectedResult);
    });

    it('mapDispatchToProps should return appropriate props', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        const option = '2';

        props.searchOptionSelected(option);
        expect(dispatch.mock.calls.length).toBe(1);

        props.searchOptionSelectAndSearch(option);
        expect(dispatch.mock.calls.length).toBe(2);

        props.sortOptionSelected(option);
        expect(dispatch.mock.calls.length).toBe(3);

        props.sortOptionSelectAndSearch(option);
        expect(dispatch.mock.calls.length).toBe(4);

        props.searchQuery(option);
        expect(dispatch.mock.calls.length).toBe(5);

        props.clearMovies();
        expect(dispatch.mock.calls.length).toBe(6);

        props.clearSearch();
        expect(dispatch.mock.calls.length).toBe(7);
    });      
});
