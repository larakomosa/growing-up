import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  home: {
    minHeight: 50,
    paddingTop: theme.spacing(4),
    alignItems: 'flex-start',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    paddingBottom: theme.spacing(5),
    fontFamily: 'Nerko One',
    color: '#524C61',
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

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
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
            <HomeIcon />
          </IconButton>
          <Typography className={classes.title} variant="h4" noWrap>
            ...GROWING UP
          </Typography>

          <IconButton
            aria-label="display more actions"
            onClick={handleMenu}
            edge="center"
            color="secondary"
          >
            <MenuIcon />
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
