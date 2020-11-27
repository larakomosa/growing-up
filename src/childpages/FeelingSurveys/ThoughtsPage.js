import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';

class ThoughtsPage extends Component {
  state = {
    comments: '',
  };

  handleChangeFor = (propertyName, event) => {
    this.setState({
      [propertyName]: event.target.value, //sets value of comments to what user inputs in comments text box
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'ADD_THOUGHTS',
      payload: this.state.comments, //sends data to index.js to be stored locally
    });
    swal({
      title: 'Great Job!',
      text: 'Are you ready to see your chores?!',
      buttons: true,
      dangerMode: true,
    }).then((willSubmit) => {
      if (willSubmit) {
        this.props.dispatch({
          type: 'POST_SURVEY',
          payload: this.props.store.survey, //sends data to index.js to be stored locally
        });
        console.log('dispatch', this.props.store.survey);
        this.props.history.push('/childchores');
        swal('Great! Lets See your Chores!', {
          icon: 'success',
        });
      } else {
        swal('Your imaginary file is safe!');
      }
    });
  };

  handleBack = (event) => {
    event.preventDefault();
    this.props.history.push('/anxiety'); //allows user to backtrack and change answers
  };

  render() {
    return (
      <div>
        <h2>Anything else on your mind?</h2>
        <form>
          <TextField
            className="textField"
            id="outlined-basic"
            variant="outlined"
            margin="normal"
            size="medium"
            onChange={(event) => this.handleChangeFor('comments', event)}
          />
        </form>
        <div className="buttons">
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="small"
            onClick={this.handleBack}
          >
            &#x2190; Back
          </Button>
          {'    '}
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="small"
            onClick={this.handleSubmit}
          >
            Next &#x2192;
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(ThoughtsPage);
