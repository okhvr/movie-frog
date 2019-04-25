import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import MovieFull from '../../components/movieFull/movieFull';
import MoviesList from '../../components/moviesList/MoviesList';
import { searchMovieActionCreatorAsync, searchActionCreatorAsync, searchQueryChangedActionCreatorAsync, searchOptionSelectedActionCreatorAsync } from '../../actions/movies';

class MovieScene extends Component {

  componentDidMount() {
      this.refreshMovies();
      this.props.getMovie(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id){
       this.props.getMovie(this.props.match.params.id);
    }
  }

  refreshMovies = async () => {
    this.props.getMovies();
  };

  search = (query) => {
    this.props.searchQuery(query);
    this.refreshMovies();
  };

  changeSearchBy = (option) => {
    this.props.searchOptionSelected(option);
  };

  render() {
    const { movies, searchOptions, movie, query } = this.props;
    return (
      <>
        <div className="block bg-block">
          <section className="bg-section">
            <Header />
            <Search searchOptions={searchOptions}
              search={this.search}
              searchInput={query}
              changeSearchBy={this.changeSearchBy}/>
            {movie ? <MovieFull movie={movie}/>: <div />}
          </section>         
        </div>
        <div className="subheader">
          <div className="bg-section">
            <p className="h5">Find by genre</p>
          </div>
        </div>
        <section className="section">
          <MoviesList movies={movies}/>
        </section>
      </>
    );
  }
}

function mapStateToProps(state) {
  const movies = state.movies.data;
  const { searchOptions, query, movie } = state.movies;
  return { movies, searchOptions, query, movie };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: (params) => dispatch(searchActionCreatorAsync(params)),
    searchOptionSelected: (option) => dispatch(searchOptionSelectedActionCreatorAsync(option)),
    searchQuery: (query) => dispatch(searchQueryChangedActionCreatorAsync(query)),
    getMovie: (id) => dispatch(searchMovieActionCreatorAsync(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieScene);