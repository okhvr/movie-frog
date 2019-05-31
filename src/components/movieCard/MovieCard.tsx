import { Component } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MovieType } from '../../types';

type MyProps = {
    movie: MovieType,
};
const StyledContainer = styled.div.attrs({
    className: "card",
  })`
    width: 18rem;
    margin: 20px;
  `;

export default class MovieCard extends Component {
    props: MyProps;

    render() {
        const {movie} = this.props;
        return (
            <Link to={'/movie/' + movie.id}>
                <StyledContainer>
                    <img src={movie.poster_path} className="card-img-top"/>
                    <div className="card-body">
                    <h5 className="card-title">{movie.title}<span className="badge badge-secondary">{movie.release_date}</span></h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    </div>
                </StyledContainer>
            </Link>
        );
    }
}
