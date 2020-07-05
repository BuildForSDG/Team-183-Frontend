import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';

import { api } from '../User/UserFunctions';

export default class pList extends Component {
  state = {
    first_name: ''
  };

  get_products = () => {
    // const table_sales = document.getElementById('sales');
    const table_products = document.getElementById('products')

    api.get('api/v1/products')
    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((body) => {
      for (let i = 0; i < body.products.length; i++) {
        // console.log(body.products[i])
        table_products.innerHTML +=
            (`
            <tr>
                <td className="item_data table-data">${body.products[i].product_name}</td>
                <td className="stock_data table-data">${body.products[i].inventory}</td>
                <td className="Minimum_stock_data table-data">${body.products[i].min_quantity}</td>
                <td className="Price_data table-data">Ksh.${body.products[i].price}</td>
                <td><a href="pdetails?id=${body.products[i].product_id}"><button className="hidden" id="btn">View Details</button></a></td>
            </tr>
        `)
      }
    })
    // .catch((error) => (table_sales.innerHTML = error));
    .catch((error) => table_products.innerHTML = error)

  };

  componentDidMount() {
    this.get_products();
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
          <div id="output"></div>
        </div>

        <h3 id="lead_text" className="center" style={{ marginLeft: '2rem' }}>
          Inventory
        </h3>

        <div className="container-product">
          <a href="/new-product">
            <button className="add-product hidden" id="btn">
              Add Product
            </button>
          </a>
          <a href="/new-category">
            <button className="add-product hidden" id="btn">
              Create Category
            </button>
          </a>
          <input
            style={{ height: '4rem' }}
            id="input-box"
            type="text"
            name="search"
            placeholder="Search Products . . ."
          />
        </div>
        <div className="container-products">
          <table className="main-table">
            <tbody id="products">
              <tr>
                <th className="dash-link">Product Name</th>
                <th className="dash-link">Stock</th>
                <th className="dash-link">Minimum Stock</th>
                <th className="dash-link">Price</th>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
