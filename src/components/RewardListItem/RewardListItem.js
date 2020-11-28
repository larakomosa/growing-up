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

class RewardListItem extends Component {
  componentDidMount() {
    //"GETS" movies on page load
    this.props.dispatch({
      type: 'GET_REWARDS',
    });
  }

  handleClick = (id) => {
    //sends user to targeting ID details page/sends ID to reducer
    this.props.history.push(`/details/${this.props.item.id}`);
  };

  render() {
    return (
      <Grid item xs={12} sm={6} md={3} lg={2}>
        <Card>
          <CardActionArea>
            <CardMedia
              image={this.props.item.image}
              class="rounded"
              alt={this.props.item.description}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {this.props.item.reward}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                {this.props.item.coin_price}
                <Typography gutterBottom variant="h6" component="h2">
                  <Typography gutterBottom variant="h6" component="h2">
                    <img src={this.props.item.image}></img>
                  </Typography>
                </Typography>
              </Typography>
              {/* <Typography gutterBottom variant="h6" component="h2">
                <img src={this.props.item.icon}></img>
              </Typography> */}
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
              More Details
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

export default withRouter(connect(mapStoreToProps)(RewardListItem));
