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

class AssignedListItem extends Component {
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
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Card>
          <CardActionArea>
            <CardMedia image={this.props.item.icon} />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {this.props.item.chore}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                {this.props.item.coin_value}
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h2"
                ></Typography>
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                <img src={this.props.item.icon}></img>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              size="small"
              onClick={() => this.handleClick(this.props.item.id)}
            >
              {' '}
              Completed?
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AssignedListItem));
