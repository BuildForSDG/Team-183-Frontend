import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';

import { api } from '../User/UserFunctions';
export default class New_Category extends Component {
  state = {
    first_name: ''
  };


  post_category = (event) => {
    event.preventDefault();

    const output = document.getElementById('output')

    let product_category = document.getElementById('product_category').value;


    let data = {
      product_category, 
      // inventory, 
      // category,
      // min_quantity, 
      // price 
    }

    // console.log(data)
    api.post('api/v1/category', data)
    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((data) => {
      console.log(data)
      
        // if (data.status === 201) {
        if (data) {
            output.innerHTML = data.message
            setTimeout(() => {
                window.location.href = '/plist'
            }, 1000)
        } else {
            setTimeout(() => {
                output.innerHTML = data.message
            }, 1500)
        }

      }
    )
    // .catch((error) => table_products.innerHTML = error)
    .catch((error) => output.innerHTML = error)

  };

  componentDidMount() {
    // this.post_product();
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name
    });
  }

  render() {

    var el = document.getElementById('post-category');
    if(el){
      el.addEventListener('submit', this.post_category, false);
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
              <a id="lead_text" href="plist">
                Back to Products
              </a>
            </div>
          </nav>
        </div>

        <div className="container2">
          <div id="output"></div>
        </div>

        <div className="container-detail">
          <div className="card">
            <i className="fas fa-store fa-10x"></i>
          </div>
          <div className="form-update">
            <h3>New Category</h3>

            <form className="form" id="post-category">
              <div className="form-field">
                <label id="lead_text" htmlFor="Title">
                  <span className="hidden">Category Name </span>
                </label>
                <input
                  id="product_category"
                  style={{ marginLeft: '1rem' }}
                  type="text"
                  className="form-input"
                  placeholder="Category Name"
                  required
                />
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
