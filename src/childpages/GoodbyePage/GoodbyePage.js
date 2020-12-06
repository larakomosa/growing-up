import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../GoodbyePage/GoodbyePage.css';
import { Grid } from '@material-ui/core';

class GoodbyePage extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/home'); //moves user to next page
  };

  handleSubmit2 = (event) => {
    event.preventDefault();
    this.props.history.push('/login'); //moves user to next page
  };

  render() {
    return (
      <div className="goodbye">
        <Grid
          container
          spacing={0}
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={12} sm={10}>
            <h5>Goodbye!</h5>
            <img
              src="https://primebucket2020.s3.us-east-2.amazonaws.com/54ebcd62-6c5d-42dc-b301-4dce9540c91b_202-stay-home-7.svg"
              className="goodbyeHome"
              onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
            ></img>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(GoodbyePage));
