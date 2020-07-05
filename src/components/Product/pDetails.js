import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import jwt_decode from 'jwt-decode';

import { api } from '../User/UserFunctions';

export default class pDetails extends Component {
  state = {
    first_name: ''
  };

  get_product = () => {
    // const table_products = document.getElementById('products')
      let output = document.getElementById('output')

    let product_name = document.getElementById('card-title')
    let inventory = document.getElementById('stock')
    let min_quantity = document.getElementById('minimum-quantity')
    let date_created = document.getElementById('date-added')
    let date_modified = document.getElementById('date-modified')
    let price = document.getElementById('price')
    let inventory_form = document.getElementById('stock_form');
    let min_quantity_form =document.getElementById('minimum_stock');
    let price_form = document.getElementById('price_form');

    // Get id from query params
    const product_id = new URLSearchParams(window.location.search).get("id");
    // console.log(product_id)
    api.get('api/v1/products/'+product_id)
    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((body) => {
      // console.log(body)
      if (body) {
            // console.log(body.product.product_name)
            product_name.innerHTML = body.product.product_name
            inventory.innerHTML = body.product.inventory
            inventory_form.value = body.product.inventory
            min_quantity.innerHTML = body.product.min_quantity
            min_quantity_form.value = body.product.min_quantity
            date_created.innerHTML = body.product.created
            date_modified.innerHTML = body.product.updated
            price.innerHTML = body.product.price
            price_form.value = body.product.price

        } else if (body.status !== 200) {
            let output = document.getElementById('output')
            output.innerHTML = body.message;

        }
        
      }
    )
    .catch((error) => output.innerHTML = error)
  };

  update_product = (event) => {
    event.preventDefault();

    // const table_products = document.getElementById('products')
    const output = document.getElementById('output')
    // const dropdown = document.getElementById('btn')

    // let product_name = document.getElementById('product_name').value;
    let inventory = parseInt(document.getElementById('stock_form').value);
    let min_quantity = parseInt(document.getElementById('minimum_stock').value);
    let price = parseInt(document.getElementById('price_form').value);
    // let category = document.getElementById('btn').value;

    let data = {
      // product_name, 
      inventory, 
      // category,
      min_quantity, 
      price 
    }
    
    // console.log(data)
    // Get id from query params
    const product_id = new URLSearchParams(window.location.search).get("id");
    // console.log(product_id)
    api.update('api/v1/one_product/'+product_id, data)
    // console.log(data)
    // api.update('api/v1/products', data)
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

  delete_product = (event) => {
    event.preventDefault();

    const output = document.getElementById('output')
    
    // Get id from query params
    const product_id = new URLSearchParams(window.location.search).get("id");
    console.log(product_id)
    api.delete('api/v1/products/'+product_id)
    // console.log(data)
    // api.delete('api/v1/product', data)
    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((data) => {
      console.log(data)
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

    .catch((error) => output.innerHTML = error)

  };


  componentDidMount() {
    this.get_product();
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name
    });
  }


  render() {

    var el = document.getElementById('delete-product');
    if(el){
      el.addEventListener('click', this.delete_product, false);
    }
    var el1 = document.getElementById('product-update');
    if(el1){
      el1.addEventListener('submit', this.update_product, false);
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
          <div id="output">{/* <!-- Dialog Box --> */}</div>
        </div>
        <div className="container-detail">
          <div className="card">
            <h5>Product Title</h5>
            <p id="card-title">Flour</p>
            <h5>In Stock</h5>
            <p id="stock">50</p>
            <h5>Minimum Quantity Allowed</h5>
            <p id="minimum-quantity">20</p>
            <h5>Date Added</h5>
            <p id="date-added">11-Oct-2018</p>
            <h5>Date Modified</h5>
            <p id="date-modified">13-Oct-2018</p>
            <h5>Price</h5>
            <p id="price">Ksh.75</p>

            <Button id="delete-product" type="submit" value="Submit">Delete</Button>

            {/* <div className="form-field">
                <input type="submit" value="Delete" id="delete-product" />
            </div> */}

          </div>
          <div className="form-update">
            <h3>Update Details</h3>
            {/* <form action="" method="post" id="product-update"> */}
            <form id="product-update">
              <div className="form-field">
                <label id="lead_text" htmlFor="stock">
                  <span className="hidden"> Stock</span>
                </label>
                <input id="stock_form" type="number" min="0" className="form-input" placeholder="Stock" />
              </div>

              <div className="form-field">
                <label id="lead_text" htmlFor="Minimum_stock">
                  <span className="hidden">Minimum Stock</span>
                </label>
                <input id="minimum_stock" type="number" min="0" className="form-input" placeholder="Minimum stock" />
              </div>

              <div className="form-field">
                <label id="lead_text" htmlFor="Price">
                  <span className="hidden">Price</span>
                </label>
                <input id="price_form" type="number" min="0" className="form-input" placeholder="Price" />
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
