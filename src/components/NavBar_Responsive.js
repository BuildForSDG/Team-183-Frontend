import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

import Navbar from './Navbar';
import Navbar2 from './Navbar2';


class NavBar extends Component {
  logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push(`/`);
    // setTimeout(() => this.props.history.push(`/`), 5000);

  }

  render() {
    const loginRegLink = (
      
      <Navbar />

      // <ul className="navbar-nav">
      //   <li className="nav-item">
      //     <Link to="/login" className="nav-link">
      //       Login
      //     </Link>
      //   </li>
      //   <li className="nav-item">
      //     <Link to="/signup" className="nav-link">
      //       Register
      //     </Link>
      //   </li>
      // </ul>
    );

    const userLink = (
      <Navbar2 />
      // <ul className="navbar-nav">
      //   <li className="nav-item">
      //     <Link to="/profile" className="nav-link">
      //       User Profile
      //     </Link>
      //   </li>
      //   <li className="nav-item">
      //     <Link to="/edit_profile" className="nav-link">
      //       Edit Profile
      //     </Link>
      //   </li>
      //   <li className="nav-item">
      //     <Link to="/chicken" className="nav-link">
      //       Purchase Raw Chicken
      //     </Link>
      //   </li>
      //   <li className="nav-item">
      //     <Link to="/product-page" className="nav-link">
      //       Featured Products
      //     </Link>
      //   </li>
      //   <li className="nav-item">
      //     <a href="/" onClick={this.logOut} className="nav-link">
      //       Logout
      //     </a>
      //   </li>
      // </ul>
    );

    return (
      <nav>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded"> */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div>
        {/* <div className="collapse navbar-collapse justify-content-md-center" id="navbar1"> */}
          {/* <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul> */}
          {/* {localStorage.usertoken ? userLink : loginRegLink} */}
          {localStorage.getItem('usertoken') ? userLink : loginRegLink}

        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
