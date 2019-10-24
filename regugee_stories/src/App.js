import React, {useState} from 'react';
import './App.css';
import Register from '../src/components/Register/Register'
import NavBar from '../src/components/NavBar/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import SubmitStory from './components/Story/SubmitStory';
import Footer from "./components/Footer/Footer";
import RecentStories from './components/HomePage/RecentStories/RecentStories'
import Article from './components/HomePage/Article/Article';
import HomePage from './components/HomePage/Home/HomePage';
import HomeCard from './components/HomePage/Home/HomeCard';

function App() {
  const [newArticle, setNewArticle] = useState([])
  const addToList = item => {
    setNewArticle([...newArticle, item])
  }
  
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/home' component={HomePage} />
          <Route exact path='/recent-stories' component={RecentStories} />
          <Route exact path='/stories' component={SubmitStory} />
          <Route path='/posts/:id' render={
            props => {
              return <Article {...props} addToList={addToList}/>
            }
          } />
          <Footer />
      </Router>
    </div>
  );
}

export default App;
