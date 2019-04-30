import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './style.scss';

import Header from '../../components/header/Header';
import MovieFull from '../../components/movieFull/movieFull';
import MoviesList from '../../components/moviesList/MoviesList';
import { searchMovieActionCreatorAsync } from '../../actions/movies';

class MovieScene extends Component {

  componentDidMount() {
      this.props.getMovie(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id){
       this.props.getMovie(this.props.match.params.id);
    }
  }

  render() {
    const { movie } = this.props;
    const movies = this.props.movies.filter(m => m.id !== movie.id);
    return (
      <>
        <div className="block bg-block">
          <section className="bg-section">
            <Header />
            <Link to={'/'}>
              <button className="btn btn-light btn-outline-danger toRight">Search</button>
            </Link>
            {movie ? <MovieFull movie={movie}/>: <div/>}
          </section>         
        </div>
        <div className="subheader">
          <div className="bg-section">
            <p className="h5">Find by genre</p>
          </div>
        </div>
        <section className="section">
          {movies.length > 0 ?
          <MoviesList movies={movies}/>:
          <div>No similar by genres movies</div>}
        </section>
      </>
    );
  }
}

function mapStateToProps(state) {
  const movies = state.movies.data;
  const movie = state.movies.movie;
  return { movies, movie };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovie: (id) => dispatch(searchMovieActionCreatorAsync(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieScene);