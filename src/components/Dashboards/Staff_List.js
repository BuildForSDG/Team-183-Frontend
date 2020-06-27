import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';

import { api } from '../User/UserFunctions';
export default class Staff_List extends Component {
  state = {
    first_name: ''
  };

  get_users = () => {
    const table_users = document.getElementById('users');

    api.get('api/v1/users')
    
    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((body) => {
      for (let i = 0; i < body.users.length; i++) {
        // console.log(body.users);
        // console.log(body.users[i]);
        table_users.innerHTML += `
                    <tr>
                       <td className="staff_name table-data">${body.users[i].user_id}</td>
                       <td className="staff_name table-data">${body.users[i].email}</td>
                       <td className="staff_name table-data">${body.users[i].registered_on}</td>
                       <td><a href="staff-details?email=${body.users[i].email}"><button id="btn">View Details</button></a></td>
                    </tr>
                `;
      }
    })
    .catch((error) => (table_users.innerHTML = error));
  };

  componentDidMount() {
    this.get_users();
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name
    });
  }



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
              <a id="lead_text" href="/admin">
                Back to Dashboard
              </a>
            </div>
          </nav>
        </div>
        <div className="container2">
          <div id="output">{/* <!-- Dialog Box --> */}</div>
        </div>
        <h3 id="lead_text" className="center" style={{ marginLeft: '2rem' }}>
          Company User List{' '}
        </h3>

        <div className="container-product">
          <a href="new-attendant">
            <button className="add-product hidden" id="btn">
              Add User
            </button>
          </a>
        </div>

        <div className="container-products">
          <table className="main-table">
            <tbody id="users">
              <tr>
                <th className="dash-link">User Id</th>
                <th className="dash-link">Email</th>
                <th className="dash-link">Date Registered</th>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
