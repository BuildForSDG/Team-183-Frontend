import React from "react";

import NavBar from '../NavBar_Profile';
import "./Product.css";

class Chicks extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div
          className="jubotron jumbotron-fluid  "
          style={{
            background: "black",
            color: "orange",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          <h1 className="display-6">
            We also sell Raw chicken with different breeds.Make your order
            today.
          </h1>
        </div>
        <div className="cards">
          <div className="card">
            <img alt="" src="https://cdn.pixabay.com/photo/2017/07/20/15/21/cock-2522623__340.jpg" />
            <div card-text>
              <h4
                className=""
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                Brahma Chicken
              </h4>
              <h5 style={{ display: "flex", alignItems: "flex-end" }}>$150</h5>
              <button
                type="button"
                className="btn btn-primary "
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="card">
            <img alt="" src="https://cdn.pixabay.com/photo/2018/04/07/20/32/swan-3299528__340.jpg" />
            <div card-text>
              <h4
                className=""
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                Swan Chicken
              </h4>
              <h5 style={{ display: "flex", alignItems: "flex-end" }}>$150</h5>
              <button
                type="button"
                className="btn btn-primary "
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                Add to cart
              </button>
            </div>
          </div>

          <div className="card">
            <img alt="" src="https://cdn.pixabay.com/photo/2020/02/15/04/19/chicken-4849979__340.jpg" />
            <div card-text>
              <h4
                className=""
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                ISA chicken
              </h4>
              <h5 style={{ display: "flex", alignItems: "flex-end" }}>$150</h5>
              <button
                type="button"
                className="btn btn-primary "
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="card">
            <img alt="" src="https://cdn.pixabay.com/photo/2012/10/02/00/54/polish-chicken-58903__340.jpg" />
            <div card-text>
              <h4
                className=""
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                Polsih Chicken
              </h4>
              <h5 style={{ display: "flex", alignItems: "flex-end" }}>$150</h5>
              <button
                type="button"
                className="btn btn-primary "
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Chicks;
