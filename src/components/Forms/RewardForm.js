import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import swal from 'sweetalert';

class Form extends Component {
  state = {
    newReward: {
      chore: '',
      category_id: '',
      coin_value: '',
      description: '',
    },
  };

  handleChange = (propertyName) => (event) => {
    //captures values for inputted information
    this.setState({
      newReward: {
        ...this.state.newReward,
        [propertyName]: event.target.value,
      },
    });
  };

  handleCancel = (event) => {
    //captures values for inputted information
    console.log('meow, meow');
    this.props.callback();
  };

  handleSubmit = (event) => {
    event.preventDefault(); // TODO - axios request to server to add movie

    if (
      //requires user to fill all fields
      this.state.newReward.reward === '' ||
      this.state.newReward.image === '' ||
      this.state.newReward.coin_price === '' ||
      this.state.newReward.description === ''
    ) {
      swal('Please complete all input fields');
    } else {
      this.props.dispatch({
        type: 'POST_REWARD',
        payload: this.state.newReward, //sends newMovie values
      });
      swal({
        title: 'Reward Has Been Submitted',
        text: 'Would you like to see a child preview?',
        buttons: ['No Thanks', 'Yes Please'],
      }).then((willSubmit) => {
        if (willSubmit) {
          this.props.history.push('/admin/reward/confirmation');
        } else {
          this.props.callback();
        }
      });
    }
  };

  render() {
    return (
      <form>
        <div>
          <div className="formField">
            <TextField
              fullWidth
              size="small"
              id="outlined-helperText"
              label="Reward"
              value={this.state.newReward.reward}
              placeholder="Add Reward Here"
              onChange={this.handleChange('reward')}
              variant="outlined"
              columns={6}
            />{' '}
          </div>
          <div className="formField">
            <TextField
              fullWidth
              size="small"
              id="outlined-helperText"
              label="Image"
              placeholder="Enter Image"
              variant="outlined"
              value={this.state.newReward.image}
              onChange={this.handleChange('image')}
            />
          </div>
          <div className="formField">
            <TextField
              fullWidth
              size="small"
              id="outlined-helperText"
              label="Coin Price"
              placeholder="Enter Coin Price"
              variant="outlined"
              value={this.state.newReward.coin_price}
              onChange={this.handleChange('coin_price')}
            />
          </div>

          <div className="formField">
            <TextField
              fullWidth
              size="small"
              label="Description"
              placeholder="Add Description"
              multiline
              rows={2}
              variant="outlined"
              value={this.state.newReward.description}
              onChange={this.handleChange('description')}
            />
          </div>
          <div className="buttonControl">
            <Button
              variant="outlined"
              color="primary"
              size="Medium"
              type="button"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>{' '}
            <Button
              variant="outlined"
              color="primary"
              size="Medium"
              type="button"
              onClick={this.handleCancel}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(Form));
