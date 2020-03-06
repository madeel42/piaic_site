import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './userProfile.css'
import DashNav from '../DashNav/dashNav'
import Spinner from './spinner'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { profileRegister } from '../../../actions/profile'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const UserProfile = ({ auth: { user }, profile: { loading, profile }, getCurrentProfile, profileRegister }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        name: ''

    });
    const [currentcity, setcity] = useState({ city: '' })
    const [currentGender, setGender] = useState({ gender: '' })
    const [currentProgram, setProgram] = useState({ program: '' })
    // const { name, city, gender, program } = formData;


    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const changeHandler = (e) => {
        setFormData({ ...formData, name: e.target.value })
    }
    const changeHandlerCity = (e) => {
        setcity({ ...currentcity, city: e.target.value })
    }
    const changeHandlerGender = (e) => {
        setGender({ ...currentGender, gender: e.target.value })

    }
    const changeHandlerProgram = (e) => {
        setProgram({ ...currentGender, program: e.target.value })
    }
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)
        profileRegister({ city, gender, program })
        // if (!cnic || !email || !password) {
        //     //    props.setAlert("Full Information is Required For Registeraton", "danger")
        // }
    }

    useEffect(() => {
        getCurrentProfile();
    }, [])

    const city = ['Faisalabad', 'Lahore', 'Karachi', 'Multan', 'Sialkot'];
    const gender = ['Male', 'Female', 'Other'];

    const program = ['AI', 'BlockChain', 'Cloud Native Computing', '5G computing'];
    return loading && profile === null ? <Spinner /> : <Fragment >
        <DashNav />

        <div className='profile-creation-alert'>

            <p className='lead'>
                <i></i>Welcome {user && user.email}
            </p>

            {profile !== null ? <Fragment>Has</Fragment> :
                <Fragment>
                    <p>You haven't set up your Profile, make a Profile</p>

                    <Button variant="contained" size="large" color="primary" >
                        Create Profile
                         </Button>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className='Profile-Container'>
                            <Container maxWidth="lg">
                                {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
                                <TextField required id="standard-required" label="Enter Your Name" variant="outlined"
                                    placeholder="Name" />
                                <br />
                                <FormControl variant="filled" className={classes.formControl} >
                                    <InputLabel id="demo-simple-select-filled-label">City</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={currentcity.city}

                                        onChange={changeHandlerCity}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {city.map((cty) => (
                                            <MenuItem value={cty}>{cty}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                                <FormControl variant="filled" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-filled-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={currentGender.gender}
                                        onChange={changeHandlerGender}

                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {gender.map((gen) => (
                                            <MenuItem value={gen}>{gen}</MenuItem>
                                        ))}

                                    </Select>
                                </FormControl>
                                <FormControl variant="filled" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-filled-label">Program</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select-filled"
                                        value={currentProgram.program}
                                        onChange={changeHandlerProgram}

                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        {program.map((prg) => (
                                            <MenuItem value={prg}>{prg}</MenuItem>
                                        ))}



                                    </Select>
                                </FormControl>
                                <Button variant="contained" size="large" color="danger" type='submit' >
                                    Create
                         </Button>
                            </Container>

                        </div>
                    </form>
                </Fragment>}

        </div>


    </Fragment>

}


UserProfile.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profileRegister: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.ProfileReducer

})
export default connect(mapStateToProps, { getCurrentProfile, profileRegister })(UserProfile);
