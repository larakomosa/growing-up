import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

class AdminThoughtsItem extends Component {
  handleDelete = (e) => {
    this.props.dispatch({
      type: 'DELETE_SURVEY_ITEM',
      payload: this.props.item.id,
    });
  };

  render() {
    return (
      <TableRow>
        <TableCell align="left">
          <p>{this.props.item.date.substring(5, 10)}</p>
        </TableCell>
        <TableCell align="left">
          <p>{this.props.item.comment}</p>
        </TableCell>
        <TableCell align="left">
          <DeleteIcon
            onClick={this.handleDelete}
            style={{
              color: '#ff6e79',
            }}
          ></DeleteIcon>
        </TableCell>
      </TableRow>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(AdminThoughtsItem));
