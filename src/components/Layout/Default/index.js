import React, { Component } from 'react';
import { Header } from 'components/Common';
// import './Default.css';

class Default extends Component {
  render() {
    return (
      <div className="Default">
        <Header />
        { this.props.children }
      </div>
    );
  }
}

export default Default;
