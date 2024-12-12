// import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
// import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

// app.use(
//   '/api',
//   proxy('http://react-ssr-api.herokuapp.com', {
//     proxyReqOptDecorator(opts) {
//       opts.headers['x-forwarded-host'] = 'localhost:3000';
//       return opts;
//     }
//   })
// );

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => (route.loadData ? route.loadData(store) : null))
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    }).filter((promise) => promise);

  const route = matchRoutes(Routes, req.path)[1];

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context, route);
    console.log('context', context);

    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(4002, (err) => {
  console.log('========>', 'here');
  if (err) {
    console.error('Error starting server:', err);
    return;
  }
  console.log('Listening on port 4002');
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error('Port 4002 is already in use');
  } else {
    console.error('Unknown error:', err);
  }
});
