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
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/c8318dae-56c1-49b7-ab8b-ee25ecd3323d_left-arrowcopy.svg"
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
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/cfe439ab-af1b-43c6-9399-a05abc5d9112_button.svg"
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
