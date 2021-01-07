import React from 'react';
import { Table } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, NavLink, Link } from 'react-router-dom';
import '../Styles/Dashboard.css'
import CreateLog from "./CreateLog";
class Dashboard extends React.Component{
    state = {
        logs: []
    }

    componentWillMount() {
        let requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        let url = "http://localhost:6971/getUsersLogs?currentUser=" + sessionStorage.getItem('currentUser');
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
                </nav>
                <Route path="/createLog" component={CreateLog}/>
                <div className = "Personliga Loggar">
                    <h3>Personal Logs</h3>
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
export default Dashboard;