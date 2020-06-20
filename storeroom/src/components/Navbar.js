import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar nav-expand-sm navbar-dark  px-sm-5"
          style={{ background: "orange" }}
        >
          <Link to="/">
            <img
              src={
                "https://cdn1.iconfinder.com/data/icons/social-circle-2-1/72/Soundcloud-128.png"
              }
              alt="store"
              className="navbar-brand"
              style={{ height: "70px", width: "55px" }}
            />
          </Link>
          <div className=" d-flex justify-content-center">
            <div className="nav-items   ">
              <Link to="/" className="nav-link text-white">
                Featured Chicken
              </Link>
            </div>
            <div className="nav-items   ">
              <Link to="/rawchick" className="nav-link text-white">
                Raw Chicken
              </Link>
            </div>
            <div className="nav-items  ">
              <Link to="/Blog" className="nav-link text-white">
                Blogs
              </Link>
            </div>
          </div>
          <Link to="/cart" className="ml-auto">
            <button
              style={{
                fontSize: "1.5rem",
                border: "0.05.rem solid blue",
                padding: "0.2ren",
                cursor: "pointer",
                margin: "0.2rem",
                borderRadius: "0.5rem",
              }}
            >
              <span className="mr-2">
                <i className="fas fa-cart-plus text-dark">Cart</i>
              </span>
            </button>
          </Link>
        </nav>
      </div>
    );
  }
}
