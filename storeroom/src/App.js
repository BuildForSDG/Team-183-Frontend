import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import ProductList from "./components/ProductList";
import cart from "./components/cart";
import Blog from "./components/Blog";
import Rawchick from "./components/Rawchick";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/rawchick" component={Rawchick} />
        <Route path="/Blog" component={Blog} />
        <Route path="/cart" component={cart} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
