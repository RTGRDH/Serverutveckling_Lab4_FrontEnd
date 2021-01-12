import React, { useState } from 'react';
import {Link, Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import '../Styles/CreateLog.css'
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
        setTimeout(() =>{props.history.push('/dashboard')},3000)
    }

    return (
        <div className="container">
            <nav>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/createLog">Create a log</Link>
                <Link to={"/otherLogs"}>Community Logs</Link>
                <Link to={"/messageBox"}>Message Box</Link>
                <Link to={"/createMessage"}>Write a message</Link>
                <Link to={"/picture"}>Picture</Link>
                <Link to={"/communityFiles"}>Files</Link>
                <Link classname={"logout"} to={"/"}>Log Out</Link>
            </nav>
            <div className="Form">
                <h1>Create a log</h1>
                <br/>
                <label>Title</label>
                <br/>
                <input type="text" {...subject} autoComplete="new-password" />
                <br/>
                <label>Content</label>
                <br/>
                <input type="textarea" {...content} autoComplete="new-password" />
                <br/>
                <button onClick={handleCreate}>Create</button>
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