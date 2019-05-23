import React, { Component } from 'react';
import './style.scss';

export default class Search extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.searchInput !== this.props.searchInput){
      this.setState({search: this.props.searchInput});
    }
  }

  state = {
    search: this.props.searchInput
  }

  changeSearch = (e) => {
    const val = e.currentTarget.value;
    if (val !== this.state.search) {
      this.setState({search: val});
    }
  };

  search = () => {
    this.props.search(this.state.search);
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.search();
    }
  };

  render() {
    const searchOptions = this.props.searchOptions.map(o => {
        return {
            name: o,
            selected: this.props.selectedSearchOption === o
        };
    });
    return (
        <div>
        <h5>FIND YOUR MOVIE</h5>
            <div className="input-group mb-3">
                <input type="text"
                  className="form-control transparentInput"
                  placeholder="Type here"
                  value={this.state.search}
                  onChange={this.changeSearch}
                  onKeyDown={this.handleKeyDown}
                />
                <div className="input-group-append"
                  onClick={this.search}
                >
                  <span className="input-group-text transparentInput">↵</span>
                </div>
            </div>
            <div className="spaceBetween">
              <div>
                <span className="margins">SEARCH BY</span>
                {searchOptions.map(option => 
                  <button
                    key={option.name}
                    type="button"
                    className={option.selected ? "btn btn-primary btn-sm margins" : "btn btn-secondary btn-sm margins"}
                    onClick={() => this.props.changeSearchBy(option)}
                  >{option.name.toUpperCase()}</button>
                )}
              </div>
              <button type="button"
                className="btn btn-secondary"
                onClick={this.search}
              >SEARCH</button>
            </div>
        </div>
    );
  }
}
