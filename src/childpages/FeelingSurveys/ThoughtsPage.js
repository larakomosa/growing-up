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
      buttons: 'Yes I am!',
    }).then((willSubmit) => {
      if (willSubmit) {
        this.props.dispatch({
          type: 'POST_SURVEY',
          payload: this.props.store.survey, //sends data to index.js to be stored locally
        });
        console.log('dispatch', this.props.store.survey);
        this.props.history.push('/child/welcome');
      } else {
        swal('You can review your survey now!');
      }
    });
  };

  handleBack = (event) => {
    event.preventDefault();
    this.props.history.push('/anxiety'); //allows user to backtrack and change answers
  };

  render() {
    return (
      <div className="fixed">
        <div className="background1">
          <Grid
            container
            spacing={0}
            direction="column"
            justify="flex-start"
            alignItems="center"
            style={{ minHeight: '100vh' }}
          >
            <Grid item xs={12} sm={12}>
              <div className="welcome2">
                <h3>anything else you'd like to share?</h3>
                <form>
                  <TextField
                    className="textField1"
                    fullWidth
                    label="Thoughts"
                    id="outlined-basic"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={2}
                    size="small"
                    onChange={(event) =>
                      this.handleChangeFor('comments', event)
                    }
                  />{' '}
                  <img
                    src="https://primebucket2020.s3.us-east-2.amazonaws.com/91b14ab3-070f-4eaf-8785-02676daeb6da_arrowcopy.svg"
                    className="nextArrow"
                    onClick={this.handleSubmit} //next button dispatches data to index.js and moves user to next page
                  ></img>
                  <img
                    src="https://primebucket2020.s3.us-east-2.amazonaws.com/0ec2a0fe-07a1-435f-98bf-54d872edd6de_arrow.svg"
                    className="backArrow"
                    onClick={this.handleBack} //next button dispatches data to index.js and moves user to next page
                  ></img>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(ThoughtsPage);
