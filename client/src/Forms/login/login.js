import React, { useState } from "react";
import "./login.css";

const Login = () => {

    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const { email, password } = state;

    const change = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    }

    const click = () => {
        console.log(state);
    }

    return (<div className="loginComponentDiv">

        <div id="loginComponentDiv-heaading">
            <h2 id="loginComponentDiv-text">Student Login</h2>
        </div>

        <div id="loginComponentDiv-imgDiv">
            <img src="/logo.svg" id="loginComponentDiv-img"></img>
            <div id="loginComponentDiv-initiative">
                <span>Presidential Initiative for<br></br> Artificial Intelligence and Computing</span>
            </div>
        </div>

        <div id="loginComponentDiv-form">
            <span className="loginComponentDiv-span1">Email Address</span>
            <input className="loginComponentDiv-input1" placeholder="Enter Email"
                name="email" value={email}
                onChange={change}
            ></input>

            <span className="loginComponentDiv-span2">Password</span>
            <input className="loginComponentDiv-input2" placeholder="Enter Password"
                name="password" value={password}
                onChange={change}>
            </input>

            <span id="loginComponentDiv-linkText">No Member?</span>
            <a id="loginComponentDiv-link" href="#">Sign Up</a>
        </div>


        <div id="loginComponentDiv-buttonDiv">
            <button id="loginComponentDiv-button"
                onClick={click}>Sign in</button>
        </div>
    </div>)
}

export default Login;
