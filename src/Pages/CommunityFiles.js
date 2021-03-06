import React from 'react';
import '../Styles/CommunityFiles.css';
import { Table } from 'react-bootstrap';
import {Link} from "react-router-dom";

class CommunityFiles extends React.Component{
    state = {
        files:[]
    }

    componentWillMount() {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let url = "http://file-backend:6972/getAll?currentUser=" + sessionStorage.getItem('currentUser');
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    files: data
                })
                console.log(this.state.files);
            })
            .catch(error => console.log('error', error));
    }

    render()
    {
        let files = this.state.files.map((files) => {
            return (
                <tr key={files.user}>
                    <td>
                        {files.user}
                    </td>
                    {files.files.map(file =>
                        <Link><td>{file}</td></Link>
                    )}
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
                <h2>Community Files</h2>
                <Table>
                    <thead>
                    <tr>
                        <th>Användare</th>
                        <th>Filnamn</th>
                    </tr>
                    </thead>
                    <tbody className={"communityFiles"}>
                    {files}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default CommunityFiles;