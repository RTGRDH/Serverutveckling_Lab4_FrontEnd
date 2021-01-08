import React from 'react';
import '../Styles/OtherLogs.css';
import { Table } from 'react-bootstrap';
import {Link, Route} from "react-router-dom";
import CreateLog from "./CreateLog";

class otherLogs extends React.Component{
    state = {
        logs: []
    }

    componentWillMount() {
        let requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        let url = "http://localhost:6971/getOtherUsersLogs?currentUser=" + sessionStorage.getItem('currentUser');
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
                    <Link to={"/messages"}>Message Box</Link>
                    <Link to={"/createMessage"}>Write a message</Link>
                    <Link to={"/picture"}>Picture</Link>
                </nav>
                <div className = "OtherLogs">
                    <h3>Community Logs</h3>
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