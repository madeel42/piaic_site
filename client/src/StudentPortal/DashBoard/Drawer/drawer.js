import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import Accordion from "../accordian";
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { connect } from "react-redux";
// import myStore from "../../../store";
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types'
import { closeDrawer, openDrawer } from '../../../actions/drawer'
import { logout } from '../../../actions/auth'
import './drawer.css'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const TemporaryDrawer = ({ getInfo, closeDrawer, logout, profile: { profile } }) => {
    const classes = useStyles();
    const onClose = (e) => {
        closeDrawer()
    }
    const onClick = () => {
        logout()
    }
    const [state, setState] = React.useState({
        right: getInfo
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            id="drawer"
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <div className='drawer-logo'>
                {profile.image == null ? <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    id="iconInDrawer"
                >
                    <AccountCircle />
                </IconButton> : <div className='slideBar-image'>
                        <img src={profile.image} alt={profile.userName + 'avatar'} />
                    </div>
                }
            </div>
            <div id="profile-name">
                <h4>{profile.userName}</h4>
            </div>
            <Accordion></Accordion>
            <List id="drawer-list" onClick={e => onClick(e)}>
                {['Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <ExitToAppOutlinedIcon /> : <InfoIcon />}</ListItemIcon>
                        <ListItemText id="item-text" primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    return (
        <div>
            <Drawer anchor="right" open={getInfo} onClose={e => onClose(e)}>
                {sideList('right')}
            </Drawer>
        </div>
    );
}
TemporaryDrawer.propTypes = {
    getInfo: PropTypes.bool,
    profile: PropTypes.object.isRequired,
}
const getResult = state => ({

    getInfo: state.drawerReducer.userDrawer,
    profile: state.ProfileReducer

});

export default connect(getResult, { openDrawer, closeDrawer, logout })(TemporaryDrawer);