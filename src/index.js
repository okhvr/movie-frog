import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Router from './router';  

import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import Footer from './components/footer/Footer';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';

hydrate(
    <Provider store={store}>
        <ErrorBoundary>
            <main className="scene">
                <Router/>
                <Footer/>
            </main>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('movie-app')
);
