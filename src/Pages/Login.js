/*
 All types of forms such as login, sign up, create a log and send message is using code from following link:
www.cluemediator.com/login-app-create-login-form-in-reactjs-using-secure-rest-api
*/
import '../Styles/Login.css'
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';
function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error] = useState(null);

    // handle button click of login form
    const handleLogin = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({"username": username.value, "password": password.value});
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        await fetch("http://localhost:6969/login", requestOptions)
            .then(response => {
                console.log(response)
                if(response.ok)
                {
                    sessionStorage.setItem('currentUser', ''+username.value+'');
                    props.history.push('/dashboard');
                }
                else
                {
                    alert("User not found.")
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div className="container">
            <nav>
                <Link to="/">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </nav>
            <div className="Login">
                <h1>Login</h1>
                <br/>
                <label>Username</label>
                <br/>
                <input type="text" {...username} autoComplete="new-password" />
                <br/>
                <label>Password</label>
                <br/>
                <input type="password" {...password} autoComplete="new-password" />
                <br/>
            <button onClick={handleLogin}>Login</button>
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

export default Login;