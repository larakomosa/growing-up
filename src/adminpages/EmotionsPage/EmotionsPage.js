import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminThoughts from '../../components/AdminThoughtsList/AdminThoughtsList.js';
// import  from '../../components/AdminStoreList/AdminStoreList.js';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { LineChart } from 'react-chartkick';
import 'chart.js';

class EmotionsPage extends Component {
  state = {
    id: '',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USERS',
    });
    this.props.dispatch({
      type: 'GET_SURVEY',
    });
  }

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log('tweet');
  };

  handleInputChangeFor2 = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log('tweet');
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'GET_SURVEY',
      payload: this.state.id,
    });
    console.log(this.state.id);
  }; // end login

  handleSubmit2 = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'GET_SURVEY',
      payload: this.state.id,
    });
    console.log(this.state.id);
  }; // end login

  render() {
    return (
      <Container>
        <section>
          <h2></h2>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <div>
                <h3>Thoughts</h3>
                <label htmlFor="role">
                  Select Child:
                  <select onChange={this.handleInputChangeFor('id')} required>
                    <option value="">Select a Role</option>
                    {this.props.store.userList.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.username}
                        </option>
                      );
                    })}
                  </select>
                  <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                    size="small"
                    onClick={this.handleSubmit}
                  >
                    Get Child Info &#x2192;
                  </Button>
                </label>
                <AdminThoughts />
              </div>
              <hr />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <h3>MoodChart</h3>

                <label htmlFor="role">
                  Select Child:
                  <select onChange={this.handleInputChangeFor2('id')} required>
                    <option value="">Select a Role</option>
                    {this.props.store.userList.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.username}
                        </option>
                      );
                    })}
                  </select>
                  <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                    size="small"
                    onClick={this.handleSubmit2}
                  >
                    See Info &#x2192;
                  </Button>
                </label>
              </div>
              <LineChart
                data={{
                  '2020-11-23': 5,
                  '2020-11-24': 6,
                  '2020-11-25': 3,
                  '2020-11-26': 6,
                  '2020-11-26': 5,
                }}
              />
              <hr />
            </Grid>
          </Grid>
        </section>
      </Container>
    );
  }
}

const mapStateToProps = (store) => ({
  store,
});

export default connect(mapStateToProps)(EmotionsPage);
