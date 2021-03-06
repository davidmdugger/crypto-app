import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import News from './components/News/News';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
