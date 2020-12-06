import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import RewardsList from '../../components/RewardsList/RewardsList.js';
import { Grid, Typography } from '@material-ui/core';

class RewardsPage extends Component {
  render() {
    return (
      <div className="fixed">
        <div className="reward">
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
                style={{
                  marginTop: 20,
                  color: '#FF6E79',
                  fontFamily: 'Nerko One',
                  fontSize: 35,
                  marginBottom: 5,
                }}
                component="h4"
              >
                Prize Shop
              </Typography>
            </Grid>
            <RewardsList />
          </Grid>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(RewardsPage);
