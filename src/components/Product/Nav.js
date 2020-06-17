import React from "react";
import "./Product.css";

class Nav extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-inverse bg-inverse sticky-top bg-dark bg-faded "
        style={{ color: "orange" }}
      >
        <div className="container">
          <div className="row">
            <div className="col" style={{ float: "left" }}>
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#cart"
              >
                Cart (<span className="total-count"></span>)
              </button>
              <button className="clear-cart btn btn-danger">Clear Cart</button>
              <ul style={{ float: "right" }}>
                <a href="/Blog" style={{ paddingRight: "2rem" }}>
                  Blogs
                </a>
                <a href="/Chicken">Chicken</a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
