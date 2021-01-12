import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import React from "react";
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard"
import CreateLog from "./Pages/CreateLog"
import OtherLogs from "./Pages/OtherLogs"
import MessageBox from "./Pages/MessageBox";
import CreateMessage from "./Pages/CreateMessage";
import Picture from "./Pages/Picture";
import CommunityFiles from "./Pages/CommunityFiles"
function App() {
  return (
    <div className="App">
        <body className="body">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/createLog" component={CreateLog}/>
                <Route path="/otherLogs" component={OtherLogs}/>
                <Route path="/messageBox" component={MessageBox}/>
                <Route path="/createMessage" component={CreateMessage}/>
                <Route path="/picture" component={Picture}/>
                <Route path={"/communityFiles"} component={CommunityFiles}/>
            </Switch>
        </BrowserRouter>
        </body>
    </div>
  );
}

export default App;
