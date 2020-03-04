import React from "react";
import "./profileMenu.css";
import myStore from '../../store'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Drawer from '../DashBoard/Drawer/drawer'
import PropTypes from 'prop-types'
import {openDrawer,closeDrawer} from '../../actions/drawer'

const Profile = (props) => {
  return (
    <div id="profileMenu">
      <a onClick={props.openDrawer}>Info </a>

      <a onClick={props.openDrawer}>Logout</a>

      <a onClick={props.openDrawer}>Change Password</a>

      <Link to='/student-card' className='link'><a>Get Card</a></Link>
      <Drawer getInfo={props.getInfo}></Drawer>


    </div>
  );
}
Profile.propTypes = {
  getInfo: PropTypes.bool,
}
const mapStateToProps = state => ({
  getInfo: state.drawerReducer.userDrawer
})
export default connect(mapStateToProps, { openDrawer, closeDrawer })(Profile);