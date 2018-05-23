import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import './styles/App.css';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import AdminHome from './components/AdminHome/AdminHome';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route 
            path="/admin"
            component={LoginPage}
          />
          <Route
            path="/register"
            component={RegisterPage}
          />
          <Route 
            path="/user"
            component={AdminHome}
          />
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
