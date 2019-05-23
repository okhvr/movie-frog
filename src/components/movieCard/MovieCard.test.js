import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './MovieCard';
import { BrowserRouter } from "react-router-dom";

describe('MovieCard component', () => {
    const movie = {
        id: '1',
        poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
        title: 'test',
        release_date: '12/06/1997'
    };
    it('should match with snapshot', () => {
        const component = renderer.create(
            <BrowserRouter>
                <MovieCard movie={movie}/>
            </BrowserRouter>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});