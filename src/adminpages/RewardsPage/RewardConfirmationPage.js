import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import RewardConfirmation from '../../components/AdminConfirmation/RewardConfirmation.js';
import blueGrey from '@material-ui/core/colors/blueGrey';

class RewardConfirmationPage extends Component {
  handleBack = (event) => {
    event.preventDefault();
    console.log('hello');
    this.props.history.push('/admin/rewards'); //moves user back to home page
  };

  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        justify="flex-start"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={10}>
          <Typography
            gutterBottom
            variant="p"
            style={{
              fontSize: 30,
              fontStyle: 'italic',
              marginTop: '15px',
              fontFamily: 'Nunito',
              color: blueGrey,
            }}
            component="h2"
          >
            Child Preview
          </Typography>
          <RewardConfirmation />
        </Grid>{' '}
      </Grid>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(RewardConfirmationPage);
