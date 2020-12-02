import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import '../FeelingSurveys/surveys.css';

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
      alert('Please select a number that indicates how you are feeling');
    } else {
      this.props.dispatch({
        type: 'ADD_ANXIETY', //sending information to index.js to be stored locally
        payload: parseInt(this.state.anxiety),
      });
      this.props.history.push('/thoughts');
    }
  };

  render() {
    return (
      <div>
        <div className="welcome1">
          <h2>How anxious are you?</h2>
          <form>
            <label>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="1"
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
                label="2"
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
                label="3"
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
                label="4"
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
                label="5"
                labelPlacement="top"
                type="radio"
                value="5"
                checked={this.state.anxiety === '5'}
                onChange={this.handleOptionChange}
              />
            </label>
            <label>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="6"
                labelPlacement="top"
                type="radio"
                value="6"
                checked={this.state.anxiety === '6'}
                onChange={this.handleOptionChange}
              />
            </label>
          </form>
        </div>
        <div className="button1">
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="large"
            onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
          >
            Next &#x2192;
          </Button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AnxietyPage));
