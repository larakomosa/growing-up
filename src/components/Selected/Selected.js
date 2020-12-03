import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Selected.css';
import swal from 'sweetalert';
import { Button, Container, Grid, Typography } from '@material-ui/core';

class Selected extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SELECTED',
      payload: this.props.match.params.id,
    });
  }

  handleClick = (id) => {
    console.log('id', this.props.store.selected.id);
    swal({
      title: 'Great Choice!',
      text: 'Are you sure your ready to buy this?',
      buttons: true,
    }).then((willSubmit) => {
      if (willSubmit) {
        this.props.dispatch({
          type: 'UPDATE_SELECTED',
          payload: this.props.store.selected.id,
        });
        this.props.dispatch({
          type: 'GET_BANK_CHORES',
        });
        this.props.dispatch({
          type: 'GET_BANK_REWARDS',
        });
        swal('Success!! Your reward was purchased! Continue to browse');
        this.props.history.push(`/child/rewards`);
      }
    });
  };

  handleClick2 = (id) => {
    console.log('handle fired');
    this.props.history.push(`/child/rewards`);
  };

  togglingDisplay2 = () => {
    //Function renders element based on state
    if (this.props.store.selected.purchase_status === false) {
      return (
        <div>
          <img
            src="https://primebucket2020.s3.us-east-2.amazonaws.com/cfe439ab-af1b-43c6-9399-a05abc5d9112_button.svg"
            className="buyNow1"
            onClick={() => this.handleClick(this.props.store.selected.id)} //next button dispatches data to index.js and moves user to next page
          ></img>
          <Typography
            gutterBottom
            variant="p"
            style={{ color: '#ee8673' }}
            component="h2"
          >
            {this.props.store.selected.coin_price} Coins
          </Typography>
        </div>
      );
    } else {
      return (
        <div>
          <img
            src="https://primebucket2020.s3.us-east-2.amazonaws.com/903b467f-16fd-4e41-9c8a-4b130f407cd8_balloons.svg"
            className="finishLine"
          ></img>
          <Typography
            gutterBottom
            variant="p"
            style={{ color: '#ee8673' }}
            component="h2"
          >
            Purchased
          </Typography>
        </div>
      );
    }
  };

  render() {
    console.log('id', this.props.store.selected.id, this.props.store.user.id);
    return (
      <div className="fixed">
        <Container>
          <section>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={4}>
                <img
                  className="image1"
                  src={this.props.store.selected.image}
                  class="rounded"
                  alt={this.props.store.selected.description}
                />
                <Typography gutterBottom variant="h5" component="h5">
                  <h4> {this.props.store.selected.coin_price} Coins</h4>
                </Typography>
                <img
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/c8318dae-56c1-49b7-ab8b-ee25ecd3323d_left-arrowcopy.svg"
                  className="detailsLeftArrow"
                  onClick={() => this.handleClick2} //next button dispatches data to index.js and moves user to next page
                ></img>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography gutterBottom variant="h4" component="h4">
                  <h4>{this.props.store.selected.reward}</h4>
                </Typography>
                <hr />
                <h6>{this.props.store.selected.description}</h6>
                {this.togglingDisplay2()}
                {/* <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/cfe439ab-af1b-43c6-9399-a05abc5d9112_button.svg"
                className="buyNow1"
                onClick={() => this.handleClick(this.props.store.selected.id)} //next button dispatches data to index.js and moves user to next page
              ></img> */}
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

export default connect(mapStoreToProps)(withRouter(Selected));
