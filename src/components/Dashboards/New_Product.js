import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';

import { api } from '../User/UserFunctions';
export default class New_Product extends Component {
  state = {
    first_name: ''
  };


  post_product = (event) => {
    event.preventDefault();

    // const table_products = document.getElementById('products')
    const output = document.getElementById('output')
    // const dropdown = document.getElementById('btn')

    let product_name = document.getElementById('product_name').value;
    let inventory = parseInt(document.getElementById('stock_count').value);
    let min_quantity = parseInt(document.getElementById('minimum_stock').value);
    let price = parseInt(document.getElementById('price').value);
    let category = document.getElementById('btn').value;

    let data = {
      product_name, 
      inventory, 
      category,
      min_quantity, 
      price }

    // console.log(data)
    api.post('api/v1/new_products', data)
    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((data) => {
      // console.log(data)
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
    // .catch (error) {
    //   output.innerHTML = error
    //   throw Error(error)
    // }
  };

  get_categories = (event) => {
    // event.preventDefault();

    // const table_products = document.getElementById('products')
    const output = document.getElementById('output')
    const dropdown = document.getElementById('btn')

    // console.log(data)
    // api.get('api/v1/category', data)
    api.get('api/v1/category')

    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((data) => {

        // console.log(data)
        // if (response.ok === true) {
        if (data) {

          for (let i = 0; i < data.categories.length; i++) {
            console.log(data.categories[i].product_category)

              dropdown.innerHTML += (`
                    <option>${data.categories[i].product_category}</option>
                `)
          }
        }
        else { setTimeout(() => {output.innerHTML = data.message}, 1500)}

      }
    )

    .catch((error) => output.innerHTML = error)
    // .catch (error) {
    //   output.innerHTML = error
    //   throw Error(error)
    // }

  };


  componentDidMount() {
    // this.post_product();
    this.get_categories();
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name
    });
  }


  render() {

    // document.getElementById('post-product').addEventListener('submit', this.post_product);
    var el = document.getElementById('post-product');
    if(el){
      el.addEventListener('submit', this.post_product, false);
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
            <h3>New Product</h3>

            <form className="form" id="post-product">
              <div className="form-field">
                <label id="lead_text" htmlFor="Title">
                  <span className="hidden">Product Name</span>
                </label>
                <input
                  id="product_name"
                  style={{ marginLeft: '1rem' }}
                  type="text"
                  className="form-input"
                  placeholder="Product Name"
                  required
                />
              </div>
              <div className="form-field">
                <label id="lead_text" htmlFor="Minimum_stock">
                  <span className="hidden">Stock Count</span>
                </label>
                <input id="stock_count" type="number" min="0" className="form-input" placeholder="Stock Count" required />
              </div>
              <div className="form-field">
                <label id="lead_text" htmlFor="Minimum_stock">
                  <span className="hidden">Minimum Stock</span>
                </label>
                <input id="minimum_stock" type="number" min="0" className="form-input" placeholder="Minimum stock" required />
              </div>

              <div className="form-field">
                <label id="lead_text" htmlFor="Price">
                  <span className="hidden">Price</span>
                </label>
                <input id="price" type="number" min="0" className="form-input" placeholder="Price" required />
              </div>
              <div className="form-field">
                <label id="lead_text" htmlFor="category">
                  <span className="hidden">Category</span>
                </label>
                <select id="btn" className="category_list">
                  {/* <option>Raw Chicken</option>
                  <option>Featured Products</option> */}

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
