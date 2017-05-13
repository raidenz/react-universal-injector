import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
      <Helmet>
        <title>Not Found</title>
      </Helmet>
        <h1>NotFound</h1>
      </div>
    );
  }
}

export default NotFound;
