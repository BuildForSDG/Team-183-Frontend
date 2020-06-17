import React from 'react';
// import './Home.css'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <header className="header-global scroll">
        <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
          <div className="container">
            <Link to="/" className="navbar-brand">
              {/* <img
                // src=""
                src="https://lh5.googleusercontent.com/aYrbv-dWEzFXvNxw40KGp0ffKfSGjTyLKFl6lQXQLduepHfKDkXsKbo5HO-fp7Zb1eLJw3UTHftb-gFZroJ6jUYfO1DpXeg-N9BqdweyJmVec0C-GME=w1280"
                width="45"
                heght="35"
                alt=""
                className="d-inline-block align-middle mr-2"
              /> */}

              <span className="text-uppercase font-weight-bold " style={{ color: 'white' }}>
                Chicken-Farm-ke
              </span>
            </Link>

            
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div id="navbarSupportedContent" className="collapse navbar-collapse">
              <ul className="nav">
                <li className="nav-item">
                  <a
                    className="nav-link  active"
                    href="#Home"
                    style={{ color: 'orange', fontSize: '1.5rem', padding: '1.5rem' }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#About"
                    style={{ color: 'orange', fontSize: '1.5rem', padding: '1.5rem' }}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#solution"
                    style={{ color: 'orange', fontSize: '1.5rem', padding: '1.5rem' }}
                  >
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#contact"
                    style={{ color: 'orange', fontSize: '1.5rem', padding: '1.5rem' }}
                  >
                    Contact us
                  </a>
                </li>

                <div className="p-2 justify-content-end align-item-stretch marginAuto" style={{marginBlock: 'auto'}}>
              <Link to="/Login" className="btn btn-md btn-primary animate-up-2 mr-2 ">
                <i className="fas fa-sign-in-alt mr-2"></i>Log In
              </Link>

              <Link to="/Signup" className="btn btn-md btn-primary ">
                <i className="fas fa-plus-square mr-2"></i>
                Sign Up
              </Link>
            </div>
              </ul>
            </div>
            
            

          </div>
        </nav>
      </header>
    );
  }
}
export default Navbar;
