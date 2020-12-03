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
              <h2>How calm do you feel today?</h2>
              <form>
                <label>
                  <FormControlLabel
                    control={<Radio color="primary" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/eef3686c-b8d6-47cd-bd7c-78fb765c00b7_thunder1.svg"
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
                    control={<Radio color="primary" />}
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
                    control={<Radio color="primary" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/8e951e91-1640-4001-a1b2-b2af4736aded_cloud.svg"
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
                    control={<Radio color="primary" />}
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
                    control={<Radio color="primary" />}
                    label={
                      <img
                        src="https://primebucket2020.s3.us-east-2.amazonaws.com/4d657412-a2eb-49b9-a381-bb2e4782b673_flower1copy.svg"
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
