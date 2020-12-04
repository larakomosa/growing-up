import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Bank from '../Bank/Bank';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-end',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  home: {
    minHeight: 50,
    paddingTop: theme.spacing(4),
  },
  title: {
    flexGrow: 1,
    paddingBottom: 2,
    color: '#524C61',
  },
  heading: {
    fontFamily: 'Nerko One',
    color: '#524C61',
    paddingBottom: 28,
    alignItems: 'flex-end',
  },
  navBar: {
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),
  },
  piggy: {
    marginBottom: 0,
    paddingBottom: 0,
    alignItems: 'flex-end',
  },
}));

const ChildAppBar = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleHome = (pageURL) => {
    history.push(pageURL);
  };

  const handleLog = (pageURL) => {
    props.dispatch({ type: 'LOGOUT' });
    history.push(pageURL);
  };

  const handleMenu1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleAlert = () => {
    alert(
      <h2>
        <Bank />
      </h2>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar positionSticky>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className="home"
            aria-label="account of current user"
            edge="start"
            aria-haspopup="true"
            onClick={() => handleMenuClick('/child/welcome')}
            color="secondary"
          >
            <img
              src="https://primebucket2020.s3.us-east-2.amazonaws.com/23baa092-a81e-4208-ad8b-fc5508daf27b_home.svg"
              className="navBar"
            ></img>
          </IconButton>
          <Box className={classes.title}>
            <IconButton
              className={classes.piggy}
              aria-label="display more actions"
              onClick={() => handleAlert()}
              edge="center"
              color="secondary"
            >
              <img
                src="https://primebucket2020.s3.us-east-2.amazonaws.com/8f9f7e33-32cc-497e-be75-0846daabf8ee_piggy-bank.svg"
                className="piggy"
              ></img>
            </IconButton>
            <Typography className={classes.heading} variant="h4" noWrap>
              ...GROWING UP
            </Typography>
          </Box>
          <IconButton
            className={classes.navBar}
            aria-label="display more actions"
            onClick={handleMenu}
            edge="center"
            color="secondary"
          >
            <img
              src="https://primebucket2020.s3.us-east-2.amazonaws.com/72dd90a6-77f6-4caa-807c-a6e80c60a221_doughnut.svg"
              className="navBar"
            ></img>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={open}
            onClose={() => handleMenuClick(null)}
          >
            <MenuItem onClick={() => handleMenuClick('/child/chores')}>
              Chores
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick('/child/rewards')}>
              Rewards
            </MenuItem>
            <MenuItem onClick={() => handleLog('goodbye')}>LogOut</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(ChildAppBar));
