import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Divider from '@material-ui/core/Divider';

function UserItem(props) {
  // const handleClick = (id) => {
  //   console.log('hi');
  //   //   console.log('id', this.props.item.id);
  //   //   this.props.dispatch({
  //   //     type: 'DELETE_USER',
  //   //     payload: this.props.item.id,
  //   //   });
  //   //   alert('User Deleted');
  //   // };

  return (
    <TableRow size="small">
      <TableCell align="left">
        <p>{props.item.id}</p>
      </TableCell>
      <TableCell align="left">
        <p>{props.item.username}</p>
      </TableCell>
      <TableCell align="left">
        <p>{props.item.page_role}</p>
      </TableCell>
      <TableCell align="left">
        {/* <button onClick={handleClick(props.item.id)}> */}
        <DeleteIcon />
      </TableCell>
    </TableRow>
  );
}

export default UserItem;
