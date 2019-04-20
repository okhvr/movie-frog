import React from 'react';
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import MoviesScene from './scenes/moviesScene/MoviesScene';
import MovieScene from './scenes/movieScene/MovieScene';
import Footer from './components/footer/Footer';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

export default class App extends React.Component {
    render() {
        return (
           <ErrorBoundary>
            <BrowserRouter>
                    <Switch>
                        <Route path="/movies" exact={true} component={MoviesScene} />
                        <Route path="/movies/:id" component={MovieScene} />
                        <Redirect from="/" to="/movies" />
                    </Switch>
                    <Footer />
            </BrowserRouter> 
           </ErrorBoundary>
        );
    }
}
