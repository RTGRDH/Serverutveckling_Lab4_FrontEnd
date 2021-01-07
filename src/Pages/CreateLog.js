import React, { useState } from 'react';
import {Link, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
function CreateLog(props) {
    const subject = useFormInput('');
    const content = useFormInput('');
    const [error] = useState(null);

    // handle button click of login form
    const handleCreate = async () => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        let url = "http://localhost:6971/createLog?title=" + subject.value +"&content="+ content.value + "&currentUser=" + sessionStorage.getItem('currentUser');
        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        props.history.push('/dashboard');
    }

    return (
        <div className="container">
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/createLog">Create a log</Link>
            </nav>
            <Route path="/dashboard" component={Dashboard} />
            <div className="form">
                <h1>Login</h1>
                <br/>
                <label>Title</label>
                <br/>
                <input type="text" {...subject} autoComplete="new-password" />
                <br/>
                <label>Content</label>
                <br/>
                <input type="textarea" {...content} autoComplete="new-password" />
                <br/>
                <button onClick={handleCreate}>Login</button>
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

export default CreateLog;