import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from '@material-ui/icons/Info';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const SimpleExpansionPanel = ({ auth: { user }, profile: { loading, profile } }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel id="accordion-Self">
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <InfoIcon id="info-icon"></InfoIcon>
                    <Typography id="accordion-Typo" className={classes.heading}>Info</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <table>
                            <tr>
                                <th className='profile-info-headers'>
                                    Name
                                </th>
                                <th className='profile-info-user'>
                                    {profile.userName}
                                </th>
                            </tr>
                            <tr>
                                <th className='profile-info-headers'>
                                    S/O
                                </th>
                                <th className='profile-info-user'>
                                    {profile.fName}
                                </th>
                            </tr><tr>
                                <th className='profile-info-headers'>
                                    Roll No
                                </th>
                                <th className='profile-info-user'>
                                    {profile.userName}
                                </th>
                            </tr><tr>
                                <th className='profile-info-headers'>
                                    Gender
                                </th>
                                <th className='profile-info-user'>
                                    {profile.gender}
                                </th>
                            </tr><tr>
                                <th className='profile-info-headers'>
                                    Program
                                </th>
                                <th className='profile-info-user'>
                                    {profile.program}
                                </th>
                            </tr>
                            <tr>
                                <th className='profile-info-headers'>
                                    Email
                                </th>
                                <th className='profile-info-user'>
                                    {user.email}
                                </th>
                            </tr>
                        </table>
                        {/* <div id="upperDiv">
                            <div id="options-info">
                                <span className="span">Name</span>
                                <span className="span">S/O</span>
                                <span className="span">Roll No</span>
                                <span className="span">City</span>
                                <span className="span">Gender</span>
                                <span className="span">Email</span>
                            </div>
                            <div id="options-info2">
                                <span className="span">{profile.userName}</span>
                                <span className="span">Not Available</span>
                                <span className="span">Not Available</span>
                                <span className="span">{profile.city}</span>
                                <span className="span">{profile.gender}</span>
                                <span className="span">{user.email}</span>
                            </div>
                        </div> */}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
SimpleExpansionPanel.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,

}
const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.ProfileReducer

})

export default connect(mapStateToProps)(SimpleExpansionPanel)