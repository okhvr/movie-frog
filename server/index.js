import express from 'express';
import store from '../src/store';
import render from './render';

const  app = express();
const port = 3000;

app.use('/dist', express.static('dist'));
app.use('/pictures', express.static('pictures'))

app.get('*', (req, res) => {
  const context = {};
  const content = render(req.path, store, context);

  res.send(content);
  });

app.listen(port,  () => console.log(`Example app listening on port ${port}!`));
