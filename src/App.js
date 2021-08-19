import './App.css';
import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages";
import Facilities from "./pages/facilities";
import PersonalTraining from "./pages/personalTraining";
import GroupTraining from "./pages/groupTraining";
import Membership from './pages/memberships';
import GroupClass from "./pages/groupClass"

function App() {
  return (
    <Router>
    <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/facilities' component={Facilities} exact />
    <Route path='/personaltraining' component={PersonalTraining} exact />
    <Route path='/grouptraining' component={GroupTraining} exact />
    <Route path="/grouptraining/:session" component={GroupClass} />
    <Route path='/memberships' component={Membership} exact />

    </Switch>
    </Router>
  );
}

export default App;
