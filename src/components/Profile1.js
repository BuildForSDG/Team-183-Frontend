import React from "react";
import jwt_decode from 'jwt-decode';
import { withRouter } from 'react-router-dom';


class Profile extends React.Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    address: ''

  };

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      username: decoded.identity.username,
      address: decoded.identity.address,
      image_url: decoded.identity.image_url,
      email: decoded.identity.email
    });
  }

  handleProfile = e => {
    e.preventDefault();
    this.props.history.push(`/profile`)
  }

  logOut = e => {
    e.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push(`/`);
  }

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-top navbar-expand navbar-dark border-bottom"
          style={{ background: "orange" }}
        >
          <div className="container">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form
                className="navbar-search navbar-search-light form-inline mr-sm-3"
                id="navbar-search-main"
                style={{
                  float: "left",
                  alignItems: "flex-start",
                  width: "80%",
                }}
              >
                <div className="form-group mb-0">
                  <div className="input-group input-group-alternative input-group-merge">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-search"></i>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Search"
                      type="text"
                    />
                  </div>
                </div>
              </form>

              <ul
                className="navbar-nav  ml-auto ml-md-0"
                style={{
                  float: "right",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <li className="nav-item dropdown">
                  <a
                    className="nav-link pr-0"
                    href="/profile"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="media ">
                      <span className="avatar avatar-sm rounded-circle">
                        <img
                          alt=""
                          // src="https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914__340.png"
                          // src="https://res.cloudinary.com/daniel2019/image/upload/c_fill,h_100,w_100/lulihiitm8tp4npblsgh.jpg"
                          src={this.state.image_url}
                          style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </span>
                      <div className="media-body ml-2 d-none d-lg-block">
                        <span className="mb-0 text-sm font-weight-bold">
                          {/* Salma */}
                          {this.state.first_name}
                        </span>
                      </div>
                    </div>
                  </a>

                  <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-header noti-title">
                      <h6 className="text-overflow m-0">Welcome!</h6>
                    </div>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-single-02"></i>{" "}
                      <span 
                        onClick={this.handleProfile}
                      >My profile
                      </span>{" "}
                    </a>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-settings-gear-65"></i>{" "}
                      <span>Settings</span>{" "}
                    </a>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-calendar-grid-58"></i>{" "}
                      <span>Activity</span>{" "}
                    </a>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-support-16"></i> <span>Support</span>
                    </a>
                    <div className="dropdown-divider"></div>
                    <a href="#!" className="dropdown-item">
                      <i className="ni ni-user-run"></i> <span onClick={this.logOut}>Logout</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter(Profile);
