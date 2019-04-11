import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MoviesScene extends Component {

  render() {
    return (
      <div>
          <Link to={'/movie'}>
              <button>To movie</button>
          </Link>
      </div>
    );
  }
}
