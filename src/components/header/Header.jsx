import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {

  render() {
    return (
        <nav className="navbar-dark">
            <Link to={'/movies'}>
                <span className="navbar-brand mb-0 h1">moviefrogsroulette</span>
            </Link>
        </nav>
    );
  }
}
