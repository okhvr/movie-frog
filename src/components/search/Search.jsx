import React, { Component } from 'react';
import './style.scss';

export default class Search extends Component {

  render() {
    return (
        <div>
        <h5>FIND YOUR MOVIE</h5>
            <div className="input-group mb-3">
                <input type="text" className="form-control transparentInput" placeholder="Type here"/>
                <div className="input-group-append">
                    <span className="input-group-text transparentInput">↵</span>
                </div>
            </div>
            <div className="spaceBetween">
              <div>
                <span className="margins">SEARCH BY</span>
                <button type="button" className="btn btn-primary btn-sm margins">TITLE</button>
                <button type="button" className="btn btn-secondary btn-sm margins">GENRE</button>
              </div>
              <button type="button" className="btn btn-secondary">SEARCH</button>
            </div>
        </div>
    );
  }
}
