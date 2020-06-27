import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';

import { api } from '../User/UserFunctions';

export default class User_Sales extends Component {
  state = {
    first_name: ''
  };

  get_sales = () => {

    const table_sales = document.getElementById('sales')
    // console.log(table_sales)
    const user_id_header = document.getElementById('user_id')
    const user_id = new URLSearchParams(window.location.search).get("user_id");
    // console.log(user_id)
    api.get('api/v1/get_sale/'+ user_id)
    
    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((body) => {
        // console.log(body);
        // if (body.status === 200) {
        for (let i = 0; i < body.sales.length; i++) {
            // console.log(body.sales[i])
            // console.log(body.sales[i].cart_total)
            // console.log(body.sales[i].created_at)

            user_id_header.innerHTML = body.sales[i].user_id

            table_sales.innerHTML +=

                (`
                    <tr>
                        <td className="Price_data table-data">${body.sales[i].product_names}</td>
                        <td className="Price_data table-data">${body.sales[i].products_count}</td>
                        <td className="Price_data table-data">${body.sales[i].date_ordered}</td>
                        <td className="Price_data table-data">Ksh.${body.sales[i].cart_total}</td>

                    </tr>
                `)
        }
        // } else {
        //     setTimeout(() => {
        //         const output = document.getElementById('output')
        //         output.innerHTML = body.message
        //     }, 1500)
        // }

      }
    )
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
              <a id="lead_text" href="admin-sales">
                Back to Sales
              </a>
            </div>
          </nav>
        </div>
        <div className="container2">
          <div id="output">{/* <!-- Dialog Box --> */}</div>
        </div>
        <h3 id="lead_text" className="center" style={{ marginLeft: '2rem' }}>
          Sales Records for id: <p id="user_id"></p>
        </h3>

        <div className="container-product">
          <input id="input-box" type="text" name="search" placeholder="Search records . . . " />
        </div>

        <div className="container-products">
          <table className="main-table">
            <tbody id="sales">
              <tr>
                <th className="dash-link">Products</th>
                <th className="dash-link">Products Count</th>
                <th className="dash-link">Date Posted</th>
                <th className="dash-link">Sales Worth</th>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
