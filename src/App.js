import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Landing from './components/landingPage/landing';
import Navbar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';

import Login from './components/User/Login';
import Signup from './components/User/signUp';
import Forgot from './components/User/Forgot';
import Reset from './components/User/Reset';

import Profile from './components/Profile/Profile';
import EditProfile2 from './components/Profile/EditProfile2';
import NewProfile from './components/Profile/NewProfile';

import Admin_Dashboard from './components/Dashboards/Admin_Dashboard';
import Attendant_Dashboard from './components/Dashboards/Attendant_Dashboard';

import Admin_Sales from './components/Dashboards/Admin_Sales';
import Staff_List from './components/Dashboards/Staff_List';
import Staff_Details from './components/Dashboards/Staff_Details';
import New_Attendant from './components/Dashboards/New_Attendant';
import Attendant_Products_View from './components/Dashboards/Attendant_Products_View';
import Attendant_Sale from './components/Dashboards/Attendant_Sale';
// import Sales_Admin from './components/Dashboards/Sales_Admin'
import User_Sales from './components/Dashboards/User_Sales';

import pList from './components/Product/pList';
import pDetails from './components/Product/pDetails';
import New_Product from './components/Dashboards/New_Product';
import New_Category from './components/Dashboards/New_Category';

import Blog from './components/Blog/Blog';
import Product from './components/Product/Product';
// import ProductList from './components/Product/ProductList';
import Nav from './components/Product/Nav';
import Rawchicks from './components/Product/Rawchicks';
import Cart from './components/Cart/Cart';

import NotFoundPage from './components/NotFoundPage/NotFoundPage';


const NavRoute = ({ exact, path, component: Component }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) => (
      <div>
        <Component {...props} />
        <Footer />
      </div>
    )}
  />
);

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <NavRoute path="/Signup" component={Signup} />
          <NavRoute path="/Forgot" component={Forgot} />
          <NavRoute path="/Login" component={Login} />
          <NavRoute path="/Reset" component={Reset} />
          <NavRoute path="/profile" component={Profile} />
          <NavRoute path="/profile-page" component={NewProfile} />
          <NavRoute path="/edit_profile" component={EditProfile2} />

          <NavRoute path="/admin" component={Admin_Dashboard} />
          <NavRoute path="/customer" component={Attendant_Dashboard} />

          <NavRoute path="/plist" component={pList} />
          <NavRoute path="/pdetails" component={pDetails} />

          <NavRoute path="/admin-sales" component={Admin_Sales} />
          <NavRoute path="/staff-list" component={Staff_List} />
          <NavRoute path="/staff-details" component={Staff_Details} />
          <NavRoute path="/customer-products" component={Attendant_Products_View} />
          <NavRoute path="/customer-sale" component={Attendant_Sale} />
          {/* <NavRoute path="/sales-admin" component={Sales_Admin} /> */}
          <NavRoute path="/user-sales" component={User_Sales} />

          <NavRoute path="/new-product" component={New_Product} />
          <NavRoute path="/new-category" component={New_Category} />
          <NavRoute path="/new-attendant" component={New_Attendant} />

          <NavRoute path="/blog" component={Blog} />
          <NavRoute path="/product-page" component={Product} />
          {/* <NavRoute path="/products" component={ProductList} /> */}
          <NavRoute path="/nav" component={Nav} />
          <NavRoute path="/chicken" component={Rawchicks} />
          <NavRoute path="/cart" component={Cart} />
          
          <NavRoute component={NotFoundPage} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
