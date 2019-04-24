import React, { Component } from 'react';

import './style.scss';

import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import { getMovie, getMovies } from '../../api';
import MovieFull from '../../components/movieFull/movieFull';
import MoviesList from '../../components/moviesList/MoviesList';

export default class MovieScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
        movie: {},
        movies: []
    }
  }

  componentDidMount() {
      this.refreshMovies();
      this.loadMovie(this.props.match.params.id);
  }

  refreshMovies = async () => {
      this.setState({
          movies: await getMovies()
      });
  };
  
  loadMovie = async (id) => {
    this.setState({movie: await getMovie(id)});
  }

  render() {
    return (
      <>
        <div className="block bg-block">
          <section className="bg-section">
            <Header />
            <Search />
            <MovieFull movie={this.state.movie}/>
          </section>         
        </div>
        <div className="subheader">
          <div className="bg-section">
            <p className="h5">Find by (genre)</p>
          </div>
        </div>
        <section className="section">
          <MoviesList movies={this.state.movies}/>
        </section>
      </>
    );
  }
}
