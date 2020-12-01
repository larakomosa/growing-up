import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';

import { Button, Container, Grid, Typography } from '@material-ui/core';

class RewardConfirmation extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_REWARD_CONF',
    });
  }

  handleAdd = (event) => {
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
              <img
                className="image1"
                src={this.props.store.rewardConf.image}
                class="rounded"
                alt={this.props.store.rewardConf.description}
              />
              <Typography gutterBottom variant="h5" component="h5">
                <h5> Coin Price: </h5>${this.props.store.rewardConf.coin_price}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography gutterBottom variant="h5" component="h5">
                <h1>{this.props.store.rewardConf.reward}</h1>
              </Typography>
              <Typography gutterBottom variant="h5" component="h5">
                <h5> Reward Description</h5>
              </Typography>

              <hr />
              <h2>{this.props.store.rewardConf.description}</h2>
            </Grid>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              size="medium"
              onClick={this.handleAdd}
            >
              {' '}
              Back to List!
            </Button>
          </Grid>
        </section>
      </Container>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(RewardConfirmation));
