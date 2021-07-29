import './App.css';
import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages";
import Facilities from "./pages/facilities";
import PersonalTraining from "./pages/personalTraining";
import GroupTraining from "./pages/groupTraining";
import Membership from './pages/memberships';

function App() {
  return (
    <Router>
    <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/facilities' component={Facilities} exact />
    <Route path='/personalTraining' component={PersonalTraining} exact />
    <Route path='/groupTraining' component={GroupTraining} exact />
    <Route path='/memberships' component={Membership} exact />

    </Switch>
    </Router>
  );
}

export default App;
