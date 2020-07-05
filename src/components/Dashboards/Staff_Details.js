import React, { Component, Fragment } from 'react';

export default class Staff_Details extends Component {

  render() {
    return (
      <Fragment>
        <div className="Navbar" style={{ marginTop: '4rem' }}>
          <div id="lead_text" className="Navbar-Link Navbar-Link-brand">
            Chicken-App-Ke
          </div>

          <div className="Navbar-Link Navbar-Link-toggle">
            <i className="fas fa-bars"></i>
          </div>

          <nav className="Navbar-Items Navbar-Items--right">
            <div className="Navbar-Link">
              <a id="lead_text" href="/staff-list">
                Back To Staff List
              </a>
            </div>
          </nav>
        </div>

        <div className="container2">
          <div id="output">{/* <!-- Dialog Box --> */}</div>
        </div>

        <div className="container-detail">
          <div className="card">
            <h5>User Email</h5>
            <p id="card-title">johndoe@gmail.com</p>

            <h5>Date Added</h5>
            <p id="date-added">05-Jul-2020</p>

            <h5>User Role</h5>
            <p id="role">Admin</p>
            <h5>User ID</h5>
            <p id="user_id">12</p>
          </div>
          <div className="form-update">
            <h3>Update Details</h3>

            <form id="user-update" className="form">
              <div className="form-field">
                <label id="lead_text" htmlFor="Title">
                  <span className="hidden">User role</span>
                </label>
                <input style={{marginLeft: '2rem'}} id="User_role" type="text" className="form-input" placeholder="User role" required />
              </div>

              <div className="form-field">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}
