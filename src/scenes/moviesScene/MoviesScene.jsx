import React, { Component } from 'react';

import './style.scss';

import Header from '../../components/header/Header';
import Search from '../../components/search/Search';
import MoviesList from '../../components/moviesList/MoviesList';

import { getMovies } from '../../api';
import SortBlock from '../../components/sortBlock/SortBlock';

const sortOptions= [
  {
    value: 'release_date',
    label: 'release date'
  },
  {
    value: 'vote_average',
    label: 'raiting'
  }
];
const searchOptions = [
  {
    name:'title',
    selected: true
  },
  {
    name: 'genres',
    selected: false
  }
];

export default class MoviesScene extends Component {

  constructor(props) {
    super(props);

    this.state = {
        movies: [],
        sortOptions: sortOptions,
        searchOptions: searchOptions,
        sortBy: sortOptions[0],
        search: '',
    }
  }

  componentDidMount() {
      this.refreshMovies({sortBy: this.state.sortBy});
  }

  refreshMovies = async () => {
      const searchBy = this.state.searchOptions.find(o => o.selected);
      const params = {
        sortBy: this.state.sortBy,
        searchBy: searchBy.name
      };
      if (this.state.search.length > 0) {
        params.search = this.state.search
      }
      this.setState({
          movies: await getMovies(params)
      });
  };

  sort = (query) => {
    this.setState({sortBy: query}, this.refreshMovies);
  };

  search = (query) => {
    this.setState({search: query}, this.refreshMovies);
  };

  changeSearchBy = (option) => {
    const searchOptions = this.state.searchOptions.map(o => o.selected = o.name === option);
    this.setState(searchOptions);
  };

  render() {
    return (
      <>
        <div className="block bg-block">
          <section className="bg-section">
            <Header />
            <Search searchOptions={this.state.searchOptions}
              search={this.search}
              changeSearchBy={this.changeSearchBy}
            />
          </section>         
        </div>
        <div className="subheader">
          <div className="bg-section">
            <p className="h5">{this.state.movies.length} movies found</p>
            <SortBlock sort={this.sort} sortOptions={this.state.sortOptions}/>
          </div>
        </div>
        <section className="section">
          <MoviesList movies={this.state.movies}/>
        </section>
    </>
    );
  }
}
