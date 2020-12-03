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
    console.log('params', this.props.match.params.id);
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
        swal('Success!! Your reward was purchased!');
      } else {
        swal('Your imaginary file is safe!');
      }
    });
  };

  handleClick2 = (id) => {
    //sends user to targeting ID details page/sends ID to reducer
    this.props.history.push(`/child/rewards`);
  };

  render() {
    console.log('id', this.props.store.selected.id, this.props.store.user.id);
    return (
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
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/0ec2a0fe-07a1-435f-98bf-54d872edd6de_arrow.svg"
                className="buyNow"
                onClick={() => this.handleClick2} //next button dispatches data to index.js and moves user to next page
              ></img>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography gutterBottom variant="h4" component="h4">
                <h4>{this.props.store.selected.reward}</h4>
              </Typography>
              <hr />
              <h6>{this.props.store.selected.description}</h6>
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/9d8df12b-4f00-4a3b-8db3-17cd03663a53_buy-button.svg"
                className="buyNow1"
                onClick={() => this.handleClick(this.props.store.selected.id)} //next button dispatches data to index.js and moves user to next page
              ></img>
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

export default connect(mapStoreToProps)(withRouter(Selected));
