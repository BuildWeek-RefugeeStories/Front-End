import React from 'react';
import './App.css';
import Register from '../src/components/Register/Register'
import NavBar from '../src/components/NavBar/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage'
import SubmitStory from './components/Story/SubmitStory';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/stories' component={SubmitStory} />
          <Footer />
      </Router>
    </div>
  );
}

export default App;
