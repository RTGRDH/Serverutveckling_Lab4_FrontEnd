/*
Uploading file, code from: https://medium.com/@ibamibrhm/custom-upload-button-image-preview-and-image-upload-with-react-hooks-a7977618ee8c
 */
import React, { useState } from "react";
import {Link} from "react-router-dom";
import '../Styles/Picture.css'

function Picture(Props) {
    const [image, setImage] = useState({ preview: "", raw: "" });
    const currUser = sessionStorage.getItem('currentUser');
    const handleChange = e => {
       if (e.target.files.length) {
            setImage({
                image: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
            console.log(image.raw)
        }
    };

    const handleUpload = e => {
        e.preventDefault();
        const formData = new FormData();
        console.log(image.raw)
        formData.append("picture", image.raw); //a key

        fetch("http://localhost:9001/addPicture?name=" + sessionStorage.getItem('currentUser'), {
            method: "POST",
            headers: {
            },
            body: formData
        });
    };
    const handleFetch = async e=>{

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
                <Link to={"/test"}>Test</Link>
                <Link classname={"logout"} to={"/"}>Log Out</Link>
            </nav>
            <div className="upload">
                <h1>Upload Picture</h1>
                <label className="custom-file-upload">
                    <input type="file" id="actual-btn" onChange={handleChange}/>
                    <i className="fa fa-cloud-upload"></i> Choose Picture
                </label>
                <br/>
                <button onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
}

export default Picture;