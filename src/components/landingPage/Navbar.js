import React from "react";
// import './Home.css'
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      // <nav
      //   className="navbar navbar-expand-sm px-sm-5 navbar-dark  "
      //   style={{ background: "orange" }}
      // >
      //   <Link className="navbar-brand" href="/">
      //     <img
      //       src="https://cdn1.iconfinder.com/data/icons/social-circle-2-1/72/Soundcloud-128.png"
      //       alt=""
      //       className="d-inline-block align-middle mr-2"
      //       style={{ height: "70px", width: "55px" }}
      //     />

      //     <span
      //       className="text-uppercase font-weight-bold "
      //       style={{ color: "brown" }}
      //     >
      //       Chicken-Farm-ke
      //     </span>
      //   </Link>
      //   <ul
      //     className="nav "
      //     style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      //   >
      //     <li className="nav-item">
      //       <Link
      //         className="nav-link  active"
      //         to="#Home"
      //         style={{ color: "white", fontSize: "1.5rem" }}
      //       >
      //         Home
      //       </Link>
      //     </li>
      //     <li className="nav-item">
      //       <a
      //         className="nav-link"
      //         href="#About"
      //         style={{ color: "white", fontSize: "1.5rem" }}
      //       >
      //         About Us
      //       </a>
      //     </li>
      //     <li className="nav-item">
      //       <a
      //         className="nav-link"
      //         href="#solution"
      //         style={{ color: "white", fontSize: "1.5rem" }}
      //       >
      //         Services
      //       </a>
      //     </li>
      //     <li className="nav-item">
      //       <Link
      //         className="nav-link"
      //         to="#contact"
      //         style={{ color: "white", fontSize: "1.5rem" }}
      //       >
      //         Contact us
      //       </Link>
      //     </li>
      //     <div style={{ margin: "auto" }}>
      //       <Link className="btn btn-md btn-primary animate-up-2 " to="/Login">
      //         <i className="fas fa-sign-in-alt " aria-hidden="true"></i>Log In
      //       </Link>
      //       <Link className="btn btn-md btn-primary " to="/Signup">
      //         <i className="fas fa-plus-square " aria-hidden="true"></i>Sign Up
      //       </Link>
      //     </div>
      //   </ul>
      // </nav>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        style={{ background: "orange" }}
      >
        <Link className="navbar-brand" href="/">
          <img
            src="https://cdn1.iconfinder.com/data/icons/social-circle-2-1/72/Soundcloud-128.png"
            alt=""
            className="d-inline-block align-middle mr-2"
            style={{ height: "35px", width: "55px" }}
          />
          <span className=" font-weight-bold " style={{ color: "brown" }}>
            Chicken-Farm-ke
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#About">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#solution">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contact us
              </a>
            </li>
          </ul>
          <div style={{ margin: "auto" }}>
            <Link className="btn btn-md btn-primary animate-up-2 " to="/Login">
              <i className="fas fa-sign-in-alt " aria-hidden="true"></i>Log In
            </Link>

            <Link className="btn btn-md btn-primary " to="/Signup">
              <i className="fas fa-plus-square " aria-hidden="true"></i>Sign Up
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
