import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './style.scss';

import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import MoviesList from '../../components/moviesList/MoviesList';
import SortBlock from '../../components/sortBlock/SortBlock';
import { searchQueryChangedActionCreatorAsync, searchOptionSelectedActionCreatorAsync, sortOptionSelectedActionCreatorAsync, clearMoviesActionCreator, clearSearchQueryActionCreator, searchQueryChangedActionCreator, searchOptionSelectedActionCreator, sortOptionSelectedActionCreator } from '../../actions/movies';
import { searchOptions, sortOptions } from '../../constants';

class MoviesScene extends Component {
  componentDidMount() {
    const query = this.props.match.params.query || '';
    this.search(query);
  }

  componentDidUpdate(prevProps) {
    const url = this.props.match.url;
    if (url ==='/' && url !== prevProps.match.url){
      this.search('');
    }
  }

  sort = (option) => {
    if (!!this.props.query) {
      this.props.sortOptionSelectAndSearch(option.value);
    } else {
      this.props.sortOptionSelected(option.value);
    }    
  };

  search = (query) => {
    if (!!query) {
      this.props.searchQuery(query);
      this.props.history.push(`/search/${query}`);
    } else {
      this.props.clearMovies();
      this.props.clearSearch();
      this.props.history.push(`/`);
    }
    
  };

  changeSearchBy = (option) => {
    if (!!this.props.query) {
      this.props.searchOptionSelectAndSearch(option.name);
    } else {
      this.props.searchOptionSelected(option.name);
    }
  };

  render() {
    const { movies, searchOption, sortOption, query } = this.props;
    return (
      <>
        <div className="block bg-block">
          <section className="bg-section">
            <Header />
            <Search searchOptions={searchOptions}
              selectedSearchOption={searchOption}
              search={this.search}
              searchInput={query}
              changeSearchBy={this.changeSearchBy}
            />
          </section>         
        </div>
        <div className="subheader">
          <div className="bg-section">
            <p className="h5">{movies.length} movies found</p>
            <SortBlock sort={this.sort}
              sortOptions={sortOptions}
              selectedSortOption={sortOption}
            />
          </div>
        </div>
        <section className="section">
          <MoviesList movies={movies}/>
        </section>
    </>
    );
  }
}

export function mapStateToProps(state) {
  const movies = state.movies.data;
  const { searchOption, sortOption, query } = state.movies;
  return { movies, searchOption, sortOption, query };
}

export function mapDispatchToProps(dispatch) {
  return {
    searchOptionSelected: option => dispatch(searchOptionSelectedActionCreator(option)),
    searchOptionSelectAndSearch: (option) => dispatch(searchOptionSelectedActionCreatorAsync(option)),
    sortOptionSelected: (option) => dispatch(sortOptionSelectedActionCreator(option)),
    sortOptionSelectAndSearch: (option) => dispatch(sortOptionSelectedActionCreatorAsync(option)),  
    searchQuery: (query) => dispatch(searchQueryChangedActionCreatorAsync(query)),
    clearMovies: () => dispatch(clearMoviesActionCreator()),
    clearSearch: () => dispatch(clearSearchQueryActionCreator()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviesScene));
