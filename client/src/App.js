import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './stylesheets/App.css';
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Builder from './components/Builder';
import Browse from './components/Browse';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/dashboard" component={ Dashboard } />
          <Route path="/encounter-builder" component={ Builder } />
          <Route path="/browse" component={ Browse } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
