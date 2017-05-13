import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Helmet } from 'react-helmet'

import { setUser } from 'actions'

import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.dispatchUserActions();
  }
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>My Title App from Helmet</title>
        </Helmet>
        <h1>Index page</h1>
        <p>{'Email: ' + this.props.user.email}</p>
      </div>
    );
  }
}

// export default App;
const mapStateToProps = state => ({
  user: state.user
})

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dispatchUserActions: setUser
    // dispatchFetchDepartment: fetchDepartment,
  },dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(App)
