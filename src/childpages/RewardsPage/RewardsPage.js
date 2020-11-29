import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import RewardsList from '../../components/RewardsList/RewardsList.js';

class RewardsPage extends Component {
  render() {
    return (
      <div>
        <RewardsList />
        <div className="footer"> </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(RewardsPage);
