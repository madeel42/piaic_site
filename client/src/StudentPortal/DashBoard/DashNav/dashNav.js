import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import Drawer from '../Drawer/drawer';
import Logo from '../logo/Logo.svg'
import './dashNav.css'
import { openDrawer, closeDrawer } from '../../../actions/drawer'
import SlideBar from '../SlideBar/slideBar'
import UserProfile from '../userProfile/userProfile'




const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function MenuAppBar(props) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);

    const onClick = (e) => {
        props.openDrawer();
    }
    if (!props.isAuthenticated) {
        return <Redirect to='/signup' />
    }

    return (
        <div className={classes.root} >
            <AppBar position="fixed" className="appBar">
                <Toolbar>
                    <div id="imageDiv">
                        <Link to='/'>
                            <img src={Logo} id="student-portal-logo"></img></Link>
                    </div>
                    <div className='student-portal-text-div'>
                        <span className="student-portal-text">
                            PRESIDENTIAL INITIATIVE FOR  ARTIFICIAL INTELLIGENCE AND COMPUTING (PIAIC)
                    </span>
                    </div>
                    {props.profile.profile.image ? <IconButton className='student-portal-profile-logo-div-original'
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                    >
                        <img className='student-portal-profile-logo-div-img' src={props.profile.profile.image} alt="user-avatar" onClick={e => onClick(e)} />
                    </IconButton> : <div className='student-portal-profile-logo-div'>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={e => onClick(e)}
                                color="inherit"
                            >
                                <AccountCircle id="circle" />
                            </IconButton>
                        </div>
                    }
                </Toolbar>
            </AppBar>
            <SlideBar />


            <Drawer getInfo={props.getInfo} onClose={closeDrawer()}></Drawer>
            {/* <UserProfile/> */}

        </div>
    );
}
MenuAppBar.propTypes = {
    getInfo: PropTypes.bool,
    isAuthenticated: PropTypes.bool,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}
const getResult = state => ({

    getInfo: state.drawerReducer.userDrawer,
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    profile: state.ProfileReducer

})

export default connect(getResult, { openDrawer, closeDrawer })(MenuAppBar);
