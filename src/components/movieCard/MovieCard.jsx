import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './style.scss';

export default class MovieCard extends Component {

    render() {
        const {movie} = this.props;
        return (
            <Link to={'/movie/' + movie.id}>
                <div className="card margins"style={{width: '18rem'}}>
                    <img src={movie.poster_path} className="card-img-top"/>
                    <div className="card-body">
                    <h5 className="card-title">{movie.title}<span className="badge badge-secondary">{movie.release_date}</span></h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    </div>
                </div>
            </Link>
        );
    }
}
