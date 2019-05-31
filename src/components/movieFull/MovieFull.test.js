import React from 'react';
import renderer from 'react-test-renderer';
import MovieFull from './MovieFull';

describe('MovieFull component', () => {
    const movie = {
        id: '1',
        poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
        title: 'test',
        release_date: '12/06/1997',
        overview: 'testtest'
    };
    it('should match with snapshot', () => {
        const component = renderer.create(
            <MovieFull movie={movie}/>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});