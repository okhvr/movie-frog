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
                        <Route path="/movies/:id" component={MovieScene} />
                        {/* <Route path="/movies?search=:search&searchBy=:searchBy&sortBy=:sortBy" component={MovieScene} /> */}
                        <Redirect exact={true} from="/" to="/movies" />
                        <Route path="/movies" component={MoviesScene} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
            </BrowserRouter> 
           </ErrorBoundary>
        );
    }
}
