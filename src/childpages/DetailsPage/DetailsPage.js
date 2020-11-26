import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Selected from '../../components/Selected/Selected.js';

class DetailsPage extends Component {

  render() {
    return (
      <div>
        <h1> Details Page </h1>
        <Selected />
         {this.props.store.selected.reward}
        <div className="footer"> </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(DetailsPage);