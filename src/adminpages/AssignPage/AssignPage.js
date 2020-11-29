import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminAssignedList from '../../components/AdminAssignedList/AdminAssignedList.js';
import { Button, Container, Grid, Typography } from '@material-ui/core';

class AssignPage extends Component {
  state = {
    id: '',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USERS',
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'GET_ADMIN_ASSIGNED',
      payload: this.state.id,
    });
    console.log(this.state.id);
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
    console.log('tweet');
  };

  render() {
    return (
      <Container>
        <section>
          <h2>AdminStore</h2>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <div>
                <label htmlFor="role">
                  Choose Role:
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
                    Next &#x2192;
                  </Button>
                </label>
                <AdminAssignedList />
              </div>
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

export default connect(mapStateToProps)(AssignPage);
