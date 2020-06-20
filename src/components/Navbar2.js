import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


class Navbar2 extends React.Component {
  logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push(`/`); // setTimeout(() => this.props.history.push(`/`), 5000);
  };

  render() {

    const activeStyle = {
      fontWeight: "bold",
      color: "brown"
    };

    return (
      // <nav className="navbar-wrapper navbar navbar-expand-lg navbar-light justify-content-md-center" style={{ background: 'orange' }}>
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
            </NavLink>
  
          </div>


        </div>
      </nav>
    );
  }
}
export default withRouter(Navbar2);
