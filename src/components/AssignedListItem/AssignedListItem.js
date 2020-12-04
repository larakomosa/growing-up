// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Bank from '../../components/Bank/Bank.js';
import swal from 'sweetalert';

class AssignedListItem extends Component {
  state = {
    //sets initial state
    imageDisplay: true,
    buttonDisplay: false,
  };

  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_ASSIGNED',
    });
  }

  activateToggle = () => {
    //changes state when an image is clicked

    console.log('toggle fired');
    this.setState({
      imageDisplay: this.state.imageDisplay === false,
    });
  };

  togglingDisplay2 = () => {
    //Function renders element based on state
    if (this.props.item.completion_status === false) {
      return (
        <div>
          <img
            src="https://primebucket2020.s3.us-east-2.amazonaws.com/51822841-7e3f-4dc6-8595-48c53d4e0d54_finish-line.svg"
            className="chores"
            onClick={() => this.handleClick(this.props.item.id)}
          ></img>
          <Typography
            gutterBottom
            variant="p"
            style={{ color: '#ee8673', fontSize: 20, marginBottom: -10 }}
            component="h2"
          >
            Coins Value ${this.props.item.coin_value}
          </Typography>
        </div>
      );
    } else {
      return (
        <div>
          <img
            src="https://primebucket2020.s3.us-east-2.amazonaws.com/8f9f7e33-32cc-497e-be75-0846daabf8ee_piggy-bank.svg"
            className="chores"
          ></img>
          <Typography
            gutterBottom
            variant="p"
            style={{ color: '#ee8673', fontSize: 20, marginBottom: -10 }}
            component="h2"
          >
            ${this.props.item.coin_value} Earned
          </Typography>
        </div>
      );
    }
  };

  togglingDisplay = () => {
    //Function renders element based on state
    if (this.state.imageDisplay === true) {
      return (
        //renders image
        <img
          onClick={this.activateToggle}
          className="imageBox"
          src={this.props.item.icon}
          alt={this.props.item.description}
        />
      );
    } else {
      return (
        //render description (false)
        <p className="textBox" onClick={this.activateToggle}>
          {this.props.item.description}
        </p>
      );
    }
  };

  handleClick = (id) => {
    console.log('id', this.props.item.id);
    this.props.dispatch({
      type: 'UPDATE_ASSIGNED',
      payload: this.props.item.id,
    });
    swal({
      title: 'Great Job!',
      text: 'Please confirm this chore is completed.',
      buttons: true,
    }).then((willSubmit) => {
      if (willSubmit) {
        this.props.dispatch({
          type: 'GET_BANK_CHORES',
        });
        this.props.dispatch({
          type: 'GET_BANK_REWARDS',
        });
        swal('Great Job!');
      }
    });
  };

  render() {
    return (
      <Grid item xs={12} sm={3} md={3} lg={2}>
        <Card>
          <CardActionArea>
            <CardContent>
              <CardMedia image={this.props.item.icon} />
              <Divider />
              <div className="titleControl">
                <Typography>
                  <h2>{this.props.item.chore}</h2>
                </Typography>
              </div>
              <div className="iconControl">
                <div>{this.togglingDisplay()}</div>
              </div>
              <div className="bottom">
                <Typography gutterBottom variant="h6" component="h2">
                  {this.togglingDisplay2()}
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AssignedListItem));
