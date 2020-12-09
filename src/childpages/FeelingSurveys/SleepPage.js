import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import '../FeelingSurveys/surveys.css';
import { Grid } from '@material-ui/core';
import swal from 'sweetalert';

class SleepPage extends Component {
  state = {
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
      <div className="fixed">
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
              <h3>How did you sleep last night?</h3>
              <form>
                <label>
                  <FormControlLabel
                    control={<Radio color="default" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/17b83d1c-618d-4ca0-857e-0d573f27e6de_night1.svg"
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
                    control={<Radio color="default" />}
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
                    control={<Radio color="default" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/13627a04-7e37-4a56-affa-8dad71463a54_162-cloudy-4.svg"
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
                    control={<Radio color="default" />}
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
                    control={<Radio color="default" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/0af37070-73ea-40e2-9765-e4070baeba2e_163-sun-4.svg"
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
              </form>
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/5d32aaa3-44d3-459b-9f72-bcc59821efe1_171-right-arrows.svg"
                className="nextArrow"
                onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
              ></img>
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/cc3158c1-2047-48ee-a1f7-759ee3c3f60f_172-right-arrows-1.svg"
                className="backArrow"
                onClick={this.handleSubmit2} //next button dispatches data to index.js and moves user to next page
              ></img>
            </div>
            <div className="button1"></div>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(SleepPage));
