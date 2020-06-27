import React, { Component, Fragment } from 'react';

export default class Attendant_Dashboard extends Component {

  
  classToggle = () => {
    const navs = document.querySelectorAll('.Navbar-Items')
    navs.forEach(nav => nav.classList.toggle('Navbar-ToggleShow'));
  }

  render() {


    var el = document.querySelector('.Navbar-Link-toggle');
    if(el){
      el.addEventListener('click', this.classToggle, false);
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
        </div>

        <h3 id="lead_text" className="center" style={{ marginLeft: '2rem' }}>
          Customer Dashboard
        </h3>
        <div className="container-admin">
          <div className="dash-link">
            <h4>Inventory</h4>
            <a id="lead_text" href="/customer-products">
              <i className="fas fa-archive fa-3x"></i>
            </a>
          </div>
          <div className="dash-link">
            <h4>Total Sales</h4>
            <a id="lead_text" href="/customer-sale">
              <i className="fas fa-money-bill-wave fa-3x"></i>
            </a>
          </div>
          <div className="dash-link">
            <h4>Cart</h4>
            <a id="lead_text" href="/cart">
              <i className="fas fa-shopping-cart fa-3x"></i>
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}
