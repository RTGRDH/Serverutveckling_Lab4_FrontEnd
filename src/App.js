import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from "./Pages/SignUp";
import React from "react";
function App() {
  return (
    <div className="App">
        <body className="body">
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </BrowserRouter>
        </body>
    </div>
  );
}

export default App;
