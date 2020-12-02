import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';

import { Button, Container, Grid, Typography } from '@material-ui/core';

class ChoreConfirmation extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CHORE_CONF',
      // payload: this.props.match.params.id,
    });
  }

  handleHome = (event) => {
    event.preventDefault();
    console.log('hello');
    this.props.history.push('/admin/add'); //moves user back to home page
  };

  render() {
    return (
      <Container>
        <section>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={4}>
              <img src={this.props.store.choreConf.icon}></img>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography>
                <h4> {this.props.store.choreConf.chore}</h4>{' '}
              </Typography>
              <Typography gutterBottom variant="h5" component="h5">
                <h2> Coin Value: ${this.props.store.choreConf.coin_value}</h2>
              </Typography>
              <hr />
              <h3>{this.props.store.choreConf.description}</h3>

              <div></div>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                size="medium"
                onClick={this.handleHome}
              >
                {' '}
                Back to List!
              </Button>
            </Grid>
          </Grid>
        </section>
      </Container>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(ChoreConfirmation));
