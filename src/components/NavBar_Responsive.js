// import React, { Component } from 'react';
import React, { Component, Fragment } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
// import { Link, withRouter } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

// import Navbar from './Navbar';
// import Navbar2 from './Navbar2';


class NavBar extends Component {
  logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push(`/`); // setTimeout(() => this.props.history.push(`/`), 5000);

  }

  render() {
    
    const activeStyle = {
      fontWeight: "bold",
      color: "red"
    };

    const loginRegLink = (
      
      // <Navbar />

      <Fragment>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#Home" onClick={() => this.props.history.push('/')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#About" onClick={() => this.props.history.push('/')}>
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#solution" onClick={() => this.props.history.push('/')}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact" onClick={() => this.props.history.push('/')}>
                Contact us
              </a>
            </li>
          </ul>
          <div
            //  className="mx-auto"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <NavLink className="btn btn-md btn-primary animate-up-2 mr-3" to="/Login">
              <i className="fas fa-sign-in-alt  " aria-hidden="true"></i>   Log In
            </NavLink>

            <NavLink className="btn btn-md btn-primary " to="/Signup">
              <i className="fas fa-plus-square " aria-hidden="true"></i>   Sign Up
            </NavLink>
          </div>
      </Fragment>

    );

    const userLink = (

      // <Navbar2 />

       <Fragment>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link" activeClassName="selected">
                User Profile
              </NavLink>
            </li>
            <li className="nav-item " >
              <NavLink to="/edit_profile" className="nav-link" activeStyle={activeStyle}>
                Edit Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/chicken" className="nav-link" activeClassName="selected">
                Purchase Raw Chicken
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/product-page" className="nav-link" activeClassName="selected">
                Featured Products
              </NavLink>
            </li>
          </ul>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <NavLink className="btn btn-md btn-primary animate-up-2 mr-3" to="/" onClick={this.logOut} >
              <i className="fas fa-sign-out-alt  " aria-hidden="true"></i>   Log Out
            {/* <li className="nav-item">
              <a href="/" onClick={this.logOut} className="nav-link">
                Logout
              </a>
            </li> */}
            </NavLink>
          </div>
      </Fragment>

    );

    return (

      // <nav>
      //   <div>      

      <nav className="navbar-wrapper navbar navbar-expand-lg navbar-light " style={{ background: 'orange' }}>
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://cdn1.iconfinder.com/data/icons/social-circle-2-1/72/Soundcloud-128.png"
            alt=""
            className="d-inline-block align-middle mr-2"
            style={{ height: '35px', width: '55px' }}
          />
          <span className=" font-weight-bold " style={{ color: 'brown' }}>
            Chicken-Farm-Ke
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      


          {localStorage.getItem('usertoken') ? userLink : loginRegLink}


        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
