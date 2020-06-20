import React, { Component } from "react";
import "./Products.css";
class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="cards" style={{ marginBottom: "3rem" }}>
          <div className="card">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2017/06/28/17/40/chicken-2451482__340.jpg"
            />
            <div card-text>
              <h4 style={{ display: "flex", alignItems: "flex-end" }}>
                Crispy fillet
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
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2017/09/03/07/10/shish-kebab-2709499__340.jpg"
            />
            <div card-text>
              <h4
                className=""
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                Shish Kebab
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
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053__340.jpg"
            />
            <div card-text>
              <h4 style={{ display: "flex", alignItems: "flex-end" }}>
                Barbecue
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
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926__340.jpg"
            />
            <div card-text>
              <h4
                className=""
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                Bacon chicken
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

        <div className="cards" style={{ marginBottom: "3rem" }}>
          <div className="card">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2016/08/25/00/22/chicken-1618459__340.jpg"
            />
            <div card-text>
              <h4 style={{ display: "flex", alignItems: "flex-end" }}>
                Roasted chicken
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
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2015/05/02/01/02/chicken-bokeumtang-749365__340.jpg"
            />
            <div card-text>
              <h4
                className=""
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                Chicken Bokeumtang
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
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2017/06/01/07/15/food-2362678__340.jpg"
            />
            <div card-text>
              <h4 style={{ display: "flex", alignItems: "flex-end" }}>
                Chicken curry
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
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2019/04/04/04/59/chicken-4102016__340.jpg"
            />
            <div card-text>
              <h4 style={{ display: "flex", alignItems: "flex-end" }}>
                chicken nuggets
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

export default ProductList;
