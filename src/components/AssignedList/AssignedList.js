import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import AssignedListItem from '../../components/AssignedListItem/AssignedListItem.js';

class AssignedList extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_ASSIGNED',
    });
  }
  render() {
    const htmlArray = this.props.store.assigned.map((item, index) => {
      return <AssignedListItem key={index} item={item} />;
    });
    return (
      <div className="assigned">
        <div className="row">{htmlArray}</div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AssignedList));