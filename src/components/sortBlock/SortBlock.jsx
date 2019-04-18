import React, { Component } from 'react';

import './style.scss';

export default class SortBlock extends Component {

  render() {
    return (
        <div className="filter h5">
            Sort by
            <label htmlFor="release">
                <input type="radio" id="release" name="sort" checked/>
                <span>release date</span>
            </label>
            <label htmlFor="raiting">
                <input type="radio" id="raiting" name="sort"/>
                <span>raiting</span>
            </label>
        </div>
    );
  }
}
