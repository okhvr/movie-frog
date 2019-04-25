import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'queryString';

import './style.scss';

import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import MoviesList from '../../components/moviesList/MoviesList';
import SortBlock from '../../components/sortBlock/SortBlock';
import { searchQueryChangedActionCreatorAsync, searchOptionSelectedActionCreatorAsync, sortOptionSelectedActionCreatorAsync } from '../../actions/movies';

class MoviesScene extends Component {
  componentDidMount() {
    // var parsed = queryString.parse(this.props.location.search);
    // console.log(this.props.location.search, parsed);
  }

  sort = (option) => {
    this.props.sortOptionSelected(option);
  };

  search = (query) => {
    this.props.searchQuery(query);
  };

  changeSearchBy = (option) => {
    this.props.searchOptionSelected(option);
  };

  render() {
    const { movies, searchOptions, sortOptions, query } = this.props;
    return (
      <>
        <div className="block bg-block">
          <section className="bg-section">
            <Header />
            <Search searchOptions={searchOptions}
              search={this.search}
              searchInput={query}
              changeSearchBy={this.changeSearchBy}
            />
          </section>         
        </div>
        <div className="subheader">
          <div className="bg-section">
            <p className="h5">{movies.length} movies found</p>
            <SortBlock sort={this.sort} sortOptions={sortOptions}/>
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
  const { searchOptions, sortOptions, query } = state.movies;
  return { movies, searchOptions, sortOptions, query };
}

function mapDispatchToProps(dispatch) {
  return {
    searchOptionSelected: (option) => dispatch(searchOptionSelectedActionCreatorAsync(option)),
    sortOptionSelected: (option) => dispatch(sortOptionSelectedActionCreatorAsync(option)),  
    searchQuery: (query) => dispatch(searchQueryChangedActionCreatorAsync(query))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesScene);
