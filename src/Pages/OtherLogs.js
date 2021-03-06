import React from 'react';
import '../Styles/OtherLogs.css';
import { Table } from 'react-bootstrap';
import {Link} from "react-router-dom";

class otherLogs extends React.Component{
    state = {
        logs: [],
        files:[]
    }

    componentWillMount() {
        let requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        let url = "http://log-backend:6971/getOtherUsersLogs?currentUser=" + sessionStorage.getItem('currentUser');
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    logs: data
                })
                console.log(this.state.logs);
            })
            .catch(error => console.log('error', error));
    }
    render()
    {
        let logs = this.state.logs.map((log) => {
            return (
                <tr key={log.id}>
                    <td>
                        {log.title}
                    </td>
                    <td>
                        {log.content}
                    </td>
                    <td>
                        {log.user.username}
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
                <div className = "OtherLogs">
                    <h1>Community Logs</h1>
                    <Table>
                        <thead>
                        <tr>
                            <th>Titel</th>
                            <th>Innehåll</th>
                            <th>Skapad Av</th>
                        </tr>
                        </thead>
                        <tbody>
                        {logs}
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default otherLogs;