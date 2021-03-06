import React from 'react';
import '../Styles/MessageBox.css';
import { Table } from 'react-bootstrap';
import {Link} from "react-router-dom";

class MessageBox extends React.Component{
    state = {
        messages: []
    }

    componentWillMount() {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let url = "http://message-backend:6970/getMessages?currentUser=" + sessionStorage.getItem('currentUser');
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    messages: data
                })
                console.log(this.state.messages);
            })
            .catch(error => console.log('error', error));
    }

    render()
    {
        let messages = this.state.messages.map((msg) => {
            return (
                <tr key={msg.id}>
                    <td>
                        {msg.title}
                    </td>
                    <td>
                        {msg.content}
                    </td>
                    <td>
                        {msg.fromUser.username}
                    </td>
                </tr>
            )
        });
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
                <div className = "Messages">
                    <h3>Inbox</h3>
                    <Table>
                        <thead>
                        <tr>
                            <th>Titel</th>
                            <th>Innehåll</th>
                            <th>Avsändare</th>
                        </tr>
                        </thead>
                        <tbody>
                        {messages}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default MessageBox;