import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Selected from '../../components/Selected/Selected';

class DetailsPage extends Component {

  render() {
    return (
      <div>
        <Selected />
        <div className="footer"> </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(DetailsPage);