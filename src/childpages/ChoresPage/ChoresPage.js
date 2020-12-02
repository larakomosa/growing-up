import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
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
        <Grid
          container
          spacing={0}
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={12} sm={10}>
            <h4>My Weekly Chores!</h4>
          </Grid>
          <AssignedList />
        </Grid>
        <div className="footer"> </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(ChoresPage);
