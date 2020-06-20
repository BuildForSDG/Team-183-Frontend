import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Navbar2 extends React.Component {
  logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push(`/`);
    // setTimeout(() => this.props.history.push(`/`), 5000);
  };

  render() {
    return (
      <nav className="navbar-wrapper navbar navbar-expand-lg navbar-light justify-content-md-center" style={{ background: 'orange' }}>
        <Link className="navbar-brand" href="/">
          <img
            src="https://cdn1.iconfinder.com/data/icons/social-circle-2-1/72/Soundcloud-128.png"
            alt=""
            className="d-inline-block align-middle mr-2"
            style={{ height: '35px', width: '55px' }}
          />
          <span className=" font-weight-bold " style={{ color: 'brown' }}>
            Chicken-Farm-ke
          </span>
        </Link>
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
            {/* <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                User Profile
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/edit_profile" className="nav-link">
                Edit Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/chicken" className="nav-link">
                Purchase Raw Chicken
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product-page" className="nav-link">
                Featured Products
              </Link>
            </li>
            {/* <li className="nav-item">
              <a href="/" onClick={this.logOut} className="nav-link">
                Logout
              </a>
            </li> */}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link className="btn btn-md btn-primary animate-up-2 mr-3" to="/" onClick={this.logOut} >
              <i className="fas fa-sign-out-alt  " aria-hidden="true"></i>Log Out
            {/* <li className="nav-item">
              <a href="/" onClick={this.logOut} className="nav-link">
                Logout
              </a>
            </li> */}
            </Link>

            {/* <Link className="btn btn-md btn-primary " to="/Signup">
              <i className="fas fa-plus-square " aria-hidden="true"></i>Sign Up
            </Link> */}
          </div>
        </div>
      </nav>
    );
  }
}
export default withRouter(Navbar2);
