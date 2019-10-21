import React from 'react';
import './App.css';
import Register from '../src/components/Register/Register'
import NavBar from '../src/components/NavBar/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
      </Router>
      
    </div>
  );
}

export default App;
