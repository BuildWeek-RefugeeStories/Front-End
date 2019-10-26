import React from "react";
import "./App.css";
import Register from "../src/components/Register/Register";
import NavBar from "../src/components/NavBar/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import GetInvolved from './components/GetInvolved/GetInvolved';
import SubmitStory from "./components/Story/SubmitStory";
import Footer from "./components/Footer/Footer";
import RecentStories from "./components/HomePage/RecentStories/RecentStories";

import { connect } from 'react-redux';

import { reauth } from "./actions";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AwaitingApproval from "./components/AwaitingApproval/AwaitingApproval";

const App = props => {
  if(!props.token && localStorage.getItem('token')) {
    props.reauth();
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path='/getinvolved' component={GetInvolved} />
        <Route exact path='/awaiting' component={AwaitingApproval} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={RecentStories} />
        <PrivateRoute exact path="/submitstory" component={SubmitStory} />
        <Footer />
      </Router>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { reauth }
)(App);
