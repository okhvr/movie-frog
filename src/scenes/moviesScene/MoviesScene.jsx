import React, { Component } from 'react';

import './style.scss';

import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import MoviesList from '../../components/moviesList/MoviesList';

import { getMovies } from '../../api';
import SortBlock from '../../components/sortBlock/SortBlock';

export default class MoviesScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
        movies: []
    }
  }

  componentDidMount() {
      this.refreshMovies();
  }

  refreshMovies = () => {
      this.setState({
          movies: getMovies()
      });
  };

  render() {
    return (
      <>
        <div className="block bg-block">
          <section className="bg-section">
            <Header />
            <Search />
          </section>         
        </div>
        <div className="subheader">
          <div className="bg-section">
            <p className="h5">7 movies found</p>
            <SortBlock />
          </div>
        </div>
        <section className="section">
          <MoviesList movies={this.state.movies}/>
        </section>
    </>
    );
  }
}
