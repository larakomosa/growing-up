import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import RewardListItem from '../../components/RewardListItem/RewardListItem.js';

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
    return (     <div className="rewards">
        <div className="row">{htmlArray}</div>
        <h2> hi </h2> 
      </div>)
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(RewardList));