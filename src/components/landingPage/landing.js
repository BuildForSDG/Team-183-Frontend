import React from "react";
import Home from "./Home";
import About from "./About";
import Solution from "./solution";
import Contact from "./contact";


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
            padding: "2rem",
            color: "white",
            marginTop: "-14px",
          }}
        >
          Copyright &copy; 2020 &mdash; Chicken-Farm-Ke
        </div>
      </div>
    );
  }
}

export default Landing;
