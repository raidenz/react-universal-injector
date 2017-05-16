// import React function
/* eslint-disable no-alert, no-console */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Helmet } from 'react-helmet';

// import redux and Route
import createRoutes from 'routes';
import configureStore from 'store';
import { Provider } from 'react-redux';

const path = require('path');
const fs = require('fs');

const routes = createRoutes({});

module.exports = function universalLoader(req, res) {
  // console.log('xxxxx', JSON.stringify(req.url))
  // =============================
  const filePath = path.resolve(__dirname, '..', 'build', 'asset-manifest.json');

  // eslint-disable-next-line consistent-return
  fs.readFile(filePath, 'utf8', (err, jsonData) => {
    if (err) {
      console.error('read err', err);
      return res.status(404).end();
    }
    const assets = JSON.parse(jsonData);

    // Destructure
    const { 'main.css': maincss, 'main.js': mainjs } = assets;
    // console.log(telox)
    // console.log(assets);
    match(
      { routes, location: req.url },
      (error, redirect, renderProps) => { // eslint-disable-line consistent-return
        if (error) {
          console.error('match err', err);
          return res.status(404).end();
        } else if (redirect) {
          res.redirect(302, redirect.pathname + redirect.search);
        } else if (renderProps) {
          const store = configureStore();
          const ReactApp = renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>,
          );
          const helmet = Helmet.renderStatic();
          res.render('main', {
            helmet,
            maincss,
            mainjs,
            ReactApp,
          });
        } else {
          return res.status(404).end();
        }
      },
    );
  });
  // =============================
};
