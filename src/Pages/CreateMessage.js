import React, { useState } from 'react';
import {Link} from "react-router-dom";
function CreateLog(props) {
    const subject = useFormInput('');
    const content = useFormInput('');
    const toUser = useFormInput('');
    const [error] = useState(null);

    const handleSend = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"title":subject.value,"content":content.value,"toUser":{"username":toUser.value},"fromUser":{"username":sessionStorage.getItem('currentUser')}});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:6970/sendMessage", requestOptions)
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
                <Link to={"/otherLogs"}>Community Logs</Link>
                <Link to={"/messageBox"}>Message Box</Link>
                <Link to={"/createMessage"}>Write a message</Link>
                <Link to={"/communityFiles"}>Community Files</Link>
                <Link classname={"logout"} to={"/"}>Log Out</Link>
            </nav>
            <div className="Form">
                <h1>Write a message</h1>
                <br/>
                <label>To:</label>
                <br/>
                <input type="text" {...toUser} autoComplete="new-password" />
                <br/>
                <label>Title</label>
                <br/>
                <input type="text" {...subject} autoComplete="new-password" />
                <br/>
                <label>Content</label>
                <br/>
                <input type="textarea" {...content} autoComplete="new-password" />
                <br/>
                <button onClick={handleSend}>Create</button>
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