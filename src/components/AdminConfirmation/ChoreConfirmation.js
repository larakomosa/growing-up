import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';

import { Container, Grid, Typography } from '@material-ui/core';

class ChoreConfirmation extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CHORE_CONF',
      // payload: this.props.match.params.id,
    });
  }

  handleHome = (event) => {
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
                  style={{
                    // marginLeft: 75,

                    height: 200,
                    width: 200,
                  }}
                  className="image1"
                  src={this.props.store.choreConf.icon}
                  class="rounded"
                  alt={this.props.store.choreConf.description}
                />
                <Typography gutterBottom variant="h2" component="h2">
                  <h4> {this.props.store.choreConf.coin_value} Coins</h4>
                </Typography>
                <img
                  // style={{ marginLeft: 105 }}
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/cc3158c1-2047-48ee-a1f7-759ee3c3f60f_172-right-arrows-1.svg"
                  className="detailsLeftArrow"
                  onClick={this.handleHome} //next button dispatches data to index.js and moves user to next page
                ></img>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography gutterBottom variant="h4" component="h4">
                  <h4>{this.props.store.choreConf.chore}</h4>
                </Typography>
                <hr />
                <h6>{this.props.store.choreConf.description}</h6>
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

export default connect(mapStoreToProps)(withRouter(ChoreConfirmation));
