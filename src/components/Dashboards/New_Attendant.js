import React, { Component, Fragment } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// import jwt_decode from 'jwt-decode';

import { api } from '../User/UserFunctions';
export default class New_Attendant extends Component {
  state = {
    first_name: ''
  };

  new_user = async (event) => {
    event.preventDefault();

    const output = document.getElementById('output')

    // const table_products = document.getElementById('products')
    let email = document.getElementById('Attendant_email').value;
    let username = document.getElementById('Attendant_email').username;
    let role = document.getElementById('btn').value;
    let password = document.getElementById('login-password').value;

    let data = {
      email, 
      password, 
      username, 
      role,
      // min_quantity, 
      // price 
    }

    // console.log(data)
    api.post('api/v1/users/signup', data)

    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((data) => {

        // console.log(data)
        // if (response.ok === true) {
        // if (data) {

        //   const output = document.getElementById('output')
        //   output.innerHTML = data.Message
        //   setTimeout(() => {
        //       window.location.href ='/customer-products'
        //   }, 1500)
        // }
        if (data.message) {
          toast.success(`Message: ${data.message}`);
          // localStorage.setItem("usertoken", res.data.token);
          setTimeout(() => this.props.history.push(`/login`), 5000);
        } else if (data.warning) {
          toast.warning(`Warning: ${data.warning}`);
          setTimeout(() => this.props.history.push(`/signup`), 5000);
        }

        else { setTimeout(() => {output.innerHTML = data.message}, 1500)}

      }
    )

    .catch((error) => output.innerHTML = error)

  };


  render() {

    var el = document.getElementById('save');
    if(el){
      el.addEventListener('click', this.new_user, false);
    }

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
              <a id="lead_text" href="staff-list">
                Back to Staff List
              </a>
            </div>
          </nav>
        </div>

        <div className="container2">
          <div id="output">{/* <!-- Dialog Box --> */}</div>
          <ToastContainer />
        </div>

        <div className="container-detail">
          <div className="card">
            <i className="fas fa-user fa-10x"></i>
          </div>
          <div className="form-update">
            <h3>New User</h3>

            <form id="save" className="form">
              <div className="form-field">
                <label id="lead_text" htmlFor="Title">
                  <span className="hidden">User Email</span>
                </label>
                <input
                  style={{ marginLeft: '1rem' }}
                  id="Attendant_email"
                  type="text"
                  className="form-input"
                  placeholder="User Email"
                  required
                />
              </div>

              <div className="form-field">
                <label id="lead_text" htmlFor="Title">
                  <span className="hidden">UserName</span>
                </label>
                <input
                  style={{ marginLeft: '1rem' }}
                  id="username"
                  // type="text"
                  className="form-input"
                  placeholder="UserName"
                  required
                />
              </div>

              <div className="form-field">
                <label id="lead_text" htmlFor="login-password">
                  <span className="hidden">Password</span>
                </label>
                <input
                  autoComplete="off"
                  id="login-password"
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="form-field">
                <label id="lead_text" htmlFor="is_admin">
                  <span>Assign Role</span>
                </label>
                <select id="btn" className="role_list">
                  <option>vendor</option>
                  <option>customer</option>
                  <option>admin</option>
                  <option>attendant</option>
                </select>
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
