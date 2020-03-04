import React, { Fragment, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from '../../actions/auth'

import { ToastsContainer, ToastsStore } from 'react-toasts';
import './signup.css';
import PropTypes from 'prop-types'
import PIAIC from './imgs/logo.svg'

const Signup = ({ register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        cnic: '',
        email: '',
        password: ''
    });
    const { cnic, email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData)
        register({ cnic, email, password })
        // if (!cnic || !email || !password) {
        //     //    props.setAlert("Full Information is Required For Registeraton", "danger")
        // }
    }

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }

    return (
        <form className="sign_up_main_div" onSubmit={e => onSubmit(e)}>
            <Fragment>
                <CssBaseline />
                <Container maxWidth="sm">

                    <Typography component="div" style={{ boxShadow: "grey 1px 5px 5px 2px", backgroundColor: 'white', height: 'auto' }} >


                        <div className="top_border">

                            <span className="text"> Student Sign Up</span>


                        </div>

                        <div className="logo_text_div">

                            <div className="img_div">

                                <img className="img_Styling" src={PIAIC} alt="" />

                            </div>
                            <div className="text_div">
                                <span className="text_span">
                                    Presidential Initiative for <br />  Artificial Intelligence and Computing.
                            </span>
                            </div>

                        </div>

                        <div className="form_main_div">

                            <div className="cnic">
                                CNIC
                            </div>
                            <div className="verrify_text">

                                Please provide your valid CNIC or B-Form number, we will verify it.

                            </div>



                            <div>
                                <input className="cnic_input" type="text" id="cname"
                                    name="cnic" placeholder="Enter CNIC" value
                                    ={cnic} onChange={e => onChange(e)}


                                />



                            </div>
                            <div className="cnic">
                                Email
                            </div>
                            <div>


                                <input className="cnic_input" type="text" id="ename"
                                    name="email" placeholder="Enter email address" value={email}
                                    onChange={e => onChange(e)} />


                            </div>
                            <div className="cnic">
                                Password
                            </div>
                            <div>
                                <TextField
                                
                                    id="outlined-password-input"
                                    label="Password"name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="outlined"  value={password}
                                    onChange={e => onChange(e)}
                                    minLength='6'
                                />

                                {/* <input className="cnic_input" type="password" id="pname"
                                    name="password" placeholder="Enter password" value={password}
                                    onChange={e => onChange(e)}
                                    minLength='6' /> */}


                            </div>

                            <div className="already">

                                <div className='al'><span className="already-text">
                                    Already a member?
                                </span>
                                    <span >
                                        <Link to='login' className='link'>
                                            <a href="" className="signin_text">Sign in </a></Link>
                                    </span></div>

                                <span >
                                    <a href="" className="how">How it Works?</a>
                                </span>

                                <div className="button_div">
                                    <button className="button">Sign up</button>
                                </div>

                            </div>

                        </div>

                    </Typography>



                </Container>
            </Fragment>
        </form>
    );
}
Signup.propTypes = {
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps, { register })(Signup);

// connect takes two thing 
// 1. any state you want to map
// 2. object with an action you wanna use which e can access through props