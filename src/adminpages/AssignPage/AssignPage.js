import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AdminAssignedList from '../../components/AdminAssignedList/AdminAssignedList.js';
import AdminStoreList from '../../components/AdminStoreList/AdminStoreList.js';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import AssignChoreModal from '../../components/AdminAddModals/AssignChoreModal.js';
import AssignRewardModal from '../../components/AdminAddModals/AssignRewardModal.js';
import PersonSelect from '../../components/AdminStoreList/PersonSelect';

class AssignPage extends Component {
  state = {
    id: '',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_USERS',
    });
    this.props.dispatch({
      type: 'GET_ADMIN_ASSIGNED',
    });
    this.props.dispatch({
      type: 'GET_ADMIN_STORE',
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
      type: 'GET_ADMIN_ASSIGNED',
      payload: this.state.id,
    });
    console.log(this.state.id);
  }; // end login

  handleSubmit2 = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'GET_ADMIN_STORE',
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
            <Grid item xs={12} sm={6}>
              <div>
                <AssignChoreModal />
                <h2>Current Chore Assignments</h2>
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
                <AdminAssignedList />
              </div>
              <hr />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <AssignRewardModal />
                <h2>Current Reward Assignments</h2>
                <label htmlFor="role">
                  Selected Rewards
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
                <AdminStoreList />
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
