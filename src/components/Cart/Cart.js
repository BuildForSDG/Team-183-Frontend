import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';

import { api } from '../User/UserFunctions';

export default class Cart extends Component {

  state = {
    first_name: ''
  };


  get_carts = () => {
    // event.preventDefault();

    const table_carts = document.getElementById('carts')
    const output = document.getElementById('output')
    // const user_id = localStorage.getItem('user_id')
    // let data = {}

    // console.log(data)
    // api.get('api/v1/get_cart', data)
    api.get('api/v1/get_cart')
    // api.get('api/v1/get_cart/' + user_id)

      // .then((res) => console.log(res))
      .then((res) => res.json()) // Retrieve json
      .then((body) => {
            // console.log(body)
            // if (response.ok === true) {

            if (body) {
              for (let i = 0; i < body.cart_record.length; i++) {
                table_carts.innerHTML +=
                    (`
                        <tr>
                            <td className="item_data table-data" id="product_name">${body.cart_record[i].product_id}</td>
                            <td className="item_data table-data" id="product_name">${body.cart_record[i].product_name}</td>
                            <td className="stock_data table-data" id="quantity">${body.cart_record[i].quantity}</td>
                            <td className="Price_data table-data" id="price">Ksh.${body.cart_record[i].price}</td>
                        </tr>
                    `)
              }
            } 

            else { setTimeout(() => {output.innerHTML = body.message}, 1500)}
        }
      )

      .catch((error) => output.innerHTML = error)

    };

  checkout = async (event) => {
    event.preventDefault();

    // const table_products = document.getElementById('products')
    const output = document.getElementById('output')
    // const dropdown = document.getElementById('btn')
    // let product_id = document.getElementById('product_id').value;

    // let product_name = document.getElementById('product_name').value;
    // let inventory = parseInt(document.getElementById('stock_count').value);
    // let min_quantity = parseInt(document.getElementById('minimum_stock').value);
    // let quantity = parseInt(document.getElementById('quantity').value);

    // let price = parseInt(document.getElementById('price').value);
    // let category = document.getElementById('btn').value;

    // let data = {
    //   product_id, 
    //   // product_name, 
    //   // inventory, 
    //   quantity,
    //   // min_quantity, 
    //   price 
    // }

    // console.log(data)
    // api.post('api/v1/sales', data)
    api.post('api/v1/sales')

    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((data) => {

        // console.log(data)
        // if (response.ok === true) {
        if (data.message) {

          // const output = document.getElementById('output')
          output.innerHTML = data.message
          setTimeout(() => {
              window.location.href ='/customer-products'
          }, 1500)
        }

        else { setTimeout(() => {output.innerHTML = data.warning}, 1500)}

      }
    )

    .catch((error) => output.innerHTML = error)

  };


  componentDidMount() {

    this.get_carts();
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name
    });
  }


  render() {

    // var el = document.getElementById('btn-cart');
    // if(el){
    //   el.addEventListener('click', this.checkout, false);
    // }

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
              <a id="lead_text" href="/customer-products">
                Back To Products
              </a>
            </div>
            <div className="Navbar-Link">
              <a id="lead_text" href="/customer">
                Dashboard
              </a>
            </div>
          </nav>
        </div>

        <h3 id="lead_text" className="center" style={{ marginLeft: '2rem' }}>
          Cart
        </h3>

        <div className="container-product">
          <input id="input-box" type="text" name="search" placeholder="Search Cart . . ." />
        </div>

        <div className="container2">
          <div id="output"></div>
        </div>

        <div className="container-products" style={{display: 'block'}}>
          <table className="main-table">
            <tbody id="carts">
              <tr>
                <th className="dash-link">Product ID</th>
                <th className="dash-link">Item</th>
                <th className="dash-link">Quantity</th>
                <th className="dash-link">Price</th>
                {/* <td><button id="btn-cart" onClick={this.fire}><i className="fas fa-shopping-cart"></i>Add to Cart</button></td> */}

              </tr>
            </tbody>
          </table>

          <hr />
          {/* <button id="btn-cart"> */}
          <button onClick={this.checkout} id="btn-cart">
          <i className="fa fa-cart-plus" aria-hidden="true"></i>
            Checkout
          </button>

        </div>
        

        

        <script src="assets/js/main.js"></script>
        <script src="assets/js/cart.js"></script>
      </Fragment>
    );
  }
}
