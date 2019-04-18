import React, { Component } from 'react';

import './style.scss';

export default class MovieFull extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={movie.poster_path} className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <h5 className="card-title">
                                <span className="badge badge-secondary">{movie.release_date}</span>
                            </h5>
                            <p className="card-text">{movie.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}