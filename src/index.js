import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';  

import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <main className="scene">
            <App/>
        </main>
    </Provider>,
    document.getElementById('movie-app')
);
