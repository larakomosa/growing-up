import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';

class WelcomePage extends Component {
  state = {
    //setting state
    emotions: '',
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      feeling: changeEvent.target.value,
    });
  }; //feeling value is changed to targeted radio button

  handleSubmit = (event) => {
    event.preventDefault();
    // if (this.state.feeling === '') {
    //   //doesn't allow user to advance to next page without selecting radio button
    //   alert('Please select a number that indicates how you are feeling');
    // } else {
    //   this.props.dispatch({
    //     type: 'ADD_FEELING', //sending information to index.js to be stored locally
    //     payload: parseInt(this.state.feeling),
    //   });
    this.props.history.push('/feeling'); //moves user to next page
  };

  render() {
    return (
      <div>
        <h2>How are you feeling today?</h2>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          size="small"
          onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
        >
          Next &#x2192;
        </Button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(WelcomePage));
