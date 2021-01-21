import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChoreConfirmation from '../../components/AdminConfirmation/ChoreConfirmation.js';
import { Grid, Typography } from '@material-ui/core';

class ChoreConfirmationPage extends Component {
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
            {' '}
            Chore Added Successfully!
          </Typography>
          <ChoreConfirmation />
          <div className="footer"> </div>
        </Grid>
      </Grid>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(ChoreConfirmationPage);
