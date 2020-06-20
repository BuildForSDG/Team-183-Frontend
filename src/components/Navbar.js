import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
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
            <NavLink className="btn btn-md btn-primary animate-up-2 mr-3" to="/Login" onClick={() => this.props.history.push('/Login')}>
              <i className="fas fa-sign-in-alt  " aria-hidden="true"></i>   Log In
            </NavLink>

            <NavLink className="btn btn-md btn-primary " to="/Signup" onClick={() => this.props.history.push('/Signup')}>
              <i className="fas fa-plus-square " aria-hidden="true"></i>   Sign Up
            </NavLink>
          </div>


        </div>
      </nav>
    );
  }
}
export default withRouter(Navbar);
