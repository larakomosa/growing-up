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
    this.props.history.push('/child/rewards'); //moves user back to home page
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
                onClick={() => this.handleClick(this.props.item.id)}
              >
                {' '}
                CONNECT PUT FUNCTION
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
