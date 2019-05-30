import express from 'express';
import store from '../src/store';
import render from './render';
import { matchRoutes } from 'react-router-config';
import Routes from '../src/router/Routes';

const  app = express();
const port = 3000;

app.use('/dist', express.static('dist'));
app.use('/pictures', express.static('pictures'))

app.get('*', async (req, res) => {
  const actions = matchRoutes(Routes, req.path)
    .map((route) => {
      return route.route.component.fetching ? route.route.component.fetching(store, route.match.params) : null
    })
    .map(async actions => await Promise.all(
      (actions || []).map(p => p && new Promise(resolve => p.then(resolve).catch(resolve)))
      )
    );

  await Promise.all(actions);

  const context = {};
  const content = render(req.path, store, context);

  res.send(content);
  });

app.listen(port,  () => console.log(`Example app listening on port ${port}!`));
