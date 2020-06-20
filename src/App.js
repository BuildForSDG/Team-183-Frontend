import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/signUp';
import Landing from './components/landingPage/landing';
import Forgot from './components/Forgot';
import Reset from './components/Reset';
import Profile from './components/Profile';
import Blog from './components/Blog/Blog';
import Product from './components/Product/Product';
import ProductList from './components/Product/ProductList';
import Nav from './components/Product/Nav';
import Rawchicks from './components/Product/Rawchicks';
import Cart from './components/Cart/Cart';
// import Navbar from "./components/Navbar";
import Navbar from './components/NavBar_Responsive';

import Footer from './components/Footer/Footer';
// import App1 from './components/App1'
import App2 from './components/App2';

const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div>
        {/* <Navbar /> */}
        <Component {...props} />
        <Footer />
      </div>
    )}
  />
);

function App() {
  return (
    <BrowserRouter>
      {/* <Route exact path="/">
        <Redirect to="/Home" />
      </Route> */}

      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <NavRoute path="/Signup" component={Signup} />
          <NavRoute path="/Forgot" component={Forgot} />
          <NavRoute path="/Login" component={Login} />
          <NavRoute path="/Reset" component={Reset} />
          <NavRoute path="/profile" component={Profile} />
          <NavRoute path="/blog" component={Blog} />
          <NavRoute path="/product-page" component={Product} />
          <NavRoute path="/products" component={ProductList} />
          <NavRoute path="/nav" component={Nav} />
          <NavRoute path="/chicken" component={Rawchicks} />
          <NavRoute path="/cart" component={Cart} />
          {/* <Route path="/edit_profile1" omponent={App1} /> */}
          <NavRoute path="/edit_profile" component={App2} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
