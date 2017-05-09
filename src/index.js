//react router berubah di versi 4
/**
 * https://medium.com/@benlu/ssr-with-create-react-app-v2-1b8b520681d9
 * https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d
 * https://medium.com/@ivanmontiel/changing-old-habits-in-react-router-4-8483ee5e087c
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import configureStore from './store'

import Routes from './routes';

import './index.css';

// Let the reducers handle initial state
const initialState = {}
const store = configureStore(initialState)

  // <Routes history={browserHistory}  telo="telo"/>,
ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
