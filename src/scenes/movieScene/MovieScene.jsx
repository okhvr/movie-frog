import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MovieScene extends Component {

  render() {
    return (
      <div>
          <Link to={'/movies'}>
              <button>To movies</button>
          </Link>
          <p>my movies</p>
      </div>
    );
  }
}
