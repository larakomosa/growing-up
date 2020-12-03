import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import '../FeelingSurveys/surveys.css';
import { Grid } from '@material-ui/core';
import swal from 'sweetalert';

class SleepPage extends Component {
  state = {
    //setting state
    sleep: '',
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      sleep: changeEvent.target.value,
    });
  }; //feeling value is changed to targeted radio button

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.sleep === '') {
      //doesn't allow user to advance to next page without selecting radio button
      swal('Please select a number that indicates how you are feeling');
    } else {
      this.props.dispatch({
        type: 'ADD_SLEEP', //sending information to index.js to be stored locally
        payload: parseInt(this.state.sleep),
      });
      this.props.history.push('/anxiety');
    }
  };

  handleSubmit2 = (event) => {
    event.preventDefault();
    this.props.history.push('/feeling');
  };

  render() {
    return (
      <div className="background">
        <Grid
          container
          spacing={0}
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{ minHeight: '100vh' }}
        >
          <div className="welcome1">
            <h2>How did you sleep last night?</h2>
            <form>
              <label>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label={
                    <img
                      src="https://primebucket2020.s3.us-east-2.amazonaws.com/c5a9594c-a8d2-4d0f-8b6b-84989f22ba71_night.svg"
                      className="finishLine"
                    ></img>
                  }
                  labelPlacement="top"
                  type="radio"
                  value="1"
                  checked={this.state.sleep === '1'}
                  onChange={this.handleOptionChange}
                />
              </label>
              <label>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label={<div className="finishLine3"></div>}
                  labelPlacement="top"
                  type="radio"
                  value="2"
                  checked={this.state.sleep === '2'}
                  onChange={this.handleOptionChange}
                />
              </label>
              <label>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label={
                    <img
                      src="https://primebucket2020.s3.us-east-2.amazonaws.com/a2e518af-f9b2-40e5-92a8-ec483143d159_cloudy.svg"
                      className="finishLine"
                    ></img>
                  }
                  labelPlacement="top"
                  type="radio"
                  value="3"
                  checked={this.state.sleep === '3'}
                  onChange={this.handleOptionChange}
                />
              </label>
              <label>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label={<div className="finishLine3"></div>}
                  labelPlacement="top"
                  type="radio"
                  value="4"
                  checked={this.state.sleep === '4'}
                  onChange={this.handleOptionChange}
                />
              </label>
              <label>
                <FormControlLabel
                  control={<Radio color="primary" />}
                  label={
                    <img
                      src="https://primebucket2020.s3.us-east-2.amazonaws.com/c45fd85f-3240-4771-8406-6485f88f8000_sun1.svg"
                      className="finishLine"
                    ></img>
                  }
                  labelPlacement="top"
                  type="radio"
                  value="5"
                  checked={this.state.sleep === '5'}
                  onChange={this.handleOptionChange}
                />
              </label>
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/91b14ab3-070f-4eaf-8785-02676daeb6da_arrowcopy.svg"
                className="nextArrow"
                onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
              ></img>
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/0ec2a0fe-07a1-435f-98bf-54d872edd6de_arrow.svg"
                className="backArrow"
                onClick={this.handleSubmit2} //next button dispatches data to index.js and moves user to next page
              ></img>
            </form>
          </div>
          <div className="button1"></div>
        </Grid>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(SleepPage));
