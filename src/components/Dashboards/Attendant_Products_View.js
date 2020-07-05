import React, { Component, Fragment } from 'react';
import jwt_decode from 'jwt-decode';

import { api } from '../User/UserFunctions';


const fire = async (e, q) => {
  // e.preventDefault()

  const output = document.getElementById('output')

  const quantity = parseInt(q)

  let data = {
    quantity, 

  }

  // console.log(data)
  api.post('api/v1/create_cart/'+e, data)
  // api.post('api/v1/create_cart', data)


  // .then((res) => console.log(res))
  .then((res) => res.json()) // Retrieve json
  .then((data) => {
    // console.log(data)

      // if (data.status === 201) {
      if (data) {
          output.innerHTML = data.message
          // document.getElementById("form1").submit();
          setTimeout(() => {
              window.location.href = '/cart'
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

export default class Attendant_Products_View extends Component {
  state = {
    first_name: '',
    carts_count: 0
  };


  get_carts = () => {
    const table_products = document.getElementById('products')
    // const output = document.getElementById('output')

    api.get('api/v1/all_carts')
    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((body) => {
      // console.log(body)
      // return body.carts_count
      this.setState({
        carts_count: body.carts_count
      });
    })

    .catch((error) => table_products.innerHTML = error)

  };


  get_products = () => {
    const table_products = document.getElementById('products')
    // const output = document.getElementById('output')

    api.get('api/v1/new_products')
    // .then((res) => console.log(res))
    .then((res) => res.json()) // Retrieve json
    .then((body) => {
      // console.log(body)
      for (let i = 0; i < body.products.length; i++) {

        let tr = document.createElement('tr');

        tr.innerHTML +=
                  (`
                          <td className="item_data table-data">${body.products[i].product_name}</td>
                          <td>
                            <input id=${body.products[i].product_id} type="number" min="0" className="form-input1" placeholder="quantity" required />
                          </td>

                          <td className="stock_data table-data">${body.products[i].inventory}</td>
                          <td className="Minimum_stock_data table-data">${body.products[i].min_quantity}</td>
                          <td className="Price_data table-data">Ksh.${body.products[i].price}</td>

                  `)
      let td1 = document.createElement('td');
      let link1 = document.createElement('a');
      link1.innerHTML = "Add to Cart";

      link1.classList.add('fas');
      link1.classList.add("fa-cart-plus");
      link1.classList.add("float-right");
      link1.classList.add('button');
      link1.classList.add('btn-cart1');

      link1.addEventListener("click", () => {

          let quantity1 = body.products[i].product_id
          let q = quantity1.toString()
          let quantity = document.getElementById(q).value;

          // let quantity = document.querySelector("#quantity").value;
          // let quantity = document.querySelector(".form-input1").value;

          fire(body.products[i].product_id, quantity);
      });
      td1.appendChild(link1);
      tr.appendChild(td1);

      table_products.appendChild(tr);
      }
    })

    .catch((error) => table_products.innerHTML = error)

  };


  componentDidMount() {
    this.get_products();
    let count = this.get_carts()
    console.log(count)
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name,
      carts_count: count
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
              <a id="lead_text" href="/customer">
                Back To Dashboard
              </a>
            </div>
          </nav>
        </div>
        <div className="container2">
          <div id="output">{/* <!-- Dialog Box --> */}</div>
        </div>

        <h3 id="lead_text" className="center" style={{ marginLeft: '2rem' }}>
          Inventory

          <a href="/cart"><button className="hidden notification" id="btn-cart1" style={{ float: 'right', marginRight: '1rem'}}><i className="fas fa-shopping-cart"></i> Cart<span className="badge">{this.state.carts_count}</span></button></a>


        </h3>

        <h3 id="lead_text" className="center">
          {/* Inventory */}

        </h3>

        <div className="container-product">
          <input id="input-box" type="text" name="search" placeholder="Search Products . . ." />


        </div>
        <div className="container-products">
          <table className="main-table">
            <tbody id="products">
              <tr>
                <th className="dash-link">Product Name</th>
                <th className="dash-link">Quantity</th>

                <th className="dash-link">Stock</th>
                <th className="dash-link">Minimum Stock</th>
                <th className="dash-link">Unit Price</th>
              </tr>
              {/* <form id="form1"> */}
                {/* <tr>
                  <td>
                    <input id="quantity" type="number" min="0" className="form-input" placeholder="quantity" required />
                  </td>
                </tr> */}
              {/* </form> */}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
