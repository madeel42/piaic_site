import React, { useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile'
import Button from '@material-ui/core/Button';
import Spinner from './spinner'

const UserProfile = ({ auth: { user }, profile: { loading, profile }, getCurrentProfile }) => {
    useEffect(() => {
        getCurrentProfile();
    }, [])


    return loading && profile === null ? <Spinner /> : <Fragment >
        
        <div className='profile-creation-alert'>

            <p className='lead'>
                <i></i>Welcome {user && user.email}
            </p>

            {profile !== null ? <Fragment>Has</Fragment> :
                <Fragment>
                    <p>You haven't set up your Profile, make a Profile</p>
                    <Link to='/create-profile'className='link' >
                        <Button variant="contained" size="large" color="primary" >
                            Create Profile
                         </Button>
                    </Link>
                </Fragment>}

        </div>


    </Fragment>

}


UserProfile.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.ProfileReducer

})
export default connect(mapStateToProps, { getCurrentProfile })(UserProfile);
