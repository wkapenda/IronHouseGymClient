import './App.css';
import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages";
import Facilities from "./pages/facilities";

function App() {
  return (
    <Router>
    <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/facilities' component={Facilities} exact />

    </Switch>
    </Router>
  );
}

export default App;
