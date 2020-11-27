import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//import stylings
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';

class AssignedListItem extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_ASSIGNED',
    });
  }
  handleClick = (id) => {
    console.log('id', this.props.item.id);
    this.props.dispatch({
      type: 'UPDATE_ASSIGNED',
      payload: this.props.item.id,
    });
    alert('working!');
  };

  render() {
    return (
      //used bootstrap to create grid for movie display
      <Card className="itemDiv col-4" borderColor="primary.main">
        <Divider />
        <CardContent
          className="movieBox" //container for styling (also allows user to click anywhere in div to access details page)
          onClick={(event) => this.handleClick(this.props.item.id)}
        >
          <Typography
            className="titleControl"
            gutterBottom
            variant="h5"
            component="h2"
          >
            <h3>{this.props.item.chore}</h3>
          </Typography>
          <Typography
            className="image"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            <img
              src={this.props.item.icon}
              class="rounded"
              alt={this.props.item.description}
            />
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h3>{this.props.item.coin_value}</h3>
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            size="small"
            onClick={() => this.handleClick(this.props.item.id)} //upon click, function is triggers to direct user to targeted detail page.
          >
            <h4>Finished</h4>
          </Button>
        </CardContent>
      </Card>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default withRouter(connect(mapStoreToProps)(AssignedListItem));
