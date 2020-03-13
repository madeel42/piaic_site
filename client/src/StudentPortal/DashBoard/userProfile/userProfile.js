import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../../actions/profile'
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import{loadUser} from '../../../actions/auth'
import Container from '@material-ui/core/Container';
import './userProfile.css'
import DashNav from '../DashNav/dashNav'
import Spinner from './spinner'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

const theme = createMuiTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },
};

// base64 code 


function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {

            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}



const UserProfile = ({ auth: { user }, profile: { loading, profile }, getCurrentProfile, profileRegister }) => {
    const classes = useStyles();
    const [formData, setFormData] = useState({
        userName: '',
        city: '',
        gender: '',
        program: '',
        image: ''
    });

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const changeFileHandle = (e) => {
        const objectURL = e.target.files[0]
        if (objectURL.size > 21000) {
            alert("File size is too big!")
        }
        // setFormData({ ...formData, image: objectURL })

        toDataURL(URL.createObjectURL(e.target.files[0]), function (dataUrl) {
            console.log('RESULT:', dataUrl)
            setFormData({ ...formData, image: dataUrl })

        })


    }


    const onSubmit = e => {
        e.preventDefault();
        profileRegister(formData)
    }

    useEffect(() => {
        getCurrentProfile();
        // loadUser();
    }, [])

    const city = ['Faisalabad', 'Lahore', 'Karachi', 'Multan', 'Sialkot'];
    const gender = ['Male', 'Female', 'Other'];

    const program = ['AI', 'BlockChain', 'Cloud Native Computing', '5G computing'];
    return loading && profile === null ? <Spinner /> : <Fragment >
        <DashNav />

        <div className='profile-creation-alert'>


            <ThemeProvider theme={theme}>
                <Typography variant="h3">
                    Welcome {profile.userName || user.email}

                </Typography>
            </ThemeProvider>


            {profile.userName ? <Fragment>
                <div>You Have Created Your Profile !</div>
            </Fragment> :
                <Fragment>
                <p>You haven't set up your Profile, make a Profile</p>

                <div className={classes.root}>{"Fill Up the Form To create your Profile"}</div>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='Profile-Container'>
                        <Container maxWidth="lg">
                            {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
                            <TextField required id="standard-required" label="Enter Your Name" variant="outlined"
                                placeholder="Name"
                                name="userName"
                                value={formData.userName}
                                onChange={e => onChange(e)}
                            />
                            <br />
                            <FormControl variant="filled" className={classes.formControl} >
                                <InputLabel id="demo-simple-select-filled-label">City</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    name="city"
                                    value={formData.city}
                                    onChange={e => onChange(e)}
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
                                    name="gender"
                                    value={formData.gender}
                                    onChange={e => onChange(e)}

                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {gender.map((gen) => (
                                        <MenuItem name='gen' value={gen}>{gen}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                            <FormControl variant="filled" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-filled-label">Program</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    name="program"
                                    value={formData.program}
                                    onChange={e => onChange(e)}

                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {program.map((prg) => (
                                        <MenuItem value={prg}>{prg}</MenuItem>
                                    ))}



                                </Select>
                                <br />
                                {/* <UploadBtn id='uploadbtn'/> */}
                                <div className={classes.root}>
                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        name='User-Image'
                                        onChange={changeFileHandle}

                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span" >
                                            Upload
        </Button>
                                    </label>
                                </div>
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
