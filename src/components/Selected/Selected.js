import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Selected.css';
import swal from 'sweetalert';
import { Button, Container, Grid, Typography } from '@material-ui/core';

class Selected extends Component {
  state = {
    //sets initial state
    buying: false,
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SELECTED',
      payload: this.props.match.params.id,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/child/rewards');
  };

  handleClick = (id) => {
    console.log('id', this.props.store.selected.id);
    this.props.dispatch({
      type: 'UPDATE_SELECTED',
      payload: this.props.store.selected.id,
    });
    swal({
      title: 'Success!!',
      text:
        'Congratulations! You will get to enjoy this prize super-duper soon!',
      buttons: 'YAY!',
    }).then((willSubmit) => {
      if (willSubmit) {
        this.props.dispatch({
          type: 'GET_SELECTED',
          payload: this.props.store.selected.id,
        });
        // this.props.dispatch({
        //   type: 'GET_BANK_CHORES',
        // });
        // this.props.dispatch({
        //   type: 'GET_BANK_REWARDS',
        // });
        console.log('it worked');
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
            src="https://primebucket2020.s3.us-east-2.amazonaws.com/6b065aaa-1f71-409b-acf6-4870787a3d32_192-buy-2.svg"
            className="buyNow1"
            onClick={() => this.handleClick(this.props.store.selected.id)} //next button dispatches data to index.js and moves user to next page
          ></img>
        </div>
      );
    } else {
      return (
        <div>
          <img
            src="https://primebucket2020.s3.us-east-2.amazonaws.com/4304da7b-86d9-4712-b6b7-dbbbf16e72e2_189-balloons-2.svg"
            className="finishLine"
          ></img>
          <Typography
            gutterBottom
            variant="p"
            style={{ color: '#ff6e79' }}
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
      <div className="fixed1">
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
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/cc3158c1-2047-48ee-a1f7-759ee3c3f60f_172-right-arrows-1.svg"
                  className="detailsLeftArrow"
                  onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
                ></img>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography gutterBottom variant="h4" component="h4">
                  <h4>{this.props.store.selected.reward}</h4>
                </Typography>
                <hr />
                <Typography
                  gutterBottom
                  variant="p"
                  style={{ color: '#698399' }}
                  component="h6"
                >
                  {this.props.store.selected.description}
                </Typography>
                {this.togglingDisplay2()}
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
