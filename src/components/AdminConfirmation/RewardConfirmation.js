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
    this.props.history.push('/admin/rewards'); //moves user back to home page
  };

  render() {
    return (
      <div className="fixed1">
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
                <Typography gutterBottom variant="h2" component="h2">
                  <h4> {this.props.store.rewardConf.coin_price} Coins</h4>
                </Typography>
                <img
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/cc3158c1-2047-48ee-a1f7-759ee3c3f60f_172-right-arrows-1.svg"
                  className="detailsLeftArrow"
                  onClick={this.handleAdd} //next button dispatches data to index.js and moves user to next page
                ></img>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography gutterBottom variant="h4" component="h4">
                  <h4>{this.props.store.rewardConf.reward}</h4>
                </Typography>
                <hr />
                <h6>{this.props.store.rewardConf.description}</h6>
                <img
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/6b065aaa-1f71-409b-acf6-4870787a3d32_192-buy-2.svg"
                  className="buyNow1"
                ></img>
              </Grid>
            </Grid>
          </section>
        </Container>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(RewardConfirmation));
