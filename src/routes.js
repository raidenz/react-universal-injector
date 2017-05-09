import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

/**
 * Layout
 */
import Default from './components/Layout/Default'

import App from './containers/App';
import About from './containers/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
	{/*console.log(props)*/}
    <Route path="/" component={Default}>
      <IndexRoute component={App} />
	    <Route path="/about" component={About} />
	    <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;
