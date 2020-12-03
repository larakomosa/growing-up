import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
          this.props.dispatch({
          type: 'GET_BANK_CHORES',
        });
        this.props.dispatch({
          type: 'GET_BANK_REWARDS',
        });
        swal('Success!! Your reward was purchased!');
      } else {
        swal('There was a problem with your purchase.  Pleases try again');
      }
    });
  };

 togglingDisplay2 = () => {
    //Function renders element based on state
    if (this.props.item.purchase_status === false) {
      return (
        <div>
          <img
            src="https://primebucket2020.s3.us-east-2.amazonaws.com/2c2d847c-2150-41b3-a193-598694c35274_loupe.svg"
            className="finishLine"
            onClick={() => this.handleClick(this.props.item.id)}
          ></img>
          <Typography
            gutterBottom
            variant="p"
            style={{ color: '#ee8673' }}
            component="h2"
          >
            {this.props.item.coin_price} Coins
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
    console.log('id', this.props.store.selected.id);
    return (
         <div className="welcome">
        <Grid
          container
          spacing={0}
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
            <Grid item xs={12} sm={4}>
              <img
                className="image1"
                src={this.props.store.selected.image}
                class="rounded"
                alt={this.props.store.selected.description}
              />
              <Typography gutterBottom variant="h5" component="h5">
                <h6> Coin Price: ${this.props.store.selected.coin_price}</h6>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography gutterBottom variant="h5" component="h5">
                <h4>{this.props.store.selected.reward}</h4>
              </Typography>

              <hr />
              <h6>{this.props.store.selected.description}</h6>
              <Button
                variant="outlined"
                color="default"
                type="submit"
                size="medium"
                onClick={() => this.handleClick(this.props.store.selected.id)}
              >
                {' '}
                BUY THIS NOW!
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

export default connect(mapStoreToProps)(withRouter(Selected));
