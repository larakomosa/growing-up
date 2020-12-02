import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Selected from '../../components/Selected/Selected.js';
import { Grid } from '@material-ui/core';
import '../DetailsPage/DetailsPage.css';

class DetailsPage extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/child/rewards'); //moves user to next page
  };

  handleSubmit2 = (event) => {
    event.preventDefault();
    this.props.history.push('/login'); //moves user to next page
  };

  render() {
    return (
      <div className="details">
        <Grid
          container
          spacing={0}
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item xs={12} sm={10}>
            <Selected />
            <Button
              variant="outlined"
              color="default"
              size="small"
              onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
            >
              Back to Rewards
            </Button>
            {'  '}
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(DetailsPage);
