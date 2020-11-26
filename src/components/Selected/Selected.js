import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//import stylings
import SelectedItem from '../SelectedItem/SelectedItem';
import Divider from '@material-ui/core/Divider';

class Selected extends Component {
  //"GETS" selected information upon page load
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SELECTED',
      payload: this.props.match.params.id,
    });
  }

  render() {
    return (
      <div>
        {this.props.store.selected.reward}
        <SelectedItem />
          <Divider />
        </div>
    )
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(Selected));