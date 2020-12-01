import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import AssignedList from '../../components/AssignedList/AssignedList.js';

class ChoresPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_ASSIGNED',
    });
    console.log('dispatch');
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/child/rewards'); //moves user to next page
  };
  render() {
    return (
      <div>
        <h2>hello</h2>
        <AssignedList />
        <div className="footer"> </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(ChoresPage);
