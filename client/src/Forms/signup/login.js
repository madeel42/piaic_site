import React, { Fragment, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import { login } from '../../actions/auth';
import './signup.css';
import PIAIC from './imgs/logo.svg'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = async e => {
        e.preventDefault();
        login(email, password)

    }

    // Redirect if logged in 

    if (isAuthenticated) {
        return <Redirect to='/dashboard' />
    }
    return (
        <form className="sign_up_main_div" id='login-form' onSubmit={e => onSubmit(e)}>
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
                                Email
                            </div>
                            <div>


                                <input className="cnic_input" type="text" id="ename" name="email" placeholder="Enter email address"
                                    value={email}
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


                            </div>

                            <div className="already">

                                <div className='al'><span className="already-text">
                                    Not a member?
                                </span>
                                    <span >
                                        <Link to='signup' className='link'>
                                            <a href="" className="signin_text">Sign Up </a></Link>
                                    </span></div>
                                <span >
                                    <a href="" className="how">Forget Password?</a>
                                </span>

                                <div className="button_div">
                                    <button className="button">Login</button>
                                </div>

                            </div>

                        </div>

                    </Typography>



                </Container>
            </Fragment>
        </form>
    );
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,

}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);