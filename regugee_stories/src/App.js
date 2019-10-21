import React from 'react';
import './App.css';
import Register from '../src/components/Register/Register'
import NavBar from '../src/components/NavBar/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <Route exact path='/' component={Home} />
        <Route exact path='/recent-stories' component={RecentStories} />
        <Route exact path='/submit-stories' component={SubmitStory} />
        <Route exact path='/get-involved' component={GetInvolved} /> */}
      </Router>
      <Register />
    </div>
  );
}

export default App;
