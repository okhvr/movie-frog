import React from 'react';
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import MoviesScene from './scenes/moviesScene/MoviesScene';
import MovieScene from './scenes/movieScene/MovieScene';

export default class App extends React.Component {
    render() {
        return (
           <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route path="/movies" component={MoviesScene} />
                        <Route path="/movie/" component={MovieScene} />
                        <Redirect from="/" to="/movies" />
                    </Switch>
                </div>
            </BrowserRouter> 
        );
    }
}
