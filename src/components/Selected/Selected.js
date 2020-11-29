import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Button, Container, Grid, Typography } from '@material-ui/core';

class Selected extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SELECTED',
      payload: this.props.match.params.id,
    });
  }

  handleHome = (event) => {
    event.preventDefault();
    this.props.history.push('/childrewards'); //moves user back to home page
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
                <h5> Coin Price: </h5>${this.props.store.selected.coin_price}
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                size="medium"
                onClick={() => this.handleClick(this.props.item.id)}
              >
                {' '}
                Buy This Now!!
              </Button>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography gutterBottom variant="h5" component="h5">
                <h5> More Details</h5>
              </Typography>

              <hr />
              <h2>{this.props.store.selected.description}</h2>

              <div></div>
              <Button
                variant="outlined"
                color="primary"
                type="submit"
                size="medium"
                onClick={() => this.handleHome}
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

export default connect(mapStoreToProps)(withRouter(Selected));
