import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';

import { api } from '../User/UserFunctions';

export default class Admin_Sales extends Component {
  state = {
    first_name: ''
  };

  get_sales = () => {
    const table_sales = document.getElementById('sales');

    api.get('api/v1/all_sales')
    
    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((body) => {
      for (let i = 0; i < body.sales.length; i++) {
        // console.log(body.sales);
        // console.log(body.sales[i]);
        table_sales.innerHTML += `
                    <tr>
                        <td className="item_data table-data">${body.sales[i].user_id}</td>
                        <td className="stock_data table-data">${body.sales[i].products_count}</td>
                        <td className="Minimum_stock_data table-data">${body.sales[i].date_ordered}</td>
                        <td className="Price_data table-data">Ksh.${body.sales[i].cart_total}</td>
                        <td><a href="user-sales?user_id=${body.sales[i].user_id}"><button className="hidden" id="btn">View Details</button></a></td>
                    </tr>
                `;
      }
    })
    .catch((error) => (table_sales.innerHTML = error));
  };

  componentDidMount() {
    this.get_sales();
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
                Back To Dashboard
              </a>
            </div>
          </nav>
        </div>

        <h3 id="lead_text" className="center" style={{ marginLeft: '2rem' }}>
          Sales Records
          {/* Sales Records for {this.state.first_name} */}
        </h3>

        <div className="container-product">
          <input id="input-box" type="text" name="search" placeholder="Search records . . ." />
        </div>

        <div className="container-products">
          <table className="main-table">
            <tbody id="sales">
              <tr>
                <th className="dash-link">User user_id</th>
                <th className="dash-link">Products Sold</th>
                <th className="dash-link">Date Sold</th>
                <th className="dash-link">Sales Worth</th>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
