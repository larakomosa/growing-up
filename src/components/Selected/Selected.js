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

  render() {
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
