import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class AdminWelcomePage extends Component {
  render() {
    return (
      <div>
        <h2>Adult User -  {this.props.store.user.username} Welcome!</h2>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AdminWelcomePage));