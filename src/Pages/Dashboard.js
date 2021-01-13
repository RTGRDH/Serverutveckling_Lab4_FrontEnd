import React, {useState} from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../Styles/Dashboard.css'
class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            logs: [],
            image:null,
            currUser:""
        }
        this.currUser = sessionStorage.getItem('currentUser')
        this.handleChange = this.handleChange.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
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
    async handleUpload (e){
        e.preventDefault();
        let formData = new FormData();
        console.log(this.state.image == null)
        formData.append("picture", this.state.image); //a key
        fetch("http://localhost:9001/addPicture?name=" + sessionStorage.getItem('currentUser'), {
            method: "POST",
            headers: {
            },
            body: formData
        });
        this.setState({
            image:null
        })
    };
    handleChange (e){
        if (e.target.files.length) {
            this.setState({
                image: e.target.files[0]
            })
            console.log(this.state.image)
        }
    };
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
                <div className = "personalLogs">
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
                <div className="upload">
                    <h1>Upload file</h1>
                    <label className="custom-file-upload">
                        <input type="file" id="actual-btn" onChange={this.handleChange}/>
                        <i className="fa fa-cloud-upload"></i> Select File
                    </label>
                    <br/>
                    <button onClick={this.handleUpload}>Upload</button>
                </div>
            </div>
        );
    }
}
export default Dashboard;