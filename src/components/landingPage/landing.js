import React from "react";
import Home from "./Home";
import About from "./About";
import Solution from "./solution";
import Contact from "./contact";

// import Navbar from "../landingPage/Navbar";

class Landing extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Home />
        <About />
        <Solution />
        <Contact />
        <div
          className="footer text-center"
          style={{
            background: "black",
            padding: "1rem",
            color: "white",
            marginTop: "-14px",
          }}
        >
          Copyright &copy; 2020 &mdash; Chicken-Farm-ke
        </div>
      </div>
    );
  }
}

export default Landing;
