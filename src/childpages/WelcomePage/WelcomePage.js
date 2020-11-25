import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class WelcomePage extends Component {
componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_NOTE',
    });
    console.log ('dispatch)')
  }

handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/feeling'); //moves user to next page
  };

  render() {
    return (
      <div>
        <h2>Hi  {this.props.store.user.username} Welcome!</h2>
        <h3>{this.props.store.note.message}</h3>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
        >
          Take Emotions Survey!
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(WelcomePage));
