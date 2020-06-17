import React from 'react';
import Login from './components/Login';
import Signup from './components/signUp';
import Landing from './components/landingPage/landing';
import Forgot from './components/Forgot';
import Reset from './components/Reset';
import Profile from './components/Profile'
import Blog from './components/Blog/Blog';
import Product from './components/Product/Product'
import Nav from './components/Product/Nav'
import Chicks from './components/Product/Rawchicks'

// import App1 from './components/App1'
import App2 from './components/App2'


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
      <Route path="/blog" component={Blog} />
      <Route path="/product-page" component={Product} />
      <Route path="/nav" component={Nav} />
      <Route path="/chicken" component={Chicks} />
      {/* <Route path="/edit_profile1" omponent={App1} /> */}
      <Route path="/edit_profile" component={App2} />

    </BrowserRouter>
  );
}

export default App;
