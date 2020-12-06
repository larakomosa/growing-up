import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

class Bank extends Component {
  state = {
    total: '',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_BANK_CHORES',
    });
    this.props.dispatch({
      type: 'GET_BANK_REWARDS',
    });
  }

  render() {
    let bankChores = this.props.store.bankChores.sum;
    let bankRewards = this.props.store.bankRewards.sum;
    let total = bankChores - bankRewards;
    return <h1>{total} Coins</h1>;
  }
}
export default connect(mapStoreToProps)(Bank);
