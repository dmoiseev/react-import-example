import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import AsyncComponent from './components/AsyncComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>

          <Route exact path="/" component={AsyncComponent(() => import('./containers/Home'))} />
          <Route path="/about-us" component={AsyncComponent(() => import('./containers/AboutUs'))} />
        </div>
      </Router>
    );
  }
}

export default App;
