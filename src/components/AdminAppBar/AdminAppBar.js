import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeIcon from '@material-ui/icons/Home';

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
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

const AdminAppBar = props => {
  const { history } = props
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

    const handleHome = (pageURL) => {
    history.push(pageURL)
  };

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

    const handleLog = (pageURL) => {
    props.dispatch({ type: 'LOGOUT' })
    history.push(pageURL)
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h5" noWrap>
            Material-UI
          </Typography>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => handleMenuClick('/user')}
                color="inherit"
              >
                <HomeIcon />
              </IconButton>
          <IconButton aria-label="display more actions" onClick= {handleMenu} edge="end" color="inherit">
            <MenuIcon />
          </IconButton>
           <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => handleMenuClick(null)}
              >
                <MenuItem onClick={() => handleMenuClick('/adminchores')}>Add Chores</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/adminassign')}>Assign Chores</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/adminrewards')}>Add Rewards</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/adminstore')}>Reward Store</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/adminemotions')}>Emotions</MenuItem>
                <MenuItem onClick={() => handleLog('/user')}>LogOut</MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStoreToProps = (store) => ({
  store,
});

export default connect(mapStoreToProps)(withRouter(AdminAppBar));
