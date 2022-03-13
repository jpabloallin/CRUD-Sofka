import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactEdit from "./components/ContactEdit";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/contacts' exact={true} component={ContactList}/>
            <Route path='/contact/:id' component={ContactEdit}/>
          </Switch>
        </Router>
    )
  }
}

export default App;
