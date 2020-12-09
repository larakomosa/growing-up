import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import AssignedListItem from '../../components/AssignedListItem/AssignedListItem.js';
import '../../components/AssignedListItem/AssignedListItem.css';

class AssignedList extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_ASSIGNED',
    });
    this.props.dispatch({
      type: 'GET_BANK_CHORES',
    });
    this.props.dispatch({
      type: 'GET_BANK_REWARDS',
    });
  }

  render() {
    const htmlArray = this.props.store.assigned.map((item, index) => {
      return <AssignedListItem key={index} item={item} />;
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

export default connect(mapStoreToProps)(withRouter(AssignedList));
