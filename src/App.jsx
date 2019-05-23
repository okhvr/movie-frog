import React from 'react';
import { BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import MoviesScene from './scenes/moviesScene/MoviesScene';
import MovieScene from './scenes/movieScene/MovieScene';
import Footer from './components/footer/Footer';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import NotFound from './components/notFound/NotFound';

export default class App extends React.Component {
    render() {
        return (
           <ErrorBoundary>
            <BrowserRouter>
                    <Switch>
                        <Route path="/movie/:id" component={MovieScene} />
                        <Route exact={true} path="/" component={MoviesScene} />
                        <Route path="/search/:query" component={MoviesScene} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
            </BrowserRouter> 
           </ErrorBoundary>
        );
    }
}
