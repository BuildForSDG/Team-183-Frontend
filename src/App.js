import React from 'react';
import Login from './components/Login';
import Signup from './components/signUp';
import Landing from './components/landingPage/landing';
import Forgot from './components/Forgot';
import Reset from './components/Reset';
import Profile from './components/Profile'


import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route path="/Login" component={Login} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Forgot" component={Forgot} />
      <Route path="/Reset" component={Reset} />
      <Route path="/profile" component={Profile} />

    </BrowserRouter>
  );
}

export default App;
