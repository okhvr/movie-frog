import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../src/router/Routes';

export default (pathname, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={pathname} context={context}>
      {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>
  );


  return `
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Movie Frog</title>
          <link rel="shortcut icon" href="/dist/favicon.ico">
          <link href="/dist/style.css" rel="stylesheet">
      </head>
      <body>
          <main id="movie-app">${content}</main>
          <script>window.INITIAL_STATE = ${JSON.stringify(store.getState())}</script>
          <script src="/dist/bundle.js"></script>
      </body>
  </html>
  `;
};