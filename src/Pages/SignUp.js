import React, { useState } from 'react';
import {BrowserRouter, NavLink, Route, Switch, Link} from "react-router-dom";
import Login from "./Login";
import '../Styles/SignUp.css'
function SignUp(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error] = useState(null);
    const [loading] = useState(false);

    // handle button click of login form
    const handleSignUp = async () => {
        //props.history.push('/dashboard');
        //let response = await fetch; //Getting data
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({"username": username.value, "password": password.value});
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:6969/addUser", requestOptions)
            .then(response => {
                console.log(response)
                props.history.push('/')
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className="container">
            <nav>
                <Link to="/">Login</Link>
                <Link  to="/signup">Sign Up</Link>
            </nav>
            <div className="SignUp">
                <h1>Sign Up</h1>
                <br/>
                <label>Username</label>
                <br/>
                <input type="text" {...username} autoComplete="new-password" />
                <br/>
                <label>Password</label>
                <br/>
                <input type="password" {...password} autoComplete="new-password" />
                <br/>
                <button onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default SignUp;