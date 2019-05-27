import React from 'react';
import { MovieScene, mapStateToProps, mapDispatchToProps } from './MovieScene';
import { shallow } from 'enzyme';

describe('MovieScene wrapper component', () => {
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
    const movie = movies[0];

    const initialState = {
        movies: {
            data: movies,
            movie
        }
    };

    const match = {
        params: {
            id: 1
        }
    };

    it('mapStateToProps should return appropriate props', () => {
        const expectedResult = {movies, movie};
        const receivedResult = mapStateToProps(initialState);
        expect(receivedResult).toEqual(expectedResult);
    });

    it('mapDispatchToProps should return appropriate props', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        const id = 44;
        props.getMovie(id);
        expect(dispatch).toHaveBeenCalled();
    });      
      
  it('should call getMovie on componentDidMount', () => {
      const getMovie = jest.fn();
      shallow(<MovieScene match={match} getMovie={getMovie} movies={movies} movie={movie}/>);

      expect(getMovie.mock.calls.length).toBe(1)
      expect(getMovie).toHaveBeenCalledWith(1);
  });

  it('should call getMovie on route change', () => {
    const newMatch = {
        params: {
            id: 2
        }
    };
    const getMovie = jest.fn();
    const movieScene = shallow(<MovieScene match={match}
        getMovie={getMovie}
        movies={movies}
        movie={movie}/>,
        { lifecycleExperimental: true });
    movieScene.setProps({match});
    expect(getMovie.mock.calls.length).toBe(1);

    movieScene.setProps({match: newMatch});
    expect(getMovie.mock.calls.length).toBe(2);
    expect(getMovie).toHaveBeenLastCalledWith(2);
  });

  it('should render no similar movies if there is no movies', function() {
    const expectedText = 'No similar by genres movies';
    const noMovies = [];
    const getMovie = jest.fn();
    expect(shallow(<MovieScene
        match={match}
        getMovie={getMovie}
        movies={noMovies}
        movie={movie}/>).find('section.section').text()).toEqual(expectedText);
  });
});