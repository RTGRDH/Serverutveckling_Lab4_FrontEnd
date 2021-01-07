import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard"
import CreateLog from "./Pages/CreateLog"
import React from "react";
function App() {
  return (
    <div className="App">
        <body className="body">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path={"/createLog"} component={CreateLog}/>
            </Switch>
        </BrowserRouter>
        </body>
    </div>
  );
}

export default App;
