import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/signUp";
import Landing from "./components/landingPage/landing";
import Forgot from "./components/Forgot";
import Reset from "./components/Reset";
import Profile from "./components/Profile";
import Blog from "./components/Blog/Blog";
import Product from "./components/Product/Product";
import ProductList from "./components/Product/ProductList";
import Nav from "./components/Product/Nav";
import Rawchicks from "./components/Product/Rawchicks";
import Cart from "./components/Cart/Cart";
// import Navbar from "./components/Navbar";
import Navbar from "./components/NavBar_Responsive";

// import Footer from "./components/Footer/Footer";
// import App1 from './components/App1'
import App2 from "./components/App2";

//     </BrowserRouter>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Route exact path="/" component={Landing} />
//       <Route path="/Login" component={Login} />
//       <Route path="/Signup" component={Signup} />
//       <Route path="/Forgot" component={Forgot} />
//       <Route path="/Reset" component={Reset} />
//       <Route path="/profile" component={Profile} />
//       <Route path="/blog" component={Blog} />
//       <Route path="/product-page" component={Product} />
//       <Route path="/products" component={ProductList} />
//       <Route path="/nav" component={Nav} />
//       <Route path="/chicken" component={Rawchicks} />
//       <Route path="/cart" component={cart} />
//       {/* <Route path="/edit_profile1" omponent={App1} /> */}
//       <Route path="/edit_profile" component={App2} />

//     </BrowserRouter>
//   );
// }

// export default App;

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        {/* <Switch> */}
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Forgot" component={Forgot} />
        <Route path="/Reset" component={Reset} />
        <Route path="/profile" component={Profile} />
        <Route path="/blog" component={Blog} />
        <Route path="/product-page" component={Product} />
        <Route path="/products" component={ProductList} />
        <Route path="/nav" component={Nav} />
        <Route path="/chicken" component={Rawchicks} />
        <Route path="/cart" component={Cart} />
        {/* <Route path="/edit_profile1" omponent={App1} /> */}
        <Route path="/edit_profile" component={App2} />
        {/* </Switch> */}
        {/* <Footer /> */}
        <Route exact path="/" component={Landing} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
