import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RewardListItem from '../../components/RewardListItem/RewardListItem.js';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';

class RewardList extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_REWARDS',
    });
  }
  render() {
    const htmlArray = this.props.store.rewards.map((item, index) => {
      return <RewardListItem key={index} item={item} />;
    });
    return (
      <div className="container">
        <Grid
          container
          spacing={2}
          align="center"
          justify="center"
          alignItems="center"
        >
          {htmlArray}
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(RewardList));
