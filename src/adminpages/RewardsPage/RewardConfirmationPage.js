import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

import RewardConfirmation from '../../components/AdminConfirmation/RewardConfirmation.js';

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
              color: '#ff6e79',
              fontSize: 30,
              paddingTop: 15,
              fontFamily: 'nunito',
              fontWeight: 'bold',
            }}
            component="h2"
          >
            Your Reward has been added!
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
