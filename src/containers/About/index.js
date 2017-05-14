import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Helmet>
          <title>My Title About from Helmet</title>
        </Helmet>
        <h1>About</h1>
      </div>
    );
  }
}

export default About;
