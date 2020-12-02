import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import swal from 'sweetalert';
import '../FeelingSurveys/surveys.css';
import { Grid } from '@material-ui/core';

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
      text: 'Are you ready to turn in your survey?',
      buttons: true,
    }).then((willSubmit) => {
      if (willSubmit) {
        this.props.dispatch({
          type: 'POST_SURVEY',
          payload: this.props.store.survey, //sends data to index.js to be stored locally
        });
        console.log('dispatch', this.props.store.survey);
        this.props.history.push('/child/welcome');
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
      <Grid
        container
        spacing={0}
        direction="column"
        justify="flex-start"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={10}>
          <div classname="welcome1">
            <h2>Anything else on your mind?</h2>
            <form>
              <TextField
                fullWidth
                className="textField"
                id="outlined-basic"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                size="large"
                onChange={(event) => this.handleChangeFor('comments', event)}
              />
            </form>
            <div className="button1">
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
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(ThoughtsPage);
