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
                      src="https://primebucket2020.s3.us-east-2.amazonaws.com/2b98d42a-8474-4b82-b7de-f02cfe860804_dogA.svg"
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
                      src="https://primebucket2020.s3.us-east-2.amazonaws.com/45265a8d-af83-48e8-8f5c-584d8ba1ecb2_dogB.svg"
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
                      src="https://primebucket2020.s3.us-east-2.amazonaws.com/6b2fa935-5871-4776-bd02-4a1875f28a72_dogC.svg"
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
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AnxietyPage));
