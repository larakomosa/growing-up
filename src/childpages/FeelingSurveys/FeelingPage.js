import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import swal from 'sweetalert';
import '../FeelingSurveys/surveys.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { Button, Container, Grid, Typography } from '@material-ui/core';

class FeelingPage extends Component {
  componentDidMount() {
    swal({
      title: 'Good Morning!',
      text: 'Take this quick survey!',
    });
  }
  state = {
    //setting state
    feelings: '',
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      feelings: changeEvent.target.value,
    });
  }; //feeling value is changed to targeted radio button

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.feelings === '') {
      //doesn't allow user to advance to next page without selecting radio button
      swal('Please choose a bubble to show how you feel!');
    } else {
      this.props.dispatch({
        type: 'ADD_FEELING', //sending information to index.js to be stored locally
        payload: parseInt(this.state.feelings),
      });
      this.props.history.push('/sleep');
    }
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
              <h3>How do you feel today?</h3>
              <form className="finishLine4">
                <label>
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/519f81da-2b8a-4712-8726-514d1618f5e3_thunder.svg"
                        className="finishLine1"
                      ></img>
                    }
                    labelPlacement="top"
                    type="radio"
                    value="1"
                    checked={this.state.feelings === '1'}
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
                    checked={this.state.feelings === '2'}
                    onChange={this.handleOptionChange}
                  />
                </label>
                <label>
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/b4a8a885-7e8f-49cd-bfb1-33db6a207ced_rainbow.svg"
                        className="finishLine"
                      ></img>
                    }
                    labelPlacement="top"
                    type="radio"
                    value="3"
                    checked={this.state.feelings === '3'}
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
                    checked={this.state.feelings === '4'}
                    onChange={this.handleOptionChange}
                  />
                </label>
                <label>
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/ab03af9a-4512-49c2-a90b-b3baba63ed6c_sun1copy.svg"
                        className="finishLine2"
                      ></img>
                    }
                    labelPlacement="top"
                    type="radio"
                    value="5"
                    checked={this.state.feelings === '5'}
                    onChange={this.handleOptionChange}
                  />
                </label>
                <img
                  src="https://primebucket2020.s3.us-east-2.amazonaws.com/91b14ab3-070f-4eaf-8785-02676daeb6da_arrowcopy.svg"
                  className="nextArrow"
                  onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
                ></img>
                <div className="finishLine4"></div>
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

export default connect(mapStoreToProps)(withRouter(FeelingPage));
