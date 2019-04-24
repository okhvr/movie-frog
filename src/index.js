import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

import App from './App';    

ReactDOM.render(
    <main className="scene">
       <App/>
    </main>,
    document.getElementById('movie-app')
);
