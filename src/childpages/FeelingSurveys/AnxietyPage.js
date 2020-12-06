import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import '../FeelingSurveys/surveys.css';
import swal from 'sweetalert';
import { Button, Container, Grid, Typography } from '@material-ui/core';

class AnxietyPage extends Component {
  state = {
    //setting state
    anxiety: '',
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      anxiety: changeEvent.target.value,
    });
  }; //feeling value is changed to targeted radio button

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.anxiety === '') {
      //doesn't allow user to advance to next page without selecting radio button
      swal('Please choose a bubble that shows how calm you feel today');
    } else {
      this.props.dispatch({
        type: 'ADD_ANXIETY', //sending information to index.js to be stored locally
        payload: parseInt(this.state.anxiety),
      });
      this.props.history.push('/thoughts');
    }
  };
  handleSubmit2 = (event) => {
    event.preventDefault();
    this.props.history.push('/sleep');
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
              <h3>How calm do you feel today?</h3>
              <form>
                <label>
                  <FormControlLabel
                    control={<Radio color="default" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/b07396df-afd9-4aa0-baa0-9627f3278f58_164-thunder-2.svg"
                        className="finishLine1"
                      ></img>
                    }
                    labelPlacement="top"
                    type="radio"
                    value="1"
                    checked={this.state.anxiety === '1'}
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
                    checked={this.state.anxiety === '2'}
                    onChange={this.handleOptionChange}
                  />
                </label>
                <label>
                  <FormControlLabel
                    control={<Radio color="default" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/7df37f94-eb8a-4dd8-a6b4-fa4c8a7caf5b_cloud.svg"
                        className="finishLine"
                      ></img>
                    }
                    labelPlacement="top"
                    type="radio"
                    value="3"
                    checked={this.state.anxiety === '3'}
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
                    checked={this.state.anxiety === '4'}
                    onChange={this.handleOptionChange}
                  />
                </label>
                <label>
                  <FormControlLabel
                    control={<Radio color="default" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/e12b1b81-d00b-4524-9816-e5a9d9f4db3d_193-flower-1.svg"
                        className="finishLine2"
                      ></img>
                    }
                    labelPlacement="top"
                    type="radio"
                    value="5"
                    checked={this.state.anxiety === '5'}
                    onChange={this.handleOptionChange}
                  />
                </label>
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
              </form>
            </div>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AnxietyPage));
