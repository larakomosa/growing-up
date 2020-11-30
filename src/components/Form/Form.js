import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import swal from 'sweetalert';

class Form extends Component {
  state = {
    newChore: {
      chore: '',
      category_id: '',
      coin_value: '',
      description: '',
    },
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_CHORES',
    });
    this.props.dispatch({
      type: 'GET_CATEGORY',
    });
  }
  handleChange = (propertyName) => (event) => {
    //captures values for inputted information
    this.setState({
      newChore: {
        ...this.state.newChore,
        [propertyName]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // TODO - axios request to server to add movie

    if (
      //requires user to fill all fields
      this.state.newChore.chore === '' ||
      this.state.newChore.coin_value === '' ||
      this.state.newChore.description === ''
    ) {
      swal('Please complete all input fields');
    } else if (this.state.newChore.category_id === '') {
      swal('Please choose a category');
    } else {
      this.props.dispatch({
        type: 'POST_CHORE', //dispatches post request
        payload: this.state.newChore, //sends newMovie values
      });
      this.props.history.push('/admin/assign'); //moves user back to homepage to after movie is submitted
    }
  };

  render() {
    return (
      <form>
        <div>
          <TextField
            id="outlined-helperText"
            label="Chore"
            value={this.state.newChore.chore}
            placeholder="Add Chore Here"
            onChange={this.handleChange('chore')}
            variant="outlined"
          />
          <TextField
            id="outlined-select-currency-native"
            value={this.state.newChore.category_id}
            select
            onChange={this.handleChange('category_id')}
            placeholder="Choose Category"
            variant="outlined"
            SelectProps={{
              native: true,
            }}
          >
            <option value="">Select a Category</option>
            {this.props.store.category.map((option) => (
              <option key={option.value} value={option.id}>
                {option.category}
              </option>
            ))}
          </TextField>
          <TextField
            id="outlined-helperText"
            label="Coin Value"
            placeholder="Choose Coin Value"
            variant="outlined"
            value={this.state.newChore.coin_value}
            onChange={this.handleChange('coin_value')}
          />
          <TextField
            id="outlined-helperText"
            label="Description"
            placeholder="Add Description"
            variant="outlined"
            value={this.state.newChore.description}
            onChange={this.handleChange('description')}
          />
          <Button
            variant="outlined"
            color="primary"
            size="Medium"
            type="button"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(Form));
